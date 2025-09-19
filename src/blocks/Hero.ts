import { Block } from "payload";

const Hero: Block = {
    slug: 'hero',
    fields: [
        { type: 'relationship', name: 'backgroundImage', relationTo: 'media' },
        { type: 'richText', name: 'content' }
    ]
}

export default Hero