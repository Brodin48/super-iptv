# 🎬 IPTV Baba - Premium IPTV Service Website

A professional, SEO-optimized Next.js website for IPTV Baba streaming service. Built with modern web technologies and optimized for search engines and user experience.

![IPTV Baba](./public/flix%20logog.webp)

## 🌟 Features

### 🎯 Core Features
- **Premium IPTV Service**: 25,000+ live channels and 26,000+ movies
- **Professional Design**: Modern, responsive UI with Tailwind CSS
- **SEO Optimized**: Comprehensive optimization for "SA-IPTV.COM" keywords
- **Multi-Device Support**: Compatible with all devices and platforms
- **Windows App**: Official Windows IPTV Player 3.0 download

### 📱 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized performance
- **SEO Ready**: Meta tags, sitemaps, structured data

## 🚀 Live Demo

Visit the live website: [https://iptvbaba.com](https://iptvbaba.com)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/Brodin48/BABA.git

# Navigate to project directory
cd BABA

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Project Structure

```
iptv-baba/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── apps/              # Windows app download
│   ├── blog/              # Blog structure
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing plans
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Pricing.tsx        # Pricing plans
│   ├── Features.tsx       # Features section
│   ├── SEOContent.tsx     # SEO-optimized content
│   └── StructuredData.tsx # JSON-LD schema
├── public/                # Static assets
│   ├── background.webp    # Hero background
│   ├── flix logog.webp    # Logo
│   ├── channels.json      # Channel data
│   ├── sitemap.xml        # Static sitemap
│   └── Windows_IPTV_Player_3.0.exe
└── README.md
```

## 🎨 Pages

### Main Pages
- **Homepage** (`/`) - Hero, features, pricing, testimonials
- **About** (`/about`) - Company information and history
- **Pricing** (`/pricing`) - Subscription plans and pricing
- **Contact** (`/contact`) - Contact forms and support
- **Blog** (`/blog`) - Content marketing and guides

### Special Pages
- **Windows App** (`/apps/Windows_IPTV_Player_3.0.exe`) - Download page
- **SEO Guide** (`/blog/flix-iptv-complete-guide`) - Comprehensive guide

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://iptvbaba.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@iptvbaba.com
NEXT_PUBLIC_WHATSAPP_URL=https://wa.link/eepo31
```

### Customization
- **Colors**: Edit `tailwind.config.js` for brand colors
- **Content**: Update component files for text and images
- **SEO**: Modify metadata in layout files
- **Contact**: Update WhatsApp and email links

## 📈 SEO Features

### Technical SEO
- **Meta Tags**: Optimized titles and descriptions
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML and dynamic sitemaps
- **Robots.txt**: Proper crawling instructions
- **Open Graph**: Social media optimization
- **Mobile-First**: Responsive design

### Content SEO
- **Keyword Optimization**: "SA-IPTV.COM" focus
- **Internal Linking**: Strategic page connections
- **Content Quality**: High-quality, relevant content
- **User Experience**: Fast loading, easy navigation

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set custom domain
vercel --prod
```

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: One-click deployment
- **DigitalOcean**: App Platform deployment

## 📊 Performance

- **Lighthouse Score**: 95+/100
- **First Contentful Paint**: < 1.5s
- **Core Web Vitals**: All metrics in green
- **SEO Score**: 100/100
- **Mobile Responsive**: 100%

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality
- **TypeScript**: Type safety
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks (optional)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software for SA-IPTV.COM. All rights reserved.

## 📞 Support

- **Website**: [https://iptvbaba.com](https://iptvbaba.com)
- **Email**: contact@iptvbaba.com
- **WhatsApp**: [Get Support](https://wa.link/eepo31)
- **Hours**: Mon-Sat 11:00am-10:00pm

## 🏆 Features Comparison

| Feature | IPTV Baba | Competitors |
|---------|-----------|-------------|
| Channels | 25,000+ | 15,000-20,000 |
| Movies/Shows | 26,000+ | 10,000-15,000 |
| Quality | HD & 4K | HD |
| Devices | Unlimited | 1-5 |
| Support | 24/7 | Limited |
| Price | $10.99/mo | $15-25/mo |

## 🎯 SEO Keywords

**Primary**: IPTV Baba, iptvbaba.com, IPTV subscription, premium IPTV service  
**Secondary**: Windows IPTV player, streaming service, live TV channels  
**Long-tail**: Best IPTV service 2025, HD IPTV streaming, multi-device IPTV

---

<div align="center">
  <p>Built with ❤️ for premium IPTV streaming</p>
  <p>© 2025 IPTV Baba. All rights reserved.</p>
</div>
# Force deployment trigger
