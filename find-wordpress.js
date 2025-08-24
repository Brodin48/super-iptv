#!/usr/bin/env node

/**
 * WordPress Installation Discovery Script
 * Tests various possible WordPress configurations for SA-IPTV
 */

const { execSync } = require('child_process')

const testUrls = [
  // Direct WordPress API endpoints
  'https://blog.sa-iptv.com/wp-json/wp/v2/posts',
  'https://www.sa-iptv.com/wp-json/wp/v2/posts',
  'https://sa-iptv.com/wp-json/wp/v2/posts',
  
  // WordPress in subdirectory
  'https://sa-iptv.com/blog/wp-json/wp/v2/posts',
  'https://www.sa-iptv.com/blog/wp-json/wp/v2/posts',
  'https://sa-iptv.com/wordpress/wp-json/wp/v2/posts',
  
  // Check for WordPress admin/login
  'https://blog.sa-iptv.com/wp-admin',
  'https://www.sa-iptv.com/wp-admin',
  'https://sa-iptv.com/wp-admin',
  
  // Alternative subdomains
  'https://wp.sa-iptv.com/wp-json/wp/v2/posts',
  'https://cms.sa-iptv.com/wp-json/wp/v2/posts'
]

async function testUrl(url) {
  try {
    console.log(`\n🔍 Testing: ${url}`)
    
    const result = execSync(`curl -s -I -L -m 8 "${url}"`, { encoding: 'utf8' })
    const lines = result.split('\n')
    const statusLine = lines[0]
    
    console.log(`   Status: ${statusLine}`)
    
    if (statusLine.includes('200')) {
      console.log('   ✅ ACCESSIBLE!')
      
      // If it's a WordPress API endpoint, try to get actual data
      if (url.includes('wp-json')) {
        try {
          const data = execSync(`curl -s -L -m 8 "${url}?per_page=1"`, { encoding: 'utf8' })
          
          // Try to parse as JSON
          try {
            const posts = JSON.parse(data)
            if (Array.isArray(posts)) {
              console.log(`   📄 Posts found: ${posts.length}`)
              if (posts.length > 0) {
                console.log(`   📰 Latest: "${posts[0].title?.rendered || 'No title'}"`)
                console.log(`   🔗 WORKING API ENDPOINT FOUND!`)
                return { url, working: true, posts: posts.length }
              }
            }
          } catch (e) {
            console.log(`   ⚠️  Response not valid JSON: ${data.substring(0, 100)}...`)
          }
        } catch (e) {
          console.log('   ⚠️  Failed to fetch posts data')
        }
      }
      
      return { url, working: true }
    } else if (statusLine.includes('30')) {
      console.log('   🔄 Redirects (following...)')
    } else if (statusLine.includes('403')) {
      console.log('   🚫 Forbidden (may exist but blocked)')
    } else if (statusLine.includes('404')) {
      console.log('   ❌ Not found')
    } else {
      console.log('   ❓ Other response')
    }
    
    return { url, working: false }
  } catch (error) {
    console.log(`   ❌ Failed: Connection error`)
    return { url, working: false, error: true }
  }
}

async function main() {
  console.log('🔍 SA-IPTV WordPress Discovery')
  console.log('===============================')
  
  const workingApis = []
  const workingUrls = []
  
  for (const url of testUrls) {
    const result = await testUrl(url)
    
    if (result.working) {
      workingUrls.push(result.url)
      if (result.url.includes('wp-json') && result.posts !== undefined) {
        workingApis.push(result)
      }
    }
  }
  
  console.log('\n📊 RESULTS:')
  console.log('============')
  
  if (workingApis.length > 0) {
    console.log('🎯 WORKING WORDPRESS APIs FOUND:')
    workingApis.forEach(api => {
      console.log(`   ✅ ${api.url} (${api.posts} posts)`)
    })
    console.log('\n💡 Update your WordPress config to use one of these URLs!')
  } else if (workingUrls.length > 0) {
    console.log('⚠️  WordPress installation found but API not accessible:')
    workingUrls.forEach(url => console.log(`   - ${url}`))
    console.log('\n💡 WordPress might be installed but REST API disabled')
  } else {
    console.log('❌ No WordPress installation found at common locations')
    console.log('\n💡 Possible next steps:')
    console.log('   1. Check if blog.sa-iptv.com subdomain is properly configured')
    console.log('   2. Verify WordPress is installed and REST API is enabled')
    console.log('   3. Confirm the exact URL where WordPress is hosted')
  }
}

main().catch(console.error)