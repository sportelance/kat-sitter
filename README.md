# Kat Sitter - Professional Pet Sitting Services

A modern, responsive website for Kat's pet sitting services, built with TypeScript, SCSS, and Vite.

## Features

- 🐱🐕 Professional pet sitting website
- 📱 Fully responsive design (mobile & desktop optimized)
- 🎨 Modern UI with light green theme and paw print background
- ⚡ Fast development with hot reloading
- 🔧 TypeScript for type safety
- 🎯 SCSS for maintainable styling
- 📦 Vite for fast builds and development

## Project Structure

```
kat-sitter/
├── src/
│   ├── index.html              # Main landing page
│   ├── styles/
│   │   ├── variables.scss      # SCSS variables
│   │   └── main.scss          # Main styles
│   ├── scripts/
│   │   └── main.ts            # Main TypeScript logic
│   ├── contact/
│   │   ├── index.html         # Contact page
│   │   ├── contact.scss       # Contact page styles
│   │   └── contact.ts         # Contact page logic
│   └── firebase/
│       └── config.ts          # Firebase configuration
├── dist/                      # Build output (generated)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kat-sitter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Pages

### Landing Page (`/`)
- Features two clickable service cards (cat and dog themed)
- "Services & Rates" card opens a modal
- "Contact Us" card navigates to contact page
- Responsive design with paw print background

### Contact Page (`/contact`)
- Separate page with back navigation
- Placeholder content for future contact form
- Consistent styling with main page

## Customization

### Colors
Edit `src/styles/variables.scss` to customize the color scheme:
- `$primary-green` - Main green color
- `$light-green` - Background green
- `$dark-green` - Dark green accents

### Styling
- Main styles: `src/styles/main.scss`
- Contact page styles: `src/contact/contact.scss`
- Variables: `src/styles/variables.scss`

## Firebase Integration

The project includes Firebase configuration setup in `src/firebase/config.ts`. To enable Firebase:

1. Create a Firebase project
2. Add your configuration to `firebaseConfig`
3. Uncomment the initialization code
4. Install Firebase dependencies if needed

## Deployment

The site is configured for deployment to GitHub Pages. The build process creates a `dist` folder that contains all the necessary files for deployment.

### GitHub Pages Setup

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Set the source to "GitHub Actions"
5. The site will automatically deploy when you push to the main branch

### Custom Domain Setup

The site is configured for the custom domain `kat-sitter.com`:

1. **GitHub Configuration**:
   - Go to repository Settings → Pages
   - Enter `kat-sitter.com` in the "Custom domain" field
   - Check "Enforce HTTPS"
   - Click "Save"

2. **DNS Configuration** (at your domain registrar):
   - Add A records pointing to GitHub Pages IPs:
     ```
     Type: A, Name: @, Value: 185.199.108.153
     Type: A, Name: @, Value: 185.199.109.153
     Type: A, Name: @, Value: 185.199.110.153
     Type: A, Name: @, Value: 185.199.111.153
     ```
   - Or add CNAME for www subdomain:
     ```
     Type: CNAME, Name: www, Value: yourusername.github.io
     ```

3. **SSL Certificate**: GitHub will automatically provision an SSL certificate

### Build Process

The build process includes:
- TypeScript compilation
- Vite build (main page)
- Copying contact and gallery pages to dist folder
- All assets are optimized and bundled

### File Structure in dist/

```
dist/
├── index.html          # Main landing page
├── contact/
│   ├── index.html      # Contact page
│   ├── contact.ts      # Contact page TypeScript
│   └── contact.scss    # Contact page styles
├── gallery/
│   ├── index.html      # Gallery page
│   ├── gallery.ts      # Gallery page TypeScript
│   └── gallery.scss    # Gallery page styles
└── assets/
    ├── *.js            # Bundled JavaScript
    ├── *.css           # Bundled CSS
    └── *.png           # Optimized images
```

### Manual Deployment
1. Build the project: `npm run build`
2. The `dist` folder contains all files ready for deployment
3. Upload the contents of `dist` to any static hosting service

### Other Hosting
The built files in the `dist` directory can be deployed to any static hosting service.

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced CSS with variables and nesting
- **Vite** - Fast build tool and development server
- **Firebase** - Backend services (ready for integration)
- **Responsive Design** - Mobile-first approach

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please contact the development team. 