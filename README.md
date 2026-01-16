# NK Divanshu Builders and Services Pvt. Ltd. - React Website

This is a React-based website for NK Divanshu Builders, featuring construction packages and engineering services.

## Company Information

- **Company**: NK Divanshu Builders and Services Pvt. Ltd.
- **Services**: Engineering | Planning | Design | Services
- **Location**: 329-Homeland City - II, Sri Ganganagar
- **Phone**: +91-0000 000 000
- **Website**: www.nkdivanshu24x7services.in
- **Availability**: 24/7 Services

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern React Architecture**: Built with React Router for seamless navigation
- **Animations**: Smooth animations using AOS (Animate On Scroll) library
- **Multiple Pages**:
  - Home - Landing page with hero section, metrics, services, and projects
  - About - Company information, mission, vision, and values
  - Services - Detailed list of engineering services offered
  - Projects - Portfolio of completed projects
  - Packages - Construction packages (Silver, Gold, Platinum)
  - Contact - Contact form and company information
  - Package Detail Pages - Individual pages for each package

## Technologies Used

- React 18
- React Router DOM
- AOS (Animate On Scroll)
- Font Awesome Icons
- Google Fonts (Inter)
- CSS3 with CSS Variables

## Installation

1. Navigate to the project directory:

```bash
cd nk-divyanshu
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css
│   ├── Footer.js          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.js            # Home page
│   ├── Home.css
│   ├── About.js           # About page
│   ├── About.css
│   ├── Services.js        # Services page
│   ├── Services.css
│   ├── Projects.js        # Projects page
│   ├── Packages.js        # Packages page
│   ├── Packages.css
│   ├── Contact.js         # Contact page
│   ├── Contact.css
│   ├── Silver.js          # Silver package details
│   ├── Gold.js            # Gold package details
│   └── Platinum.js        # Platinum package details
├── App.js                 # Main app component with routing
├── App.css                # Global styles
├── index.js               # Entry point
└── index.css              # Base styles
```

## Design Consistency

The React version maintains the exact same design as the original HTML files:

- Same color scheme (Primary: #1a2a6c, Secondary: #4CAF50, Accent: #00b4d8)
- Same typography (Inter font family)
- Same layout and spacing
- Same animations and transitions
- Same responsive breakpoints

## Key Features Implemented

1. **Sticky Navigation**: Header stays at the top while scrolling
2. **Mobile Menu**: Hamburger menu for mobile devices
3. **Smooth Animations**: Page elements animate on scroll
4. **Interactive Cards**: Hover effects on service cards and project cards
5. **Form Handling**: Contact form with validation
6. **Package Comparison**: Visual comparison of construction packages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 NK Divyanshu Builders and Services Pvt. Ltd. All Rights Reserved
