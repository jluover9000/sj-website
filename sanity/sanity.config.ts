import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { hero } from './schemas/hero'
import { service } from './schemas/service'
import { project } from './schemas/project'
import { siteSettings } from './schemas/siteSettings'

export default defineConfig({
  name: 'sj-allpro',
  title: 'SJ All-Pro CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'lgul3rtu',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [hero, service, project, siteSettings] },
})
