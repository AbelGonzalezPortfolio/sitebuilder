// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Globals
import { Header } from './globals/Header'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Pages from './collections/Pages'
import { Footer } from './globals/Footer'
import { Posts } from './collections/Posts'
import { Site } from './globals/Site'
import { Categories } from './collections/Categories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      collections: ['pages', 'posts'],
      url: ({ data, collectionConfig }) => {
        if (collectionConfig?.slug === 'posts') {
          return `http://localhost:3000/posts/${data.slug}?preview=true`
        } else {
          return `http://localhost:3000/${data.slug}?preview=true`
        }
      },
      breakpoints: [{ label: 'Mobile', height: 667, width: 375, name: 'mobile' }],
    },
  },
  collections: [Users, Media, Pages, Posts, Categories],
  globals: [Header, Footer, Site],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
