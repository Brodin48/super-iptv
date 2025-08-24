// Test new WordPress API connection for blog-sa.iptv.com
const testNewWordPressAPI = async () => {
  try {
    console.log('Testing new WordPress API connection...')
    console.log('URL: https://blog-sa.iptv.com/wp-json/wp/v2/posts?per_page=1')
    
    const response = await fetch('https://blog-sa.iptv.com/wp-json/wp/v2/posts?per_page=1', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SA-IPTV-Website/1.0'
      }
    })
    
    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))
    
    if (response.ok) {
      const data = await response.json()
      console.log('✅ API is working!')
      console.log('Posts found:', data.length)
      if (data.length > 0) {
        console.log('Sample post title:', data[0]?.title?.rendered || 'No title')
        console.log('Sample post date:', data[0]?.date || 'No date')
        console.log('Sample post slug:', data[0]?.slug || 'No slug')
      }
      return { success: true, data }
    } else {
      console.error('❌ API request failed:', response.status, response.statusText)
      const errorText = await response.text()
      console.error('Error details:', errorText)
      return { success: false, error: response.statusText }
    }
  } catch (error) {
    console.error('❌ WordPress API connection failed:', error.message)
    return { success: false, error: error.message }
  }
}

// Test the connection
testNewWordPressAPI().then(result => {
  if (result.success) {
    console.log('\n🎉 Success! You can now update your WordPress configuration.')
  } else {
    console.log('\n⚠️  Please check the domain and API availability.')
  }
})