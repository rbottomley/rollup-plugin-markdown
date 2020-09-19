const { createFilter } = require('rollup-pluginutils')
const path = require('path')
const fm = require('front-matter')
const markdownIt = require('markdown-it')

// markdown-it plugins
const markdownItAttrs = require('@rbottomley/markdown-it-attrs')
const markdownItMark = require('markdown-it-mark')
const markdownItSup = require('markdown-it-sup')
const markdownItSub = require('markdown-it-sub')
const markdownItKbd = require('markdown-it-kbd')
const markdownItHL = require('markdown-it-highlightjs')
const markdownItFigure = require('@rbottomley/markdown-it-figure')
const markdownItDeflist = require('markdown-it-deflist')

const md = new markdownIt({
  html: true,
  typographer: true,
  breaks: true
}).
  use(markdownItAttrs).
  use(markdownItKbd).
  use(markdownItMark).
  use(markdownItSup).
  use(markdownItSub).
  use(markdownItKbd).
  use(markdownItHL).
  use(markdownItFigure).
  use(markdownItDeflist)

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
        slug: path.basename(id, '.md'),
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
