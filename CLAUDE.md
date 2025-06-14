# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (preferred over npm/yarn)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview

### Stack
- **Next.js 15** with App Router (pages in `app/`)
- **TypeScript** with strict configuration
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library (New York style)
- **next-themes** for dark/light mode
- **Framer Motion** for animations

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by category:
  - `ui/` - shadcn/ui components
  - `layout/` - Header/Footer components
  - `theme/` - Theme-related components
- `lib/` - Utilities (mainly `utils.ts` with `cn` helper)
- `hooks/` - Custom React hooks
- `utils/` - Application utilities (custom logger)
- `public/images/` - Static images
- `public/svg/` - SVG assets

### Key Configurations
- **Path aliases**: `@/*` maps to project root
- **shadcn/ui config**: New York style, CSS variables enabled, uses Lucide icons
- **Fonts**: Multiple Google Fonts loaded (Geist, Inter, JetBrains Mono, etc.)
- **Development**: Includes viewport indicator and custom logger with boxed output

### Component Patterns
- Uses shadcn/ui components extensively
- Custom `cn()` utility for className merging (clsx + tailwind-merge)
- Theme system with `ThemeProvider` wrapping the app
- Fixed header (30px height) with dropdown navigation
- Footer component in layout

### Custom Features
- **Logger**: `utils/logger.ts` provides development-friendly boxed console output
- **Navigation Progress**: Progress indicator for page transitions
- **Viewport Indicator**: Development-only tool showing current breakpoint
- **Sonner**: Toast notifications wrapper

### Styling Notes
- Uses Tailwind CSS variables for theming
- Custom font variables defined in layout
- Responsive design with mobile-first approach
- Dark/light mode support throughout