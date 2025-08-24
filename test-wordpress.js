// Test WordPress connection
console.log('Testing WordPress API connection...')

fetch('https://blog.sa-iptv.com/wp-json/wp/v2/posts?per_page=5')
  .then(res => {
    console.log('Response status:', res.status)
    return res.json()
  })
  .then(posts => {
    console.log('✅ SUCCESS! Found', posts.length, 'posts')
    posts.forEach(post => {
      console.log(`- ${post.title.rendered} (ID: ${post.id})`)
    })
  })
  .catch(err => {
    console.error('❌ FAILED:', err.message)
  })
