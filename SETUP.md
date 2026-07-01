# Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create `.env.local` with your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### 3. Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📦 Deployment Guides

### Option 1: Deploy to Vercel (Recommended)

**Vercel is the best choice for Next.js applications - it's built by the creators of Next.js!**

#### Steps:
1. Push your code to GitHub (already done ✓)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your repository: `law-bew-application`
5. Configure project:
   - Framework: Next.js (auto-detected)
   - Build command: `npm run build`
   - Output directory: `.next`
6. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
7. Click "Deploy"
8. Your site will be live at: `law-bew-application.vercel.app`

**Advantages:**
- Free tier available
- Automatic deployments on git push
- 0-second cold start times
- Built-in analytics and performance metrics
- Auto-scaling
- SSL/TLS included

---

### Option 2: Deploy to Netlify

#### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select `law-bew-application` repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in "Build & Deploy" → "Environment"
7. Deploy

---

### Option 3: Deploy to Custom Server (Node.js)

#### Prerequisites:
- Server with Node.js 18+ installed
- SSH access to your server

#### Steps:
1. Connect to your server:
   ```bash
   ssh user@your-server.com
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/maddilasrinivas007-bot/law-bew-application.git
   cd law-bew-application
   ```

3. Install dependencies:
   ```bash
   npm install --production
   ```

4. Create `.env.local`:
   ```bash
   nano .env.local
   ```
   Add your EmailJS credentials

5. Build the application:
   ```bash
   npm run build
   ```

6. Start with PM2 (process manager):
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "law-app"
   pm2 startup
   pm2 save
   ```

7. Configure Nginx as reverse proxy:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. Enable SSL with Let's Encrypt:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

### Option 4: Deploy to Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t law-app .
docker run -p 3000:3000 -e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key law-app
```

---

## 🔐 Setting Up EmailJS

### Steps to Configure EmailJS:

1. **Create Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service**
   - Go to "Email Services" in dashboard
   - Click "Create New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Create template with variables:
     ```html
     <h1>New Contact from {{from_name}}</h1>
     <p><strong>Email:</strong> {{email}}</p>
     <p><strong>Phone:</strong> {{phone}}</p>
     <p><strong>Message:</strong> {{message}}</p>
     ```
   - Note your `Template ID`

4. **Get Public Key**
   - Go to "Account" → "API Keys"
   - Copy your `Public Key`

5. **Update Environment Variables**
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
     ```

---

## 📊 Analytics & Monitoring

### Add Google Analytics
1. Create account at [google.com/analytics](https://google.com/analytics)
2. Get your Measurement ID
3. Add to `app/layout.tsx`:
   ```tsx
   import Script from 'next/script';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-XXXXXXXXXX');`}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

---

## 🔍 Testing Before Deployment

### 1. Test Development Build
```bash
npm run dev
# Visit http://localhost:3000
# Test all pages and contact form
```

### 2. Test Production Build
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### 3. Test Contact Form
- Navigate to `/contact`
- Fill out the form
- Click submit
- Check your email

### 4. Performance Check
- Use Google Chrome DevTools
- Check Lighthouse scores
- Optimize images if needed

---

## 🚀 Post-Deployment Checklist

- [ ] Domain configured
- [ ] SSL certificate working
- [ ] Contact form sending emails
- [ ] All pages loading correctly
- [ ] Mobile responsive on all pages
- [ ] Analytics configured
- [ ] Backups configured
- [ ] Error monitoring setup (Sentry)
- [ ] Performance monitoring setup
- [ ] All environment variables set

---

## 🐛 Troubleshooting

### "Module not found" error
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### Build fails
```bash
# Check for TypeScript errors
npm run lint
# Clear Next.js cache
rm -rf .next
npm run build
```

### Contact form not working
- Check EmailJS credentials in `.env.local`
- Verify template variables match form fields
- Test in browser console:
  ```javascript
  emailjs.send(serviceID, templateID, formData).then(res => console.log(res));
  ```

---

## 📞 Support

For issues or questions:
1. Check the README.md
2. Visit [Next.js Docs](https://nextjs.org/docs)
3. Check [EmailJS Docs](https://www.emailjs.com/docs/)

---

**Last Updated:** July 2, 2026
