# CloudAcademy - Modern Cloud Interview Questions & Certification Platform

A modern Next.js website for selling cloud technology interview questions and certification programs (AWS, Azure, GCP).

## 🚀 Features

- **Modern UI/UX**: Built with Next.js, React, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Multiple Cloud Platforms**: AWS, Azure, and Google Cloud courses
- **Interview Questions**: Pre-built question bank with answers
- **Certification Programs**: Complete certification preparation courses
- **Shopping Cart**: E-commerce functionality ready for Stripe integration
- **Animated Components**: Smooth animations with Framer Motion
- **Performance Optimized**: Image optimization, code splitting, and more

## 📁 Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page
│   ├── courses/                 # Courses listing page
│   ├── certifications/          # Certifications page
│   ├── interview-questions/     # Interview questions page
│   ├── about/                   # About page
│   └── cart/                    # Shopping cart
├── components/                   # Reusable components
│   ├── NavigationBar.tsx        # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── ProcessSection.tsx       # 4-step process
│   ├── FeaturedCourses.tsx      # Course cards
│   ├── Testimonials.tsx         # Customer testimonials
│   └── CTASection.tsx           # Call-to-action
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── postcss.config.js            # PostCSS configuration
```

## 🛠️ Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (configured)
- **Payment**: Stripe (configured)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update custom colors in `tailwind.config.js`:

```js
colors: {
  primary: '#6366f1',      // Indigo
  secondary: '#ec4899',    // Pink
  dark: '#0f172a',
  light: '#f8fafc',
}
```

### Content Updates

- **Courses**: Edit course data in `components/FeaturedCourses.tsx`
- **Certifications**: Update certifications in `app/certifications/page.tsx`
- **Interview Questions**: Modify questions in `app/interview-questions/page.tsx`
- **Navigation**: Update menu in `components/NavigationBar.tsx`

## 🔗 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, process, featured courses |
| Courses | `/courses` | Browse all available courses |
| Certifications | `/certifications` | Cloud certification programs |
| Interview Questions | `/interview-questions` | Sample interview questions |
| About | `/about` | Company information and team |
| Shopping Cart | `/cart` | Shopping cart with order summary |

## 💳 Payment Integration (Future)

The project is configured for Stripe integration. To enable payments:

1. Install Stripe packages:
   ```bash
   npm install @stripe/react-stripe-js @stripe/stripe-js
   ```

2. Add your Stripe keys to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

3. Create checkout routes and integrate Stripe payment form

## 📊 Key Components

### NavigationBar
- Sticky header with logo and menu
- Mobile responsive hamburger menu
- Active link highlighting

### Hero Section
- Eye-catching gradient background
- Animated text and cards
- CTA buttons with animations

### FeaturedCourses
- Course cards with ratings and pricing
- Hover effects and scale animations
- Enrollment buttons

### Testimonials
- Student reviews with ratings
- Statistics section
- Social proof elements

### CTASection
- Call-to-action with benefits list
- Premium pricing card
- Trust indicators (guarantee, support)

## 🎯 Performance Features

- Image optimization with Next.js Image
- Code splitting per route
- CSS-in-JS with Tailwind
- Smooth page transitions
- Optimized animations with Framer Motion

## 📝 Notes

- All placeholder images use `via.placeholder.com` - replace with real images
- Testimonials are sample data - update with real customer reviews
- Pricing is editable in course/certification components
- Contact information in footer needs updating

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Works with any Node.js hosting (AWS, Azure, Heroku, etc.)

Build command: `npm run build`
Start command: `npm start`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Happy learning! 🎓**
