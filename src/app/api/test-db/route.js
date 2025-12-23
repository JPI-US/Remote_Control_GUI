import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const customers = await prisma.customer.findMany();
        return Response.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}