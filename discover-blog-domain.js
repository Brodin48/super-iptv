#!/usr/bin/env node

/**
 * Domain Discovery Script for SA-IPTV Blog
 * Tests various possible blog configurations
 */

const { execSync } = require('child_process')

const possibleDomains = [
  'https://blog.sa-iptv.com',
  'https://www.sa-iptv.com/blog',
  'https://sa-iptv.com/blog', 
  'https://blog.sa-iptv.com/wp-json/wp/v2',
  'https://www.sa-iptv.com/wp-json/wp/v2',
  'https://sa-iptv.com/wp-json/wp/v2'
]

async function testDomain(url) {
  try {
    console.log(`\n🔍 Testing: ${url}`)
    
    const result = execSync(`curl -s -I -m 10 "${url}"`, { encoding: 'utf8' })
    const statusLine = result.split('\n')[0]
    console.log(`   Status: ${statusLine}`)
    
    if (statusLine.includes('200')) {
      console.log('   ✅ SUCCESS - This domain is working!')
      
      // If it's a WordPress API endpoint, try to get posts
      if (url.includes('wp-json')) {
        try {
          const posts = execSync(`curl -s -m 10 "${url}/posts?per_page=1"`, { encoding: 'utf8' })
          const data = JSON.parse(posts)
          console.log(`   📄 Posts found: ${Array.isArray(data) ? data.length : 'Invalid response'}`)
          if (Array.isArray(data) && data.length > 0) {
            console.log(`   📰 Latest post: "${data[0].title?.rendered || 'No title'}"`)
          }
        } catch (e) {
          console.log('   ⚠️  WordPress API test failed')
        }
      }
      
      return { url, working: true }
    } else if (statusLine.includes('30')) {
      console.log('   🔄 REDIRECT - Following redirects...')
      return { url, working: false, redirect: true }
    } else {
      console.log('   ❌ Not accessible')
      return { url, working: false }
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message.split('\n')[0]}`)
    return { url, working: false, error: error.message }
  }
}

async function main() {
  console.log('🚀 SA-IPTV Blog Domain Discovery')
  console.log('=================================')
  
  const workingDomains = []
  
  for (const domain of possibleDomains) {
    const result = await testDomain(domain)
    if (result.working) {
      workingDomains.push(result.url)
    }
  }
  
  console.log('\n📊 RESULTS SUMMARY:')
  console.log('==================')
  
  if (workingDomains.length > 0) {
    console.log('✅ Working domains found:')
    workingDomains.forEach(domain => {
      console.log(`   - ${domain}`)
    })
    
    // Suggest the best option
    const wpApiDomain = workingDomains.find(d => d.includes('wp-json'))
    if (wpApiDomain) {
      console.log(`\n🎯 RECOMMENDED: Update your config to use:`)
      console.log(`   ${wpApiDomain}`)
    }
  } else {
    console.log('❌ No working WordPress API endpoints found')
    console.log('💡 Possible issues:')
    console.log('   - WordPress not installed')
    console.log('   - REST API disabled')
    console.log('   - Domain not properly configured')
    console.log('   - Still propagating DNS changes')
  }
}

main().catch(console.error)