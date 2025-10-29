JUYI CHR - Website scaffold
==========================

This is a minimal Next.js + Tailwind CSS starter for the JUYI CHR company website.

Files included:
- package.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- pages/
  - _app.js
  - index.js
- components/
  - Header.js
- public/
  - logo.png (your uploaded logo)
- styles/
  - globals.css

Quick start (local):
1. Install dependencies:
   npm install
2. Run development server:
   npm run dev
3. Open http://localhost:3000

Deploy to Vercel (recommended):
1. Create a GitHub repository and push this project.
2. Sign up at https://vercel.com and import the GitHub repo (Vercel auto-detects Next.js).
3. Deploy — Vercel provides a preview URL and production URL.

Bind domain (example juyi-chr.com on Namecheap):
1. Buy 'juyi-chr.com' on Namecheap.
2. In Vercel project settings > Domains > add 'juyi-chr.com'.
3. Vercel will list DNS records (A / CNAME). In Namecheap, go to Domain List > Manage > Advanced DNS, and add the records Vercel shows.
4. After DNS propagation (few minutes to a few hours) the domain will be active with automatic HTTPS.

Email:
- You can use Namecheap Email, Google Workspace, or other mailbox providers.
- To create an email like info@juyi-chr.com, follow your mailbox provider's domain verification steps and add MX records.

Need help?
- I can prepare the GitHub repo and push code for you.
- I can walk you through Vercel import and Namecheap DNS steps.
- If you want, I can generate a ZIP file of this project for download.
