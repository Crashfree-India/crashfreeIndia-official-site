import { Node } from '@tiptap/core'

export const CustomBlockquote = Node.create({
  name: 'blockquote',
  group: 'block',
  content: 'block+',
  defining: true,
  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          return {
            class: attributes.class || null,
          }
        },
      },
    }
  },
  parseHTML() {
    return [{ tag: 'blockquote' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['blockquote', HTMLAttributes, 0]
  },
})
