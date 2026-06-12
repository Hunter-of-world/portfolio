import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schema';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const validationResult = contactSchema.safeParse(payload);

    if (!validationResult.success) {
      return NextResponse.json(
        { errors: validationResult.error.format() },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://mock-n8n-webhook.local';

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationResult.data),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Failed to forward data to webhook. Status: ${webhookResponse.status}`);
    }

    return NextResponse.json(
      { success: true, message: 'Data successfully forwarded' },
      { status: 200 }
    );
  } catch (error: any) {
    // Simulating Sentry error tracking standards
    console.error('[Sentry - Error Capture]', {
      message: error.message || 'Unknown server error',
      stack: error.stack,
      timestamp: new Date().toISOString(),
      endpoint: '/api/contact',
      method: 'POST',
    });

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
