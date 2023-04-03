![agrisom](https://avatars.githubusercontent.com/u/129746451?s=200&v=4)

[![npm version][npm-version-src]][npm-version-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]

[//]: # ([![ibecsystems][ibecsystems-src]][ibecsystems-href])

# Welcome to @ibecsystems/nuxtjs-ui-kit

This is a Nuxt component library that will contain all ibec ui components you need to start a new nuxt (C & D) project. Components are written with nuxt 2, HTML, SCSS, bootstrap 5 and fully configurable using props, slots, and css variables.

> This library is currently under construction. We'll be publishing new components as son as they are ready for use

## Installation

**Using npm or yarn**
```
npm install @ibecsystems/nuxtjs-ui-kit
yarn add @ibecsystems/nuxtjs-ui-kit
```

## Usage

- Declare as component

```
<template lang="html">
    <UiButton variant="primary">
        Button Label
    </UiButton>
</template>

<script lang="js">
import { UiButton } from '@ibecsystems/nuxtjs-ui-kit';

export default {
  name: 'MyComponent',
  components: {
    UiButton,
  },
};
</script>
```

- Styling components

Use bootstrap 5 global variable and override bootstrap 5 scss variable

```
:root {
  --bs-primary: #e00366;
}

main.scss
    // Default variable overrides
    $body-bg: #fff;
    $body-color: #333;
    $primary: #e00366;
    @import "bootstrap/scss/bootstrap";
    
```

## Repository
Check out the code on github, [IBEC-BOX/nuxtjs-ui-kit](https://github.com/IBEC-BOX/nuxtjs-ui-kit)

## Documentation
StoryBook
[documentation](https://production--642ab77737bffcfd679b51f1.chromatic.com)

## Changelog

Changes for each version of our project are documented in the [CHANGELOG.md](./CHANGELOG.md) file.

Copyright (c) [Ibec Systems][ibecsystems-href]

<!-- Badges -->
[npm-version-src]: https://badgen.net/npm/v/@ibecsystems/nuxtjs-ui-kit
[npm-version-href]: https://www.npmjs.com/package/@ibecsystems/nuxtjs-ui-kit

[github-actions-ci-src]: https://badgen.net/github/checks/IBEC-BOX/nuxtjs-ui-kit/production
[github-actions-ci-href]: https://github.com/IBEC-BOX/nuxtjs-ui-kit

[ibecsystems-src]: https://badgen.net/badge/icon/ibec-systems?icon=chrome&label&color=black
[ibecsystems-href]: https://ibecsystems.com/ru#/

