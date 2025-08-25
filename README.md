# JoyNZaika's PowerBites Website

Official website for JoyNZaika's PowerBites - Premium Protein Bars made with love in Pune.

## 🌐 Live Site
[https://joynzaika.com](https://joynzaika.com)

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to Settings → Pages in your GitHub repository
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The custom domain `joynzaika.com` is already configured

2. **DNS Configuration:**
   Make sure your domain has the following DNS records:
   - CNAME record: `joynzaika` → `[your-github-username].github.io`
   - OR if using apex domain:
     - A records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

3. **Automatic Deployment:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy the site
   - Check the Actions tab to monitor deployment progress

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** Nuxt 4 (SPA mode)
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **Domain:** Custom domain via GitHub Pages

## 📂 Project Structure

```
├── app/
│   ├── pages/
│   │   ├── index.vue      # Homepage
│   │   └── order.vue      # Order tracking page
│   ├── error.vue          # Error/404 page
│   ├── app.vue           # Layout wrapper
│   └── assets/
│       └── css/
│           └── tailwind.css
├── public/
│   ├── power-bite-hero.jpg
│   ├── CNAME             # Custom domain
│   └── .nojekyll         # Disable Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
├── nuxt.config.ts
├── tailwind.config.js
└── package.json
```

## 🔧 Configuration

- **SPA Mode:** Configured in `nuxt.config.ts` with `ssr: false`
- **Static Generation:** Using `nitro.preset: 'static'`
- **Custom Domain:** Configured via CNAME file in public directory

## 📝 Features

- Mobile-first responsive design
- Dark theme with golden accents
- WhatsApp ordering integration
- Email notification signup
- Order tracking system
- Chef story section
- Product showcase
- Nutrition information

## 🤝 Contributing

To contribute to this project:
1. Create a feature branch
2. Make your changes
3. Push to the branch
4. Create a Pull Request to `main`

Once merged, the site will automatically deploy.

## 📧 Contact

- **Website:** [joynzaika.com](https://joynzaika.com)
- **Email:** hello@joynzaika.com
- **WhatsApp:** +91 98765 43210

---

Made with 💛 by JoyNZaika Team