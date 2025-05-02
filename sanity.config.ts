import {defineConfig} from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'icy31qyu',
    dataset: 'learning',
    title: 'Learning the sanity CMS',
    apiVersion: '2025-01-04',
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas},
    
})

export default config;