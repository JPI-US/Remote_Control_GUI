import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        // Parse latitude and longitude as floats
        const lat = parseFloat(searchParams.get("lat"));
        const lon = parseFloat(searchParams.get("lon"));

        console.log("API called with Lat:", lat, "Lon:", lon);

        if (isNaN(lat) || isNaN(lon)) {
            return NextResponse.json(
                { error: "Latitude and longitude must be valid numbers" },
                { status: 400 }
            );
        }

        // Get NOAA grid point
        const pointRes = await fetch(
            `https://api.weather.gov/points/${lat},${lon}`,
            {
                headers: {
                "User-Agent": "Remote GUI Dashboard (msalla@jantaus.com)",
                Accept: "application/geo+json",
                },
            }
        );

        if (!pointRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch NOAA point data" },
                { status: pointRes.status }
            );
        }

        const pointData = await pointRes.json();
        const hourlyUrl = pointData.properties.forecastHourly;


        // Fetch hourly forecast
        const forecastRes = await fetch(hourlyUrl, {
            headers: {
                "User-Agent": "Remote GUI Dashboard (msalla@jantaus.com)",
                Accept: "application/geo+json",
            },
        });

        if (!forecastRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch NOAA hourly forecast" },
                { status: forecastRes.status }
            );
        }

        const forecastData = await forecastRes.json();
        const periods = forecastData.properties.periods;
        const currentPeriod = periods[0];

        // Map hourly data
        const hourly = periods.map((p) => ({
            time: p.startTime,
            temp: Math.round(((p.temperature - 32) * 5) / 9), // F → C
            wind_speed: parseFloat(p.windSpeed), // e.g. "10 mph"
            humidity: p.relativeHumidity?.value ?? null,
            clouds: null, // NOAA does not provide cloud cover %
        }));

        const currentHour = hourly[0];

        //Format response
        const formatted = {
            location: { lat, lon },
            current: {
                temp: currentHour?.temp ?? null,
                wind_speed: currentHour?.wind_speed ?? null,
                humidity: currentHour?.humidity ?? null,
                condition: currentPeriod?.shortForecast ?? 'Unknown',
            },
            hourly,
        };

        return NextResponse.json(formatted);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

