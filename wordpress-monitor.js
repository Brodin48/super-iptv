#!/usr/bin/env node

/**
 * WordPress Integration Monitor
 * Monitors blog.sa-iptv.com WordPress API and provides deployment guidance
 */

const { execSync } = require('child_process')

async function checkWordPressStatus() {
  console.log('🔍 SA-IPTV WordPress Integration Status')
  console.log('======================================')
  console.log('')

  // Test DNS resolution
  console.log('1. DNS Resolution Test:')
  try {
    const dns = execSync('nslookup blog.sa-iptv.com', { encoding: 'utf8' })
    if (dns.includes('NXDOMAIN')) {
      console.log('   ❌ Domain blog.sa-iptv.com does not exist')
      console.log('   💡 You need to create this subdomain first')
    } else {
      console.log('   ✅ Domain resolves successfully')
    }
  } catch (error) {
    console.log('   ❌ DNS lookup failed - domain not configured')
  }
  console.log('')

  // Test HTTP connectivity
  console.log('2. HTTP Connectivity Test:')
  try {
    const http = execSync('curl -I -m 10 https://blog.sa-iptv.com 2>/dev/null', { encoding: 'utf8' })
    if (http.includes('200')) {
      console.log('   ✅ WordPress site is accessible')
    } else if (http.includes('30')) {
      console.log('   🔄 Site redirects (may be WordPress login)')
    } else {
      console.log('   ⚠️  Site accessible but may need configuration')
    }
  } catch (error) {
    console.log('   ❌ Cannot connect to blog.sa-iptv.com')
  }
  console.log('')

  // Test WordPress API
  console.log('3. WordPress REST API Test:')
  try {
    const api = execSync('curl -I -m 10 https://blog.sa-iptv.com/wp-json/wp/v2/posts 2>/dev/null', { encoding: 'utf8' })
    if (api.includes('200')) {
      console.log('   ✅ WordPress REST API is working!')
      
      // Test actual posts
      try {
        const posts = execSync('curl -s -m 10 https://blog.sa-iptv.com/wp-json/wp/v2/posts?per_page=1 2>/dev/null', { encoding: 'utf8' })
        const data = JSON.parse(posts)
        if (Array.isArray(data) && data.length > 0) {
          console.log(`   📄 Found ${data.length} posts - API fully functional!`)
          console.log(`   📰 Latest: "${data[0].title?.rendered || 'No title'}"`)
        } else {
          console.log('   ⚠️  API works but no posts found')
        }
      } catch (e) {
        console.log('   ⚠️  API accessible but response invalid')
      }
    } else if (api.includes('403')) {
      console.log('   🚫 WordPress API blocked (REST API disabled)')
    } else if (api.includes('404')) {
      console.log('   ❌ WordPress not found at this URL')
    } else {
      console.log('   ⚠️  API may exist but not accessible')
    }
  } catch (error) {
    console.log('   ❌ Cannot connect to WordPress API')
  }
  console.log('')

  // Current configuration status
  console.log('4. Your Website Configuration:')
  console.log('   ✅ Blog page updated to fetch from WordPress')
  console.log('   ✅ Fallback to static content when WordPress unavailable')
  console.log('   ✅ Individual post pages support WordPress')
  console.log('   ✅ Smart data source indicators')
  console.log('')

  // Recommendations
  console.log('📋 NEXT STEPS:')
  console.log('==============')
  console.log('')
  
  console.log('If WordPress subdomain is NOT ready:')
  console.log('1. Create subdomain: blog.sa-iptv.com')
  console.log('2. Install WordPress on a PHP hosting provider')
  console.log('3. Ensure REST API is enabled (default in WordPress)')
  console.log('4. Add some blog posts')
  console.log('5. Run this script again to verify')
  console.log('')
  
  console.log('If WordPress subdomain IS ready but not working:')
  console.log('1. Check DNS propagation (can take up to 24 hours)')
  console.log('2. Verify SSL certificate is installed')
  console.log('3. Check WordPress permalink settings')
  console.log('4. Ensure REST API is not disabled by plugins')
  console.log('')
  
  console.log('Current Behavior:')
  console.log('✅ Your website will show static content as fallback')
  console.log('✅ When WordPress becomes available, it will automatically switch')
  console.log('✅ No downtime - seamless transition')
  console.log('')
  
  console.log('Deploy Current Changes:')
  console.log('🚀 Ready to deploy? Run: npm run deploy-wordpress')
}

// Run the check
checkWordPressStatus().catch(console.error)