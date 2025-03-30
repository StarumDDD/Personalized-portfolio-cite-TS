# Content Management Guide

This guide explains how to update the content on your portfolio website without needing to modify the code.

## Content Configuration File

All the website content is stored in a single configuration file:

```
src/config/content.ts
```

This file contains different sections for each part of your website. Simply edit the values in this file to update your content.

## Updating Basic Site Information

At the top of the file, you'll find the `siteConfig` object which contains basic information about your site:

```typescript
export const siteConfig = {
  siteName: 'Multi-Skilled Portfolio',
  siteDescription: 'Portfolio showcasing 3D modeling...',
  siteUrl: 'https://yourportfolio.com',
  
  contact: {
    email: 'contact@example.com',
    location: 'San Francisco, CA',
    // ... other contact info
  },
};
```

Update these values with your own information.

## Editing Homepage Content

### Hero Section

To edit the hero section on the homepage, modify the `heroContent` object:

```typescript
export const heroContent = {
  title: {
    firstLine: 'Multi-Skilled',
    secondLine: 'Creative Developer',
  },
  description: 'Blending 3D modeling, CG generalism...',
  buttons: [
    // ... button configurations
  ],
};
```

### Skills Section

The skills displayed on the homepage are stored in the `skillsContent` array:

```typescript
export const skillsContent = [
  {
    title: '3D Modeling',
    icon: 'cube',
    description: 'Creating detailed 3D models...',
  },
  // ... other skills
];
```

### Call-to-Action Section

Edit the CTA section with the `ctaContent` object:

```typescript
export const ctaContent = {
  title: 'Ready to Start a Project?',
  description: "Let's collaborate to bring your vision to life...",
  buttonText: 'Get in Touch',
  buttonUrl: '/contact',
};
```

## Managing Projects

To add, remove, or edit projects, modify the `projectsContent.projects` array:

```typescript
projects: [
  {
    id: 1,
    title: '3D Character Design',
    category: '3D Modeling',
    image: 'https://via.placeholder.com/800x600/4285F4/FFFFFF?text=3D+Character',
    description: 'A detailed 3D character created for...',
    tags: ['Blender', 'ZBrush', 'Character Design', 'Rigging'],
  },
  // ... other projects
]
```

Each project has the following properties:
- `id`: A unique identifier for the project
- `title`: The project title
- `category`: The category the project belongs to
- `image`: URL to the project image (you can also use local images from the `/public/images/` folder)
- `description`: A brief description of the project
- `tags`: An array of technologies or skills used in the project

## Updating Skills Page

The detailed skills page content is in the `skillsPageContent` object. Here you can update:

1. The page title and description
2. Skill categories and individual skills with their proficiency levels
3. Additional information boxes at the bottom of the page

## Editing Demo and Contact Pages

Similar to other sections, you can update the demo and contact pages by modifying their respective config objects: `demoContent` and `contactContent`.

## Adding Images

To add your own images:

1. Place your images in the `/public/images/` folder
2. Reference them in the config file with paths like: `/images/your-image.jpg`

## Next Steps After Updating Content

After editing the content configuration file:

1. Save the file
2. If the development server is running, the changes will appear automatically
3. If not, start the development server with `npm run dev`
4. Build your site for production with `npm run build` when you're ready to deploy

## Advanced: Adding New Sections

If you want to add entirely new sections, you'll need to:

1. Add a new configuration object in the content.ts file
2. Modify the corresponding component to use this new configuration
3. Update the page where you want the new section to appear