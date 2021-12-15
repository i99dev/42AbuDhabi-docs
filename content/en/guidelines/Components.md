---
title: Components
description: 'this page use only for QA model template'
position: 3.4
category: GUIDELINES 
# remove blow this line, only for example purposes
items:
  - Item1
  - Item2
  - Item3
---

## Components

This web come with some components that can be used to help you to write your tutorial.


### `<Solution>`

```
<solution>

write your solution here

</solution>
```

<solution>

write your solution here

</solution>

### `<alert>`

**Props**

- `type`
  - Type: `String`
  - Default: `'info'`
  - Values: `['info', 'success', 'warning', 'danger']`

**Example**

```md
<alert>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>
```

**Result**

<alert>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>

### `<list>`

**Props**

- `items`
  - Type: `Array`
  - Default: `[]`
- `type` <badge>v0.7.0+</badge>
  - Type: `String`
  - Default: `'primary'`
  - Values: `['primary', 'info', 'success', 'warning', 'danger']`
- `icon` <badge>v0.7.0+</badge>
  - Type: `String`
  - *Can be used to override the default `type` icon, check out the [icons available](https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons)*

**Example**

```md
---
items:
  - Item1
  - Item2
  - Item3
---

<list :items="items"></list>
```

**Result**

<list :items="['Item1', 'Item2', 'Item3']"></list>


### `<badge>`

<badge>v0.5.0+</badge>

**Example**

```md
<badge>v1.2+</badge>
```

**Result**

<badge>v1.2+</badge>

### `<code-group>`

This component uses `slots`, refer to `code-block` below.

### `<code-block>`

**Props**

- `label`
  - Type: `String`
  - `required`
- `active`
  - Type: `Boolean`
  - Default: `false`

**Example**

```html
# Backslashes are for demonstration

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  \```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  \```

  </code-block>
</code-group>
```

**Result**

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  ```

  </code-block>
</code-group>

### `Footnotes [^1]`

**Example**
```
Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.
```

**Result**

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

