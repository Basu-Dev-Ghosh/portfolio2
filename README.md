# 🚀 Basudev Ghosh - Software Developer Portfolio

A stunning, dark minimal professional portfolio website built with Next.js 14, TypeScript, and cutting-edge animations. This portfolio showcases a unique design aesthetic inspired by high-end tattoo artist portfolios and Behance dark UI designs, featuring bold typography, high contrast visuals, and sophisticated micro-interactions.

## ✨ Features

### 🎨 Visual Excellence
- **Dark Minimal Theme:** Pure black (#000000) background with neon green (#b8d626) accents
- **Custom Cursor:** Interactive dot + ring cursor with hover states (desktop only)
- **Particle Background:** Animated particle system with connection lines in hero section
- **Smooth Scroll:** Buttery smooth scrolling powered by Lenis
- **3D Tilt Cards:** Interactive project cards with 3D perspective transforms
- **Scroll Progress:** Top bar showing page scroll progress
- **Loading Screen:** Animated loading experience with progress bar

### ⚡ Advanced Interactions
- **Typewriter Effect:** Dynamic text animation in hero section
- **Command Palette:** Quick navigation with Cmd+K (or Ctrl+K)
- **Section Navigation:** Side dots with active section tracking
- **Back to Top:** Floating button with scroll progress indicator
- **Magnetic Hover Effects:** Elements that respond to cursor position
- **Stagger Animations:** Sequential element reveals using Framer Motion
- **Toast Notifications:** Beautiful notifications for form submissions

### 🎯 Core Sections
- **Hero:** Animated particle background, typewriter effect, floating 3D profile image
- **About:** Stats counter, timeline, skill bars
- **Projects:** 3D tilt cards, category filtering, grayscale-to-color image transitions
- **Skills:** Animated tech icons, category grouping, marquee ticker
- **Experience:** Timeline with company details
- **Services:** Service offerings with features
- **Contact:** Validated form with animated success states

### 🚀 Performance & Best Practices
- **Next.js 14 App Router:** Latest features and performance optimizations
- **TypeScript:** Full type safety throughout the codebase
- **Responsive Design:** Mobile-first approach, perfect on all devices
- **SEO Optimized:** Meta tags, semantic HTML, accessibility
- **Code Quality:** Clean, maintainable, well-documented code
- **Lazy Loading:** Images and components load on-demand
- **Skeleton Loaders:** Smooth loading states

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Bebas Neue (headings), Inter (body)

### Animation & Interaction
- **Framer Motion:** Advanced animations and gestures
- **Lenis:** Smooth scrolling
- **React Intersection Observer:** Scroll-triggered animations
- **React Hot Toast:** Notification system

### UI Components
- **Radix UI:** Accessible component primitives (Dialog, Accordion)
- **Lucide React:** Icon library
- **React Syntax Highlighter:** Code block rendering

### Utilities
- **clsx & tailwind-merge:** Conditional class management
- **next-themes:** Theme management system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── projects/            # Projects page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout with global components
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── animations/          # Animation components
│   │   ├── CountUp.tsx     # Animated counter
│   │   ├── FadeIn.tsx      # Fade in animation
│   │   ├── SlideIn.tsx     # Slide in animation
│   │   ├── ScaleIn.tsx     # Scale in animation
│   │   ├── Marquee.tsx     # Scrolling text
│   │   └── Typewriter.tsx  # Typewriter effect
│   ├── layout/              # Layout components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer
│   │   └── MobileMenu.tsx  # Mobile navigation
│   ├── providers/           # Context providers
│   │   └── SmoothScrollProvider.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Services.tsx    # Services offered
│   │   └── Contact.tsx     # Contact form
│   └── ui/                  # UI components
│       ├── BackToTop.tsx   # Scroll to top button
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       ├── CommandPalette.tsx  # Cmd+K navigation
│       ├── CustomCursor.tsx    # Custom cursor
│       ├── LoadingScreen.tsx   # Loading animation
│       ├── Modal.tsx       # Modal dialog
│       ├── ParticleBackground.tsx  # Particle system
│       ├── ScrollProgress.tsx  # Scroll indicator
│       ├── SectionNav.tsx  # Section dots navigation
│       └── TiltCard.tsx    # 3D tilt card
├── lib/                     # Utilities and data
│   ├── constants.ts        # Site configuration
│   ├── data.ts             # Projects, skills, etc.
│   └── utils.ts            # Utility functions
├── types/                   # TypeScript types
│   └── index.ts
└── public/
    └── images/             # Image assets
        ├── hero/
        └── projects/
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  email: "your@email.com",
  tagline: "Your tagline",
  description: "Your description",
};
```

### Add Projects

Edit `lib/data.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed description...",
    image: "/images/projects/your-project.jpg",
    tags: ["Featured", "Category"],
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    live: "https://...",
    featured: true,
    year: "2024",
  },
  // Add more projects...
];
```

### Modify Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#b8d626", // Your accent color
    dark: "#9db91f",
  },
  dark: {
    DEFAULT: "#000000",
    lighter: "#0a0a0a",
    light: "#1a1a1a",
  },
},
```

### Add Images

Place images in the `public/images/` directory:
- `public/images/hero/profile.jpg` - Your profile photo
- `public/images/projects/` - Project screenshots

## ⌨️ Keyboard Shortcuts

- **Cmd/Ctrl + K:** Open command palette for quick navigation
- **Escape:** Close modals/dialogs
- **Arrow Keys:** Navigate in command palette

## 🎯 Key Interactive Features

### Custom Cursor
The portfolio features a custom cursor (desktop only) that:
- Shows a dot and ring that follow mouse movement
- Scales and changes on hover over interactive elements
- Adds a professional, unique touch to the experience

### Command Palette
Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open quick navigation:
- Search through all sections
- Navigate to external profiles (GitHub, LinkedIn)
- Keyboard-friendly navigation

### 3D Tilt Cards
Project cards feature 3D tilt effect:
- Responds to mouse position
- Creates depth with perspective transforms
- Smooth spring animations

### Particle Background
Animated particle system in hero:
- Generates particles across the viewport
- Connects nearby particles with lines
- Creates a dynamic, tech-focused atmosphere

## 📱 Responsive Design

The portfolio is fully responsive across:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1920px+)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Focus indicators for keyboard users
- Reduced motion support via `prefers-reduced-motion`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to Netlify or connect your git repository.

### Environment Variables

No environment variables are required for the basic setup. If you add a contact form API or analytics, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other variables as needed
```

## 📊 Performance

Expected Lighthouse scores:
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

Optimizations implemented:
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient animation with Framer Motion
- CSS optimization with Tailwind
- Font optimization with next/font

## 🐛 Known Issues & Solutions

### Custom Cursor Not Showing
- The custom cursor only appears on desktop (lg breakpoint)
- Check that JavaScript is enabled
- Verify that `cursor: none` is applied in globals.css

### Smooth Scroll Not Working
- Lenis requires client-side JavaScript
- Check browser console for errors
- Ensure SmoothScrollProvider is wrapping the app

### Images Not Loading
- Place images in `public/images/` directory
- Update image paths in `lib/data.ts`
- Use placeholder images from Unsplash if needed

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Basudev Ghosh**
- Website: [basudev.in](https://www.basudev.in)
- LinkedIn: [@basudev-ghosh](https://www.linkedin.com/in/basudev-ghosh/)
- GitHub: [@basudevghosh](https://github.com/basudevghosh)

## 🙏 Acknowledgments

- Design inspiration from Behance dark UI portfolios
- Animation patterns from Framer Motion documentation
- Smooth scroll implementation using Lenis
- Icons from Lucide React
- Fonts from Google Fonts

## 📸 Screenshots

### Hero Section
Features animated particles, typewriter effect, and 3D floating profile image.

### Projects Grid
Interactive 3D tilt cards with grayscale-to-color image transitions.

### Command Palette
Quick navigation accessible via Cmd+K or Ctrl+K.

### Contact Form
Validated form with animated error states and success notifications.

---

**Built with ❤️ using Next.js, TypeScript, and lots of coffee ☕**

For questions or collaboration opportunities, reach out at [contact@basudev.in](mailto:contact@basudev.in)