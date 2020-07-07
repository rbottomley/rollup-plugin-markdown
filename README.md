# rollup-plugin-markdown

[![rbottomley](https://circleci.com/gh/rbottomley/rollup-plugin-markdown.svg?style=svg)](https://circleci.com/gh/rbottomley/rollup-plugin-markdown)

A Rollup plugin to parse Markdown files.

- [Markdown-it][markdown-it] is used to parse the Markdown
- [Front Matter][front-matter] is used to parse front-matter from the markdown file.

Plugins:
- [Markdown-it-attrs][markdown-it-attrs]
- [Markdown-it-kbd][markdown-it-kbd]
- [Markdown-it-mark][markdown-it-mark]
- [Markdown-it-small][markdown-it-small]
- [Markdown-it-sub][markdown-it-sub]
- [Markdown-it-sup][markdown-it-sup]

## Install

```
npm install --save-dev git:rbottomley/rollup-plugin-markdown

yarn add --dev git:rbottomley/rollup-plugin-markdown
```

## Example module output

```js
import blogPost from './blog-post.md'

// from this import you get:
blogPost.html // the parsed HTML
blogPost.[frontmatter keys] // the front-matter
blogPost.slug // blog-post - the base of the filename that was imported
```

## Rollup configuration

```js
import markdown from 'rollup-plugin-markdown'

export default {
  input: 'your-app.js',
  plugins: [markdown()],
}
```

You can pass in two options: `include` and `exclude`, which are globs to limit which file(s) the plugin is applied to.

The plugin will only parse `.md` files.

[markdown-it]: https://github.com/markdown-it/markdown-it
[front-matter]: https://github.com/jxson/front-matter
[markdown-it-attrs]: https://github.com/GerHobbelt/markdown-it-attrs
[markdown-it-kbd]: https://github.com/jGleitz/markdown-it-kbd
[markdown-it-mark]: https://github.com/markdown-it/markdown-it-mark
[markdown-it-small]: https://github.com/lwg529/markdown-it-small
[markdown-it-sub]: https://github.com/markdown-it/markdown-it-sub
[markdown-it-sup]: https://github.com/markdown-it/markdown-it-sup

## Changelog

### 2.0.0
- change filename key to slug and only return the basename sans extension.

### 1.1.0
- add more markdown-it plugins

### 1.0.0
- change markdown processor to markdown-it
- change front matter processor to front-matter
- add markdown-it-attrs plugin

### 0.2.0
- expose full path to Markdown file as `.path` from the import.

### 0.1.0
- Initial release
