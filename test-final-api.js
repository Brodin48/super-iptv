const fetch = require('node-fetch');

async function testAPI() {
  try {
    console.log('Testing blog-sa.iptv.com API...');
    const response = await fetch('https://blog-sa.iptv.com/wp-json/wp/v2/posts?per_page=1');
    
    console.log('Status:', response.status);
    console.log('OK:', response.ok);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API Working!');
      console.log('Posts found:', data.length);
      if (data.length > 0) {
        console.log('Latest post:', data[0].title.rendered);
        console.log('Post date:', data[0].date);
      }
    } else {
      console.log('❌ HTTP Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('❌ Connection Error:', error.message);
  }
}

testAPI();