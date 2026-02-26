import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import Settings from '@/components/general';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    const { email, firstName, lastName, password, address } = await request.json();

    const safeAddress = address?.trim() === '' ? null : address;

    if (!email || !firstName || !lastName || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        // Check if user already exists
        const existingUser = await prisma.customer.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newCustomer = await prisma.customer.create({
            data: {
                email,
                first_name: firstName,
                last_name: lastName,
                password_hash: hashedPassword,
                address: safeAddress, // <- store null if empty
                setting: {
                    create: {},   
                },
                notification: {
                    create: {},
                }
            },
            include:{
                setting: true,
                notification: true,
            },
        });

        return NextResponse.json({ id: newCustomer.id, email: newCustomer.email }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
