# Portfolio Website User Guide

This guide explains how to use, run, customize, and deploy the portfolio website.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Customizing Content](#customizing-content)
3. [Running in Development](#running-in-development)
4. [Building for Production](#building-for-production)
5. [Deployment Options](#deployment-options)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
1. Make sure you have Node.js installed on your computer
2. Open a terminal in the project directory
3. Install the dependencies:
   ```bash
   npm install
   ```

## Customizing Content

### Content Configuration
All website content is managed through a single configuration file:
```
src/config/content.ts
```

This file contains sections for different parts of the website. Edit this file to update your content without touching the code. Refer to `CONTENT_GUIDE.md` for detailed instructions on how to edit content.

### Adding Custom 3D Models
To add your own 3D models:

1. Place your GLTF/GLB model files in the `/public/models/` directory
2. Update the model path in the relevant components

### Updating Images
1. Place your images in the `/public/images/` directory
2. Reference them in the content configuration file with paths like: `/images/your-image.jpg`

## Running in Development

To run the website locally:

```bash
npm run dev
```

This will start the development server at http://localhost:3000

Features of development mode:
- Hot reload (changes appear instantly)
- Detailed error messages
- Source maps for debugging

## Building for Production

When you're ready to deploy your site:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder. To test the production build locally:

```bash
npm run start
```

## Deployment Options

### Vercel (Recommended)
The easiest way to deploy your Next.js app:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Netlify
Another good option:

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`

### Traditional Hosting
If you prefer traditional hosting:

1. Run `npm run build`
2. Copy the `.next` folder, `public` folder, and `package.json` to your server
3. Install dependencies on your server with `npm install --production`
4. Start the server with `npm run start`

## Troubleshooting

### 3D Models Not Loading
- Ensure WebGL is supported in your browser
- Check browser console for errors
- Verify model paths are correct

### Content Changes Not Reflecting
- Make sure you saved the content configuration file
- Restart the development server if necessary
- Clear your browser cache

### Build Errors
- Check the terminal output for detailed error messages
- Ensure all dependencies are installed
- Update Node.js to the latest LTS version

### Need Help?
If you encounter any issues not covered in this guide, please check the Next.js documentation or reach out for support.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)