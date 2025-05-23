# Happy Birthday Bridget 2025

A nostalgic Geocities-style birthday website for Bridget featuring:

- Interactive "party mode" activated by playing music
- Photo gallery with colorful borders
- Dancing GIFs throughout the site
- Classic early 2000s web aesthetic

Built with Next.js and React.

## Running locally

```bash
npm install
npm run dev
```

## Features

- Press play to initiate Bridget's birthday celebration
- Randomized colors and animations in party mode
- Minimalist design in regular mode
- Curated photo collection

## Overview

This is a single-page website built with Next.js and Tailwind CSS that features:
- A retro early 2000s Geocities-style design
- Blinking text, marquee animations, and other nostalgic web elements
- Placeholder spots for images, videos, and GIFs
- Classic web design elements like hit counters, guestbooks, and "under construction" banners

## Getting Started

### Development

To run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

To create a production build:

```bash
npm run build
npm start
```

## Customizing the Website

### Adding Images and GIFs

1. Place your images in the `public/images` folder
2. Place your GIFs in the `public/gifs` folder
3. Open `src/app/page.tsx` and replace the placeholder elements with actual images/GIFs:

```jsx
{/* Replace placeholder with actual image */}
<Image 
  src="/gifs/dancing-baby.gif" 
  alt="Dancing Baby" 
  width={96} 
  height={96} 
  className="rounded" 
/>
```

### Adding Videos

1. Place your videos in the `public/videos` folder
2. Open `src/app/page.tsx` and add your videos where needed:

```jsx
<video 
  controls 
  className="w-full h-full"
>
  <source src="/videos/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Adding Background Music

To add authentic MIDI background music:

1. Place your MIDI or MP3 file in the `public` folder
2. Update the audio element in `src/app/page.tsx`

## Inspiration

This website is designed to look like an authentic Geocities website from the late 1990s/early 2000s, complete with:

- Bold, bright colors
- Times New Roman, Arial and Comic Sans fonts
- Animated elements (blinking text, marquees)
- "Under Construction" banners
- Hit counters
- Guestbook links
- Email me buttons
- "Best viewed in Netscape" messages

## License

This project is created with love for personal use.

---

Made with ❤️ for Bridget
