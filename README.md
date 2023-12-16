# Frontend Mentor - Typemaster pre-launch landing page solution

### Screenshot

<img src="assets/shared/Screenshot from 2023-12-16 11-11-00.png" alt="Screenshot" width="500">

## Table of contents

- [Frontend Mentor - Typemaster pre-launch landing page solution](#frontend-mentor---typemaster-pre-launch-landing-page-solution)
    - [Screenshot](#screenshot)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Links

- Github: [Giorgi Nareklishvili gionare ](https://github.com/gionare/Typemaster-pre-lunch)
- Live Site URL: [Github.io](https://gionare.github.io/Typemaster-pre-lunch/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

```css
.images img:first-child {
  opacity: 0.5;
  width: 144px;
  border-radius: 15px;
} 
.images img:last-child {
  width: 220px;
  border-radius: 15px;
} 
```

```css 
.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
} 
```

```js
created script.js to make h1 element in uppercase 
document.addEventListener("DOMContentLoaded", function () {

  const h1Element = document.querySelector('h1');

  if (h1Element) {
    h1Element.textContent = h1Element.textContent.toUpperCase();
  }
});
```

### Continued development

React js

### Useful resources

- [Google](https://www.google.com) - 

## Author

- Website - [Giorgi Nareklishvili](http://portfolio-giorgi-nareklishvili.vercel.app/)
- Frontend Mentor - [gionare](https://www.frontendmentor.io/profile/gionare)
- LinkedIn - [Giorgi Nareklishvili](https://www.linkedin.com/in/gionare/)

## Acknowledgments

