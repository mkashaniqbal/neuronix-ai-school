# Neuronix Landing Page

An award-worthy, high-end landing website for Neuronix — an AI-powered online school and academy platform. This website is designed for potential buyers and investors, showcasing the platform's value proposition, features, and market potential.

## ✨ Features

- **Modern Design**: Professional, polished design with glassmorphism effects
- **3D Visualization**: Interactive Three.js/React Three Fiber background with floating geometries and neural network visualization
- **Smooth Animations**: GSAP-powered scroll-triggered animations and transitions
- **Responsive Design**: Mobile-first approach with optimized touch targets
- **Accessibility**: Screen reader support, keyboard navigation, and reduced motion preferences
- **Performance**: Optimized for speed with Next.js 15 and Turbopack

## 🎯 Pages & Sections

### Main Landing Page (/)
1. **Hero Section**: Compelling headline with key metrics and market data
2. **Value Proposition**: Investment opportunity highlights and revenue projections
3. **Platform Features**: Interactive showcase of 5 core modules
4. **How It Works**: Implementation roadmap with timeline visualization
5. **Testimonials**: Social proof from industry leaders and stakeholders
6. **Growth Potential**: Market expansion opportunities and scalability analysis
7. **Contact CTA**: Investment inquiry form with direct contact information

### Purchase Page (/buy)
- **Complete platform purchase at $1,500**
- **Package selection** (Basic, Complete, Enterprise)
- **Included features** and add-ons at no extra cost
- **Purchase form** with order summary
- **Why choose Neuronix** benefits section

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (standard compiler for compatibility)
- **Styling**: TailwindCSS 3.4 with PostCSS
- **Animations**: GSAP with ScrollTrigger
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Design Features

### Glassmorphism
- Frosted glass effects with backdrop blur
- Semi-transparent cards with subtle borders
- Layered depth with shadow effects

### Color Palette
- Primary: Linear gradient from #667eea to #764ba2
- Secondary: White with varying opacity levels
- Accent: Blue (#667eea), Purple (#764ba2), Green (#10b981)

### Typography
- Primary: Inter (weights 300-900)
- Gradient text effects for emphasis
- Responsive font scaling

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm i -g vercel
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the 'out' directory to Netlify
```

### Manual Deployment
```bash
# Build for production
npm run build

# The built files will be in the '.next' directory
# Deploy these files to your hosting provider
```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and 3D elements load on demand
- **Preloading**: Critical resources preloaded for faster initial load
- **Caching**: Optimized caching strategies for static assets

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD schema for better search visibility
- **Open Graph**: Facebook and Twitter card optimization
- **Sitemap**: Automatic sitemap generation
- **Analytics Ready**: Easy integration with Google Analytics

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Optional: Add any API keys or configuration
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Customization
- **Colors**: Modify CSS variables in `globals.css`
- **Content**: Update content in component files
- **Animations**: Adjust GSAP timelines in components
- **3D Elements**: Customize Three.js scenes in `ThreeJSVisualization.tsx`

## 📞 Contact Information

For investment inquiries or technical questions:
- Email: investments@neuronix.ai
- Phone: +92 300 123 4567

## 📄 License

© 2024 Neuronix EdTech Solutions. All rights reserved.

---

*This website represents a professional presentation of the Neuronix platform for potential investors and buyers. All financial projections and market data are based on conservative industry analysis and should be verified during due diligence.*
# neuronix-ai-school
