import { NextResponse } from 'next/server';
import { findCprNumbers } from '@/textUtils';

export async function POST(request: Request) {
    const body = await request.json();

    if (!body.text || typeof body.text !== 'string') {
        return NextResponse.json({ error: 'Invalid text input' }, { status: 400 });
    }

    const cprNumbers = findCprNumbers(body.text);
    return NextResponse.json({ cprNumbers });
}
