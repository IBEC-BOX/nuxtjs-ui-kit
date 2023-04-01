![agrisom](https://ibecsystems.com/css/images/ibec-systems.svg)

# Welcome to IBEC UI kit

This is a Nuxt component library that will contain all ibec ui components you need to start a new nuxt (C & D) project. Components are written with nuxt 2, HTML, SCSS, bootstrap 5 and fully configurable using props, slots, and css variables.

> This library is currently under construction. I'll be publishing new components as son as they are ready for use

## Installation

**Using npm or yarn**
```
npm install ibec-ui-kit
yarn add ibec-ui-kit
```

## Usage

- Declare as component

```
<template lang="html">
    <HeaderOne />
</template>

<script lang="js">
import {HeaderOne} from 'ibec-ui-kit';

export default {
  name: 'MyComponent',
  components: {
    HeaderOne: HeaderOne,
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
Check out the code on github, [d.tem4ik/ibec-ui-kit](https://ibecsystems.com/ru#/) **[soon]**

## Documentation
StoryBook
[documentation](http://www.chromatic.com/library?appId=63f77fcfd12622a3e085e406)

## Changelog
All notable changes to this project will be documented in this file.

### [0.1.4] - 2023-02-21
- Init Library
- HeaderOne

### [0.1.5] - 2023-03-14
- HeaderTwo
- HeaderOne(fix)
- Form Inputs
- VeeValidate
- V-Select
- Table
- rename Module
