# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [Frontend Mentor Solution Uploaded](https://www.frontendmentor.io/solutions/time-tracking-dashboard---using-js-asyncawait-json-hl9HSMVot7)
- Live Site URL: [Github live pages](https://m-abubakr1.github.io/FEM-Time-Tracking-Dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript - Async/Await, DOM Manipulation
- JSON Integration
- Data Manipulation

### What I learned

I learned new methods to fetch data from .JSON File. Integration and manipulation of data is cool.

```js
async function updateActivityData(timeframe = "weekly") {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
  }}
```

The Defer attribute is a new thing for me which changed my style for now. It makes the JS run after the HTML has loaded.

```html
<script defer src="script.js"></script>
```

This snippet is a new good approach to handle values customary.

```css
:root {
  font-size: 62.5%;
}
```

### Useful resources

- [DevDocs](https://devdocs.io/) - This helped me for fetching data from json using different ways. I really liked "try catch" method and will use it going forward.
- [ghrizhliecodes- github repo](https://github.com/grizhlieCodes/time-tracking-dashboard) - This is the repo which helped me finally understand how to style various things in which i got stuck.

## Acknowledgments

Hats Off to Seer Studio for giving a good approach to complete this challenge, i learned all the new stuff from their Youtube video.
To save my own time, i used some of their code as well and modified accordingly. [SEER STUDIO](https://www.youtube.com/@GrizhlieCodes)
