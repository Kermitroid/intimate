import express from 'express';
import dotenv from 'dotenv';
import { setupStaticServing } from './static-serve.js';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Download endpoint for the complete project
app.get('/api/download-project', (req: express.Request, res: express.Response) => {
  console.log('Project download request received');
  
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="intimate-videos-xhamster-clone.zip"');

  archive.pipe(res);

  // Get the project root directory
  const projectRoot = path.resolve(process.cwd());
  
  // Add all project files except node_modules, dist, and download-app
  const filesToInclude = [
    'client/',
    'server/',
    'scripts/',
    'package.json',
    'tsconfig.json',
    'tsconfig.server.json',
    'vite.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'components.json'
  ];

  filesToInclude.forEach(item => {
    const fullPath = path.join(projectRoot, item);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        archive.directory(fullPath, item);
      } else {
        archive.file(fullPath, { name: item });
      }
    }
  });

  // Add comprehensive README
  const readmeContent = `# Intimate Videos - XHamster Clone

## Project Overview
Complete adult entertainment platform built with modern web technologies, featuring video streaming, user management, live shows, and premium content functionality.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express 5
- **Styling**: Tailwind CSS + shadcn/ui components
- **Router**: React Router DOM
- **Build**: Vite for frontend, TypeScript compiler for backend

## Features
- 🎥 Video upload and streaming capabilities
- 👥 User authentication and profile management
- 🔴 Live streaming integration
- 📱 Responsive mobile-first design
- 🎨 Modern purple-themed UI
- 🔍 Advanced search and filtering
- 💎 Premium content management
- 📊 Analytics and reporting capabilities
- 🌙 Dark mode support
- 🔒 Secure user authentication

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation
1. Extract the project files to your desired directory
2. Navigate to the project root:
   \`\`\`bash
   cd intimate-videos-project
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Development
Start the development server:
\`\`\`bash
npm run start
\`\`\`

This will start:
- Vite dev server on http://localhost:3000 (frontend)
- Express API server on http://localhost:3001 (backend)

### Production Build
Build the project for production:
\`\`\`bash
npm run build
\`\`\`

This creates a \`dist\` folder with the compiled application ready for deployment.

## Project Structure
\`\`\`
intimate-videos/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── ...
│   └── index.html
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   └── static-serve.ts    # Static file serving
├── scripts/               # Build and development scripts
├── package.json
└── README.md
\`\`\`

## Key Features Implementation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive grid layouts for video galleries
- Adaptive navigation for different screen sizes

### Video Management
- Video upload functionality (ready for backend integration)
- Category-based organization
- Search and filtering capabilities
- Video player integration ready

### User Experience
- Clean, modern interface
- Intuitive navigation
- Fast loading times with optimized builds
- Accessibility considerations

### Backend API
- RESTful API structure ready for expansion
- Express 5 with modern TypeScript
- Static file serving for production
- Extensible route structure

## Customization

### Styling
The project uses Tailwind CSS with a custom purple theme. Colors can be modified in:
- \`tailwind.config.js\` - Main theme colors
- \`client/src/index.css\` - CSS custom properties

### Components
All UI components are built with shadcn/ui and can be found in:
- \`client/src/components/ui/\` - Base UI components
- \`client/src/components/layout/\` - Layout components
- \`client/src/components/sections/\` - Page sections

### API Endpoints
Add new API routes in:
- \`server/index.ts\` - Main server file
- Create new route files as needed

## Deployment

### Environment Variables
Set the following environment variables for production:
- \`NODE_ENV=production\`
- \`PORT=3001\` (or your preferred port)

### Production Deployment
1. Build the project: \`npm run build\`
2. Start the production server: \`node dist/server/index.js\`
3. The app will serve both API and static files

## Development Guidelines

### Adding New Features
1. Create components in appropriate directories
2. Follow the existing code structure
3. Use TypeScript for type safety
4. Implement responsive design patterns
5. Add proper error handling

### Code Style
- Use ESLint and Prettier for consistent formatting
- Follow React best practices
- Use functional components with hooks
- Implement proper prop typing

## Security Considerations

### Important Notes
- This is a demonstration/educational project
- Implement proper authentication before production use
- Add input validation and sanitization
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Add proper error handling and logging

### Content Moderation
- Implement content upload validation
- Add user verification systems
- Include reporting mechanisms
- Set up automated content scanning

## Legal Compliance

### Age Verification
- Implement robust age verification
- Add appropriate disclaimers
- Include terms of service
- Set up privacy policy

### Content Rights
- Implement DMCA compliance
- Add content takedown procedures
- Include user content policies
- Set up copyright protection

## Support and Documentation

### Getting Help
- Check the code comments for implementation details
- Review the component structure for UI modifications
- Examine the API routes for backend functionality

### Contributing
- Follow the existing code style
- Add proper documentation for new features
- Test all functionality before deployment
- Consider security implications

## License
Private - All rights reserved

## Disclaimer
This software is intended for educational and demonstration purposes. 
Ensure compliance with all applicable laws and regulations when deploying.
The developers are not responsible for misuse of this software.

---

Built with ❤️ using modern web technologies.
`;

  archive.append(readmeContent, { name: 'README.md' });

  archive.finalize().then(() => {
    console.log('Project archive finalized');
  }).catch((err) => {
    console.error('Archive error:', err);
    res.status(500).send('Archive creation failed');
  });

  archive.on('error', (err) => {
    console.error('Archive error:', err);
    res.status(500).send('Archive creation failed');
  });
});

// Export a function to start the server
export async function startServer(port) {
  try {
    if (process.env.NODE_ENV === 'production') {
      setupStaticServing(app);
    }
    app.listen(port, () => {
      console.log(`API Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

// Start the server directly if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Starting server...');
  startServer(process.env.PORT || 3001);
}