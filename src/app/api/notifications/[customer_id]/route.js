import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function GET(request, context){
    try{
        if (!context || !context.params) {
            console.error('Missing context or params');
            return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
        }
        await (context.params);

        const token = request.cookies.get('session')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const authUserId = decoded.sub;

        const idParam = (await (context.params)).customer_id;
        const customerId = parseInt(idParam);

        if (isNaN(customerId)) {
            console.error('Invalid customer ID:', idParam);
            return NextResponse.json({ error: 'Invalid customer ID' }, { status: 400 });
        }

        // Only allow the user to access their own data
        if (userId !== authUserId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const notifications = await prisma.notifications.findUnique({
            where: { customer_id: customerId },
            select: {
                push_notifications_enabled: true,
                push_notify_login: true,
                notification_tone: true,
            },
        });

        if (!notifications) {
            console.warn(`Notifications not found for ID ${customerId}`);
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(notifications);

    } catch (error){
        console.error('Unexpected error in /api/notifications/[customer_id]:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function PUT(req, context) {
    const { params } = context;
    const customerId = parseInt(params.customer_id);

    console.log("Customer ID:", customerId);

    try {
        const body = await req.json();

        console.log("Request body:", body);

        if (isNaN(customerId)) {
            return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
        }

        const updatedNotifications = await prisma.notifications.update({
            where: { customer_id: customerId },
            data: {
                push_notifications_enabled: body.push_notifications_enabled,
                push_notify_login: body.push_notify_login,
                notification_tone: body.notification_tone,
            },
        });

        return NextResponse.json( updatedNotifications );
    } catch (error) {
        console.error('Prisme update error:', error);
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}
