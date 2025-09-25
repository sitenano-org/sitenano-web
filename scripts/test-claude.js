#!/usr/bin/env node

// Simple script to test Claude API integration
require('dotenv').config({ path: '.env.local' });

async function testClaudeAPI() {
  console.log('🧪 Testing Claude API Integration...\n');

  // Check if API key is set
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY not found in .env.local');
    console.log('Please add your API key to .env.local:');
    console.log('ANTHROPIC_API_KEY=your_key_here');
    process.exit(1);
  }

  console.log('✅ API key found');
  
  try {
    // Test GET endpoint
    console.log('\n🔍 Testing GET /api/claude...');
    const getResponse = await fetch('http://localhost:3000/api/claude');
    const getResult = await getResponse.json();
    console.log('✅ GET endpoint response:', getResult);

    // Test POST endpoint
    console.log('\n📤 Testing POST /api/claude...');
    const postResponse = await fetch('http://localhost:3000/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello! Can you tell me a short fact about TypeScript?',
        maxTokens: 200,
      }),
    });

    const postResult = await postResponse.json();
    
    if (postResponse.ok) {
      console.log('✅ POST endpoint successful!');
      console.log('📝 Claude\'s response:', postResult.response);
      console.log('📊 Token usage:', postResult.usage);
    } else {
      console.error('❌ POST endpoint failed:', postResult);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure your development server is running:');
    console.log('npm run dev');
  }
}

// Run the test
testClaudeAPI(); 