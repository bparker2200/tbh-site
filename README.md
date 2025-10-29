# Tommy's Beverly Hills - Restaurant Website

A modern, responsive website for Tommy's Beverly Hills restaurant, built with Next.js and optimized for Vercel deployment.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site Generation**: Optimized for fast loading and SEO
- **Image Optimization**: Next.js Image component for optimal performance
- **Modern UI**: Clean, elegant design matching the restaurant's aesthetic
- **Contact Forms**: Interactive forms for event booking and contact
- **Gallery**: Beautiful image gallery showcasing the restaurant

## Pages

- **Home**: Hero section with call-to-action buttons
- **About Us**: Restaurant story and information
- **Gallery**: Photo gallery of the restaurant interior
- **Book An Event**: Event booking form and information
- **Contact Us**: Contact information and message form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tommys-beverly-hills
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Static Export

This project is configured for static site generation:

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Vercel Deployment

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy

Or deploy manually:

```bash
npm install -g vercel
vercel --prod
```

## Configuration

The project is configured with:

- **Static Export**: `output: 'export'` in `next.config.ts`
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slash**: Enabled for better static hosting compatibility

## Customization

### Images

Replace the placeholder images in the components with your own:

- Hero section images in `src/components/HeroSection.tsx`
- Gallery images in `src/components/Gallery.tsx`
- Page-specific images in individual page components

### Content

Update the content in:

- `src/app/layout.tsx` - Site metadata
- `src/components/Navigation.tsx` - Navigation menu
- `src/components/Footer.tsx` - Footer information
- Individual page components for page-specific content

### Styling

The project uses Tailwind CSS. Customize the design by:

- Modifying component classes
- Adding custom CSS in `src/app/globals.css`
- Updating the Tailwind configuration

## Performance

This static site is optimized for:

- Fast loading times
- SEO-friendly URLs
- Mobile responsiveness
- Image optimization
- Minimal JavaScript bundle size

## License

This project is private and proprietary to Tommy's Beverly Hills.
