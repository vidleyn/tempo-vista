# QR code component solution - Frontend Mentor

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [https://github.com/vidleyn/qr-code-component.git](https://github.com/vidleyn/qr-code-component.git)
- Live Site URL: [https://vidleyn.github.io/qr-code-component](https://vidleyn.github.io/qr-code-component)

## My process

### Built with

- HTML5
- SCSS
- Flexbox

### What I learned

This was a relatively easy challenge, so it was a good opportunity to reinforce essential skills: structuring project files, using SCSS partials, styling a centered object and the page footer. Overall the project took about an hour of work without any help from AI.

I used this approach to keep the footer at the bottom of the page, however I'd like to know if there is a better way of doing this:

```css
body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  flex: 1;
}
```

### Continued development

I used flexbox to make this component, but I'd like to build more complex layouts with grid property in future projects. I’d also like to try a component-based approach which I thought would be overkill for a such simple project.

### Useful resources

- [Transfonter](https://transfonter.org/) - I use this tool to convert `.ttf` fonts into `.woff2` optimized file format in almost every project.
- [W3C Validator](https://validator.w3.org/) - A useful service to check the validity of HTML structure.

## Author

- Website - [Vidleyn](https://vidleyn.ru)
- Frontend Mentor - [@vidleyn](https://www.frontendmentor.io/profile/vidleyn)
- Telegram - [@davidleyn](https://t.me/davidleyn)
