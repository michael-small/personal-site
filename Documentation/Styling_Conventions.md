# Styling Conventions

React does not enforce much reagarding styling, so this is this project's conventions:

* CSS id's and classes are in no-caps-slash-case
* Little to no inline-style
* SCSS uses `@use` instead of `@import`
* If a section has an id, leave the selector in the SCSS file, even if blank
* `rem` is the go-to relative size unit
* Consult `components/UI/_theme.scss` for commonly used styles to avoid duplication
