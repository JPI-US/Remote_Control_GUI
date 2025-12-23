import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, context){
    try{
        if (!context || !context.params) {
            console.error('Missing context or params');
            return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
        }
        await (context.params);

        const idParam = (await (context.params)).customer_id;
        const customerId = parseInt(idParam);

        if (isNaN(customerId)) {
            console.error('Invalid customer ID:', idParam);
            return NextResponse.json({ error: 'Invalid customer ID' }, { status: 400 });
        }

        const telemetry = await prisma.towers.findMany({
            //where: { customer_id: customerId },
            select: {
                id: true,
                length: true,
                height: true,
                width: true,
                software_version: true,
                /* telemetry : {
                    select: {
                        angle: true,
                        power_output: true,
                        tower_id: true
                    }
                } */
            },
        });

        if (!telemetry || !telemetry.length === 0) {
            console.warn(`No towers/telemetry found for ID ${customerId}`);
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(telemetry);

    } catch (error){
        console.error('Unexpected error in /api/telemetry/[customer_id]:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}


