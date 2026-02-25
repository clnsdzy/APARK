# APARK — Abuja Parks & Recreation

A modern web application for discovering and exploring parks and outdoor recreation centers across Abuja, the Federal Capital Territory of Nigeria. APARK helps residents and visitors find parks that match their interests, check opening hours, read reviews, and get directions using integrated Google Maps.

## Features

- **Park Discovery**: Browse all major parks and recreation centers in Abuja with detailed information
- **Smart Filtering**: Filter parks by:
  - Activity type (sports, picnic, nature, fitness, etc.)
  - District (Wuse, Maitama, Gwarinpa, etc.)
  - Crowd levels (quiet, moderate, busy)
  - Family-friendliness rating
- **Park Details**: Access comprehensive information including:
  - Park descriptions and amenities
  - Opening hours and entry fees
  - Available activities and facilities
  - Visitor reviews and ratings
  - Family-friendliness scores
  - Embedded Google Maps with directions
- **Google Maps Integration**: Get real-time directions to parks directly from the app
- **Responsive Design**: Fully responsive and works seamlessly on mobile, tablet, and desktop
- **Fast & Minimal**: Clean, minimal UI with fast load times and excellent performance

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with semantic design tokens
- **UI Components**: shadcn/ui
- **Typography**: Inter font family
- **Color System**: Nature-inspired green primary color with carefully curated neutrals

### Backend & Data
- **Data Layer**: Mock data (ready to be replaced with custom API)
- **Maps API**: Google Maps for directions and location services
- **Database**: Planned for API backend (not yet implemented)

### Development
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page with parks explorer
│   ├── about/
│   │   └── page.tsx            # About APARK page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy page
│   ├── terms/
│   │   └── page.tsx            # Terms of use page
│   ├── parks/
│   │   └── [id]/
│   │       └── page.tsx        # Individual park detail page
│   └── globals.css             # Global styles and design tokens
│
├── components/
│   ├── navbar.tsx              # Top navigation bar
│   ├── footer.tsx              # Reusable footer with links
│   ├── park-card.tsx           # Park card component for grid
│   ├── filter-bar.tsx          # Activity/district/crowd filtering
│   ├── parks-explorer.tsx      # Main explorer with search + filters + grid
│   ├── ui/                     # shadcn/ui components (auto-generated)
│   └── theme-provider.tsx      # Theme configuration
│
├── lib/
│   ├── types.ts                # TypeScript types for Park, Activity, etc.
│   ├── data.ts                 # Mock park data (6 parks with full details)
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── public/
│   └── images/                 # Generated park images
│       ├── millennium-park.jpg
│       ├── life-camp-park.jpg
│       ├── area1-gardens.jpg
│       ├── wuse-park.jpg
│       ├── gwarinpa-park.jpg
│       └── maitama-gardens.jpg
│
├── hooks/
│   ├── use-mobile.ts          # Mobile detection hook
│   └── use-toast.ts           # Toast notifications hook
│
└── Configuration Files
    ├── next.config.mjs        # Next.js configuration
    ├── tsconfig.json          # TypeScript configuration
    ├── tailwind.config.ts     # Tailwind CSS configuration
    ├── package.json           # Project dependencies
    └── pnpm-lock.yaml         # Dependency lock file
```

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/clnsdzy/APARK.git
   cd APARK
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
pnpm build
pnpm start
```

## Current Data

APARK currently includes 6 major parks in Abuja with mock data:

1. **Millennium Park** — Abuja's largest green space with fountains and gardens
2. **Life Camp Park** — Community park with sports facilities and playground
3. **Area 1 Gardens** — Quiet neighborhood garden with benches and shade
4. **Wuse Park** — Urban park with outdoor gym equipment and jogging paths
5. **Gwarinpa Recreation Park** — Large park with cycling track and tennis courts
6. **Maitama Botanical Gardens** — Nature trail with diverse tropical plants

## Next Steps: Building the Backend API

To replace mock data with a real database:

1. **Set up database** (PostgreSQL recommended via Neon or Supabase)
2. **Create API routes** in `app/api/`
3. **Build admin dashboard** for content management
4. **Implement authentication** for park maintainers
5. **Add real data** from park authorities and community contributions

### Example API Routes to Create

```
GET  /api/parks              # List all parks with filters
GET  /api/parks/[id]         # Get single park details
POST /api/parks              # Create park (admin)
PUT  /api/parks/[id]         # Update park (admin)
DELETE /api/parks/[id]       # Delete park (admin)
GET  /api/parks/[id]/reviews # Get park reviews
POST /api/parks/[id]/reviews # Submit review
```

## Google Maps Integration

APARK uses Google Maps free tier for:
- Embedded map previews on park detail pages
- "Get Directions" functionality
- Location visualization

**Note**: To enable Google Maps, add your API key to the environment:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

Currently, the app works without this key using embedded maps. Full geocoding features require the API key.

## Design System

### Colors
- **Primary**: Green (`oklch(0.42 0.13 145)`) — Nature-inspired, accessible
- **Background**: Off-white (`oklch(0.98 0.004 120)`) — Soft, easy on eyes
- **Text**: Dark gray (`oklch(0.15 0.01 140)`) — High contrast
- **Accents**: Light gray (`oklch(0.94 0.012 130)`) — Subtle emphasis

All colors use OKLCH color space for perceptual uniformity and better accessibility.

### Typography
- **Headings**: Inter Semibold
- **Body**: Inter Regular
- **Monospace**: Geist Mono (for code)
- **Line Height**: 1.4–1.6 for optimal readability

### Layout
- Mobile-first responsive design
- Flexbox for layouts (Tailwind default)
- Max-width container: 6xl (1152px)
- Spacing scale: 4px base unit

## Features Roadmap

### Phase 1 (Current)
- ✅ Frontend with parks discovery UI
- ✅ Smart filtering by activity, district, crowd level
- ✅ Park detail pages with maps
- ✅ About, Privacy, and Terms pages
- ✅ Responsive mobile design

### Phase 2 (Backend)
- 🔲 Custom API backend
- 🔲 Database with real park data
- 🔲 Admin dashboard for park management
- 🔲 User authentication
- 🔲 User reviews and ratings

### Phase 3 (Community & Growth)
- 🔲 User accounts
- 🔲 Favorites/bookmarks
- 🔲 Real-time crowd level data
- 🔲 Event calendar integration
- 🔲 Social sharing features
- 🔲 Mobile app (React Native)

### Phase 4 (Monetization)
- 🔲 Premium features
- 🔲 Sponsored park listings
- 🔲 Partnerships with park authorities
- 🔲 Affiliate programs

## Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our code style
4. **Commit with clear messages**
   ```bash
   git commit -m "Add your feature description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request** with a description of changes

### Code Style
- Use TypeScript for all new code
- Follow the existing component structure
- Use semantic HTML and ARIA labels for accessibility
- Test responsive behavior on mobile/tablet/desktop
- Keep components small and focused

## Testing

Currently, APARK doesn't have automated tests. To add tests:

```bash
pnpm add -D jest @testing-library/react
```

Then create test files alongside components:
```
components/park-card.tsx
components/park-card.test.tsx
```

## Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project at [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects Next.js and configures build settings
4. Click "Deploy"

**Environment Variables** (if using Google Maps):
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

### Deploying Elsewhere

APARK can be deployed to any platform supporting Node.js:
- Netlify (with `@netlify/plugin-nextjs`)
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## Performance

APARK is optimized for speed:
- **Static generation**: Pages pre-rendered at build time
- **Code splitting**: Next.js automatically splits route bundles
- **Image optimization**: Using Next.js Image component (ready when backend is added)
- **CSS**: Tailwind purges unused styles for minimal bundle size
- **Lighthouse score target**: 90+ on all metrics

Current performance metrics (development):
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2s
- Cumulative Layout Shift (CLS): < 0.1

## License

APARK is open source under the MIT License. See [LICENSE](LICENSE) for details.

## Contact & Support

- **Email**: hello@apark.ng
- **GitHub Issues**: [Report bugs or suggest features](https://github.com/clnsdzy/APARK/issues)
- **Discord**: [Join our community](https://discord.gg/apark) (coming soon)

## Acknowledgments

- **Google Maps API** for location and direction services
- **shadcn/ui** for beautiful, accessible UI components
- **Tailwind CSS** for utility-first styling
- **Next.js** for the React framework
- **Vercel** for hosting and deployment platform

## Roadmap Priorities

1. Build the custom API backend to replace mock data
2. Add user authentication and accounts
3. Implement real user reviews and ratings
4. Integrate real crowd level data (via sensors or crowd-sourced)
5. Launch mobile app
6. Partner with Abuja park authorities for official data

---

**Made with ❤️ for Abuja residents and nature enthusiasts.**

For the latest updates and announcements, follow us on [Twitter](https://twitter.com/aparkng) and [Instagram](https://instagram.com/aparkng).
