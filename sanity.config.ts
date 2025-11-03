import { defineConfig } from 'sanity';
   import { deskTool } from 'sanity/desk';
   import inquiry from "@/sanity/schemaTypes/enquiry"

   export default defineConfig({
     basePath: '/studio',
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '<your-project-id>',
     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
     plugins: [deskTool()],
     schema: {
       types: [ inquiry],
     },
   });