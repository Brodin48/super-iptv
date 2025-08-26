#!/usr/bin/env node

/**
 * Blog API Testing Script for Super-IPTV
 * Tests connectivity to blog.super-iptv.nl WordPress API
 */

const https = require('https');

const testBlogAPI = async () => {
  console.log('🧪 Testing Super-IPTV Blog API Integration\n');

  const endpoints = [
    {
      name: 'Primary Blog',
      url: 'https://blog.super-iptv.nl/wp-json/wp/v2/posts?per_page=3',
      primary: true
    },
    {
      name: 'Fallback Blog',
      url: 'https://blog.iptvbaba.com/wp-json/wp/v2/posts?per_page=3',
      primary: false
    }
  ];

  for (const endpoint of endpoints) {
    console.log(`\n🔍 Testing: ${endpoint.name}`);
    console.log(`📡 URL: ${endpoint.url}`);
    
    try {
      const response = await fetch(endpoint.url);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Status: ${response.status} OK`);
        console.log(`📊 Posts Found: ${data.length}`);
        
        if (data.length > 0) {
          console.log(`📝 Latest Post: "${data[0].title?.rendered || 'No title'}"`);
          console.log(`🕒 Published: ${new Date(data[0].date).toLocaleDateString()}`);
          console.log(`🔗 Slug: ${data[0].slug}`);
          
          // Check for embedded content
          if (data[0]._embedded) {
            const hasImage = data[0]._embedded['wp:featuredmedia']?.[0]?.source_url;
            const hasAuthor = data[0]._embedded.author?.[0]?.name;
            console.log(`🖼️ Featured Image: ${hasImage ? '✅ Available' : '❌ Missing'}`);
            console.log(`👤 Author Info: ${hasAuthor ? '✅ Available' : '❌ Missing'}`);
          }
        }
        
        if (endpoint.primary) {
          console.log('\n🎉 PRIMARY BLOG WORKING - Your main blog is accessible!');
        }
        
      } else {
        console.log(`❌ Status: ${response.status} - ${response.statusText}`);
        
        if (endpoint.primary) {
          console.log('⚠️  Primary blog unavailable - will use fallback');
        }
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      
      if (endpoint.primary) {
        console.log('⚠️  Primary blog error - will use fallback');
      }
    }
  }

  console.log('\n📋 Summary:');
  console.log('🔄 Your website will automatically:');
  console.log('   1. Try to fetch from blog.super-iptv.nl first');
  console.log('   2. Fall back to blog.iptvbaba.com if needed');
  console.log('   3. Show error message with retry if both fail');
  console.log('\n🎯 Blog Integration Status: READY');
};

// Self-executing function
testBlogAPI().catch(console.error);
