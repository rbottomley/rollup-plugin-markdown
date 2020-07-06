# rollup-plugin-markdown

[![CircleCI](https://circleci.com/gh/jackfranklin/rollup-plugin-markdown.svg?style=svg)](https://circleci.com/gh/jackfranklin/rollup-plugin-markdown)

A Rollup plugin to parse Markdown files.

- [Markdown-it][markdown-it] is used to parse the Markdown
- [Front Matter][front-matter] is used to parse front-matter from the markdown file.

Plugins:
- [Markdown-it-attrs][markdown-it-attrs] 

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
blogPost.filename // blog-post.md - the filename that was imported
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
[markdown-it-attrs]: https://github.com/GerHobbelt/markdown-it-attrs#readme

## Changelog

### 1.0.0
- change markdown processor to markdown-it
- change front matter processor to front-matter
- add markdown-it-attrs plugin

### 0.2.0
- expose full path to Markdown file as `.path` from the import.

### 0.1.0
- Initial release
