import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Claude API key not configured' },
        { status: 500 }
      );
    }

    const { message, maxTokens = 1000 } = await request.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: maxTokens,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      response: response.content[0].type === 'text' ? response.content[0].text : '',
      usage: response.usage,
    });

  } catch (error: any) {
    console.error('Claude API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Claude API endpoint is working',
    methods: ['POST'],
    example: {
      url: '/api/claude',
      method: 'POST',
      body: {
        message: 'Hello Claude!',
        maxTokens: 1000
      }
    }
  });
} 