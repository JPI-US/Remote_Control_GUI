import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma'; // adjust path as needed

export async function PUT(req, context) {
    try {
        await (context.params);
        const token = request.cookies.get('session')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const authUserId = decoded.sub;
    
        const idParam = (await (context.params)).id;
        const userId = parseInt(idParam);
        
        if (isNaN(userId)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        // Only allow the user to update their own data
        if (userId !== authUserId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { currentPassword, newPassword } = await req.json();

        const user = await prisma.customer.findUnique({
            where: { id: userId },
        });
      
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        const isMatch = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isMatch) {
            return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
        }
      
        const newHash = await bcrypt.hash(newPassword, 10);
      
        await prisma.customer.update({
            where: { id: userId },
            data: { password_hash: newHash },
        });
      
        return NextResponse.json({ message: 'Password changed successfully' });
    } catch{
        console.error('Error changing password:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
