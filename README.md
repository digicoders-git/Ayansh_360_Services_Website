# AAYANSH 360 SERVICES - Website

A modern, professional website for AAYANSH 360 SERVICES, specializing in painting, construction, and waterproofing solutions.

## 🎯 Project Overview

AAYANSH 360 SERVICES is a full-featured React-based website showcasing professional construction and painting services. The site features a modern design with smooth animations, responsive layouts, and comprehensive service information.

## 🚀 Features

### Pages
- **Home** - Hero section with services highlight, how we work, projects, testimonials, and FAQ
- **Services** - Detailed service cards with background images
- **Our Work** - Portfolio of completed projects with category filtering
- **About** - Company information and team details
- **Contact** - Contact form and location information
- **Career** - Job opportunities
- **Privacy Policy** - Legal documentation
- **Terms & Conditions** - Legal documentation

### Design Elements
- **Color Scheme**: Yellow (#FFD700) primary, Blue (#3B82F6) secondary, White, Black
- **Animations**: Shake animation on CTA buttons (0.5s fast shake + 1s pause cycle)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Background Images**: Service cards and project cards feature topic-related images with opacity overlays

### Components
- **Navbar** - Navigation with Pages dropdown (Our Work, Our Clients, Career, Privacy Policy, Terms & Conditions)
- **Footer** - 3-column layout with branding, quick links, services, and contact info
- **Service Cards** - Black background with semi-transparent images (50% opacity)
- **Project Cards** - Category-specific images with hover effects

## 📁 Project Structure

```
src/
├── components/
│   └── Website/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── pages/
│   └── Website/
│       ├── Home.jsx
│       ├── Services.jsx
│       ├── Work.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Career.jsx
│       ├── PrivacyPolicy.jsx
│       ├── TermsAndConditions.jsx
│       ├── Client.jsx
│       └── Enquiry.jsx
├── layouts/
│   └── MainLayout.jsx
├── App.jsx
└── index.css
public/
├── new_logo.png
├── service-1.jpg (Painting)
├── service-2.jpg (Construction)
├── service-3.jpg (Waterproofing)
├── contact.png
├── about-hero.jpg
├── home-hero.avif
├── team.webp
└── trust.avif
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Yellow | #FFD700 | Buttons, accents, highlights |
| Secondary Blue | #3B82F6 | Pages dropdown, hover effects |
| Black | #000000 | Text, backgrounds |
| White | #FFFFFF | Text, backgrounds |
| Dark Background | #0A0A0A | Footer, dark sections |

## 🔧 Technologies Used

- **React** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Construction
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🎬 Key Animations

### Shake Animation
- **Duration**: 1.5s total (0.5s shake + 1s pause)
- **Applied to**: WhatsApp and Call buttons
- **Effect**: Horizontal shake from -10px to +10px

### Hover Effects
- **Service Cards**: Image opacity transition, text color change
- **Project Cards**: Image scale (1.1x), border color change to yellow
- **Buttons**: Background and text color transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🖼️ Image Assets

### Service Images
- `service-1.jpg` - Painting projects
- `service-2.jpg` - Construction projects
- `service-3.jpg` - Waterproofing projects

### Hero Images
- `home-hero.avif` - Home page background
- `about-hero.jpg` - About page background
- `contact.png` - Contact page background

## 📞 Contact Information

- **Phone**: +91 9999452314
- **Email**: Kishan.rai30@gmail.com
- **Address**: Plot no 165 vijay nagar sector B, kamakhya colony opposite kanti niketan, nilmatha cantt Lucknow 226002

## 🔗 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage |
| `/services` | Services | All services |
| `/our-work` | Work | Project portfolio |
| `/about` | About | Company info |
| `/contact` | Contact | Contact form |
| `/career` | Career | Job opportunities |
| `/privacy-policy` | PrivacyPolicy | Privacy policy |
| `/terms-and-conditions` | TermsAndConditions | Terms & conditions |

## 🎯 Service Categories

1. **Interior Painting** - Premium interior painting with eco-friendly paints
2. **Exterior Painting** - Durable exterior painting solutions
3. **Waterproofing** - Advanced waterproofing for basements, roofs, terraces
4. **Small Construction** - Building projects, extensions, repairs
5. **Home Renovation** - Complete home transformation
6. **Commercial Work** - Professional construction and maintenance

## 📊 Statistics

- **250+** Projects Completed
- **15+** Years of Experience
- **99%** Customer Satisfaction

## 🔐 Legal Pages

- **Privacy Policy** - Black header with gold left borders, 6 sections
- **Terms & Conditions** - Black header with gold left borders, 9 sections

## 🚀 Performance Features

- Lazy loading for images
- Optimized image formats (AVIF, WebP, JPG)
- CSS animations for smooth transitions
- Responsive images for different screen sizes

## 📝 Notes

- All service cards use background images with 50% opacity for better text visibility
- Project cards display category-specific images based on project type
- CTA buttons feature continuous shake animation for attention
- Footer maintains consistent branding with navbar

## 👨‍💼 Company

**AAYANSH 360 SERVICES**  
Professional painting, construction, and waterproofing solutions  
Building with quality and integrity

---

**Last Updated**: 2024  
**Version**: 1.0.0
