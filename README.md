# GlowSeller - Automate Your Depop Empire

🚀 **A production-ready full-stack application blueprint for GlowSeller using the T3 Stack (Next.js App Router, TypeScript, Tailwind CSS, Prisma) designed to be deployed directly to Vercel.**

![GlowSeller Dashboard](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Daily Winning Products** - Automated trending product discovery via GitHub Actions
- **AI Description Generator** - Generate trendy, Gen-Z style Depop descriptions using OpenRouter
- **Background Remover** - One-click background removal using Replicate AI
- **User Authentication** - Secure auth powered by Clerk
- **Modern Stack** - Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma
- **Dark Mode** - Beautiful, modern UI with purple/pink gradient theming

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (Neon.tech/Supabase)
- **Auth:** Clerk
- **AI:** OpenRouter API, Replicate
- **Deployment:** Vercel
- **Automation:** GitHub Actions (Daily scraping)

## 🚀 Quick Start

### Prerequisites

1. **Vercel Account** - Connects to your GitHub
2. **Neon.tech or Supabase** - Free Serverless Postgres Database
3. **Clerk** - User Authentication
4. **OpenRouter & Replicate API Keys** - For AI features

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd glow-seller
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"

   # Clerk Auth
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # AI APIs
   OPENROUTER_API_KEY=sk-or-v1-...
   REPLICATE_API_TOKEN=your_replicate_token_here

   # Optional: Stripe
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure deployment

3. **Set Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from your `.env` file

4. **Deploy:**
   - Click "Deploy" - Vercel will handle the rest!

### Database Setup

1. **Create database on Neon.tech or Supabase**
2. **Get the connection string**
3. **Add `DATABASE_URL` to Vercel environment variables**

### GitHub Secrets Setup

1. Go to your GitHub repository
2. Settings → Secrets and Variables → Actions
3. Add `DATABASE_URL` as a secret (needed for the scraper)

## 🤖 Automation Features

### Daily Product Scraper
- **GitHub Actions** automatically runs daily at 8 AM UTC
- **Scrapes trending products** from various sources
- **Populates database** with winning products
- **Manual trigger available** in GitHub Actions tab

### API Endpoints

- `POST /api/ai/generate` - Generate product descriptions
- `POST /api/remove-bg` - Remove image backgrounds
- `GET /api/cron` - Health check endpoint

## 📁 Project Structure

```
glow-seller/
├── .github/workflows/scraper.yml    # Daily scraping automation
├── prisma/schema.prisma             # Database schema
├── scripts/daily-scrape.ts          # Product scraping script
├── src/
│   ├── app/
│   │   ├── api/                     # API routes
│   │   ├── dashboard/               # Protected dashboard pages
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Landing page
│   ├── components/
│   │   └── Sidebar.tsx              # Navigation sidebar
│   └── lib/
│       ├── db.ts                    # Prisma client
│       └── utils.ts                 # Utility functions
├── .env.example                     # Environment template
├── next.config.mjs                  # Next.js config
├── tailwind.config.ts               # Tailwind CSS config
└── package.json                     # Dependencies
```

## 🎨 Design Features

- **Dark Mode UI** - Modern dark theme
- **Purple/Pink Gradients** - Consistent brand colors
- **Responsive Design** - Mobile-first approach
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful iconography

## 🛡 Security Features

- **Authentication Required** - All AI features require user login
- **Environment Variables** - Sensitive data properly secured
- **API Rate Limiting** - Built-in Next.js protection
- **Database Security** - Prisma ORM with parameterized queries

## 🚀 Scaling & Production

This application is built for scale:

- **Serverless Architecture** - Zero-config Vercel deployment
- **Database Optimization** - Efficient Prisma queries
- **Caching Strategy** - Next.js automatic optimizations
- **Error Handling** - Comprehensive error boundaries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the [GitHub Issues](https://github.com/your-username/glow-seller/issues)
2. Create a new issue with detailed information
3. Join our community discussions

---

**Built with ❤️ using the T3 Stack. Ready to deploy to Vercel with zero configuration!**
