const { createFilter } = require('rollup-pluginutils')
const path = require('path')
const fm = require('front-matter')
const markdownIt = require('markdown-it')

// markdown-it plugins
const markdownItAttrs = require('@gerhobbelt/markdown-it-attrs')

const md = new markdownIt({
  html: true,
  typographer: true,
  breaks: true
}).use(markdownItAttrs)

const markdownPlugin = (options = {}) => {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'rollup-plugin-markdown',
    transform(code, id) {
      if (!filter(id) === -1) return

      const extension = path.extname(id)

      if (extension !== '.md') return

      const frontMatter = fm(code)
      const html = md.render(frontMatter.body)

      const exportFromModule = JSON.stringify({
        ...frontMatter.attributes,
        filename: path.basename(id),
        path: id,
        html: html,
      })

      return {
        code: `export default ${exportFromModule}`,
        map: { mappings: '' },
      }
    },
  }
}

module.exports = markdownPlugin
