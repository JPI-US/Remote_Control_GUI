import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req) {
    const filePath = path.join(process.cwd(), 'public/data/powerData.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}