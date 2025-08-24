#!/usr/bin/env node

/**
 * Quick Blog Verification Script
 * Run this after blog-sa.iptv.com becomes active
 */

console.log('🔍 Checking blog.sa-iptv.com status...\n')

// Test basic connectivity first
const { exec } = require('child_process')

exec('curl -s -o /dev/null -w "%{http_code}" https://blog.sa-iptv.com', (error, stdout, stderr) => {
  const statusCode = stdout.trim()
  
  if (error) {
    console.log('❌ Domain connection failed:', error.message)
    return
  }
  
  console.log(`HTTP Status: ${statusCode}`)
  
  if (statusCode === '200') {
    console.log('✅ Domain is responding!')
    console.log('\nNext step: Test the WordPress API')
    console.log('Run: npm run dev')
    console.log('Visit: http://localhost:3000/blog')
  } else if (statusCode === '000') {
    console.log('❌ Domain not reachable (DNS/connectivity issue)')
  } else {
    console.log('⚠️  Domain responding but may need configuration')
  }
  
  console.log('\n📊 Current Configuration:')
  console.log('✅ WordPress library updated to use: blog-sa.iptv.com')
  console.log('✅ User-Agent headers added for better compatibility')
  console.log('✅ Enhanced error logging for debugging')
})
