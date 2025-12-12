# Smart Business Solutions Website

A professional, responsive HTML and CSS-based website for businesses targeting small firms and craftspeople. Features include service showcases, portfolio sections, contact forms, and an interactive savings calculator (Einsparungsrechner).

## 🌟 Features

### Website Structure
- **Home Page (index.html)**: Landing page with service descriptions and call-to-action buttons
- **Services/Portfolio Page (services.html)**: Detailed service descriptions and project portfolio
- **About Page (about.html)**: Personal introduction and company values
- **Contact Page (contact.html)**: Contact form and business information

### Interactive Features
- **Einsparungsrechner (Savings Calculator)**: Calculate potential savings from automation
  - Input: Hours saved per week and hourly wage
  - Output: Monthly and yearly savings with smooth animations
- **Responsive Navigation**: Mobile-friendly menu with toggle functionality
- **Form Validation**: Client-side validation for contact forms
- **Smooth Animations**: Fade-in effects and scroll animations

### Design Highlights
- **Non-Blue Color Scheme**: Orange (#ff6b35), Green (#4a7c59), and Golden Yellow (#f7b801)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with gradient accents
- **SEO-Optimized**: Meta tags, semantic HTML, and alt-text placeholders

## 📁 Project Structure

```
website-project/
├── index.html           # Home page
├── services.html        # Services and portfolio page
├── about.html          # About us page
├── contact.html        # Contact page with form
├── css/
│   └── styles.css      # Main stylesheet (responsive, mobile-first)
├── js/
│   ├── main.js         # Navigation and general functionality
│   └── calculator.js   # Savings calculator logic
├── images/             # Placeholder for images and logos
└── README.md          # This file
```

## 🚀 Getting Started

### Installation

1. Clone this repository or download the files
2. No build process required - pure HTML, CSS, and JavaScript!
3. Open `index.html` in your web browser to view the website

### Local Development

To run the website locally:

```bash
# Option 1: Simple HTTP server with Python
python -m http.server 8000

# Option 2: Using Node.js http-server (requires npm)
npx http-server

# Option 3: Just open the HTML file directly
# Open index.html in your browser
```

Then visit `http://localhost:8000` in your browser.

## ✏️ Customization Guide

### 1. Update Business Information

#### Navigation & Branding (All Pages)
- **Line 30-33** in each HTML file: Update `SmartBusiness` to your business name
- Add your logo by uncommenting and updating the image tag

#### Contact Information (contact.html)
- **Lines 115-120**: Update address
- **Lines 125-130**: Update phone number
- **Lines 135-140**: Update email address
- **Lines 145-155**: Update business hours

### 2. Customize Content

#### Home Page (index.html)
- **Lines 46-47**: Main headline and subheadline
- **Lines 58-59**: Call-to-action button text
- **Lines 72-100**: Service descriptions

#### About Page (about.html)
- **Lines 52-70**: Your personal story and mission
- **Lines 185-205**: Team member information
- Add your photo or team photos in the placeholder areas

#### Services Page (services.html)
- **Lines 50-115**: Service descriptions and offerings
- **Lines 135-255**: Portfolio project examples (replace placeholders)

### 3. Color Scheme Customization

Edit `css/styles.css` (Lines 10-15):

```css
:root {
    --primary-color: #ff6b35;    /* Change primary color */
    --secondary-color: #4a7c59;  /* Change secondary color */
    --accent-color: #f7b801;     /* Change accent color */
    /* ... more color variables */
}
```

### 4. Add Your Logo

Replace the text brand with an image:

```html
<!-- In each HTML file, around line 30-33 -->
<a href="index.html" class="navbar-brand">
    <img src="images/logo.png" alt="Your Company Logo" style="height: 40px;">
</a>
```

### 5. Savings Calculator Settings

The calculator is on the home page. To adjust default values, edit `index.html` (Lines 112-130):

```html
<input type="number" id="hours-saved" value="5">  <!-- Default hours -->
<input type="number" id="hourly-wage" value="30"> <!-- Default wage -->
```

### 6. Add Project Images

1. Add images to the `images/` folder
2. Update the project placeholders in `services.html`:

```html
<!-- Replace line 140 (and similar) -->
<div class="project-image">
    <img src="images/project1.jpg" alt="Project Name">
</div>
```

### 7. Google Maps Integration

To add a real map on the contact page (contact.html, Line 340):

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder div with the iframe

### 8. Connect Contact Form

The contact form currently shows an alert. To connect it to a backend:

Edit `js/main.js` (around line 90-100):

```javascript
// Replace the alert with actual form submission
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => {
    alert('Thank you! We will contact you soon.');
    contactForm.reset();
});
```

Popular form services:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

## 📱 Responsive Breakpoints

The website uses the following breakpoints:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1399px
- **Large Desktop**: ≥ 1400px

## 🎨 Design Philosophy

- **Mobile-First**: Designed for mobile devices, enhanced for larger screens
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **Performance**: Lightweight with no external dependencies
- **SEO-Friendly**: Proper meta tags, heading hierarchy, and semantic markup

## 🔧 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is provided as-is for your business use. Feel free to customize and modify as needed.

## 🤝 Support

For questions or support:
- Update the contact information in the files with your actual details
- Add your social media links in the footer or about page

## 🎯 Next Steps

1. **Customize Content**: Update all placeholder text with your actual business information
2. **Add Images**: Replace placeholder images with your own photos and graphics
3. **Add Logo**: Create and add your business logo
4. **Connect Forms**: Set up form submission with a backend service
5. **Add Analytics**: Consider adding Google Analytics or similar
6. **Deploy**: Upload to your web hosting or use services like:
   - GitHub Pages
   - Netlify
   - Vercel
   - Traditional web hosting

## 📝 Customization Checklist

- [ ] Update business name in all HTML files
- [ ] Update contact information (phone, email, address)
- [ ] Customize service descriptions
- [ ] Add your personal/company story
- [ ] Replace placeholder images
- [ ] Add your logo
- [ ] Customize color scheme if desired
- [ ] Connect contact form to backend
- [ ] Add Google Maps to contact page
- [ ] Update meta tags for SEO
- [ ] Add actual portfolio projects
- [ ] Test on mobile devices
- [ ] Deploy to production

---

**Built with ❤️ for small businesses and craftspeople**