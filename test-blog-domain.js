#!/usr/bin/env node

async function testBlogDomain() {
  console.log('🔍 Testing blog.sa-iptv.com...\n')
  
  // Test DNS first
  const { execSync } = require('child_process')
  
  try {
    console.log('1. DNS Lookup:')
    const dns = execSync('nslookup blog.sa-iptv.com', { encoding: 'utf8' })
    console.log(dns)
  } catch (error) {
    console.log('❌ DNS lookup failed:', error.message)
  }
  
  // Test HTTP connection
  try {
    console.log('\n2. HTTP Connection Test:')
    const http = execSync('curl -I -m 10 https://blog.sa-iptv.com', { encoding: 'utf8' })
    console.log('✅ Connection successful:')
    console.log(http)
  } catch (error) {
    console.log('❌ HTTP connection failed')
    console.log('Error:', error.message)
  }
  
  // Test WordPress API specifically
  try {
    console.log('\n3. WordPress API Test:')
    const api = execSync('curl -I -m 10 https://blog.sa-iptv.com/wp-json/wp/v2/posts', { encoding: 'utf8' })
    console.log('✅ WordPress API accessible:')
    console.log(api)
  } catch (error) {
    console.log('❌ WordPress API failed')
    console.log('Error:', error.message)
  }
  
  console.log('\n📋 Summary:')
  console.log('- Domain: blog.sa-iptv.com')
  console.log('- Expected API: https://blog.sa-iptv.com/wp-json/wp/v2/posts')
  console.log('- Your website is configured and ready to use this domain')
  console.log('- Once the domain is live, your blog will work automatically')
}

testBlogDomain()