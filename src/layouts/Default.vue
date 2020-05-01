<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap");

:root {
  --app-primary-color: #00793c;
  --app-secondary-color: #00b33c;
  --app-background-color: white;
  --app-font-color: black;
  --app-link-color: var(--app-primary-color);
}
[theme="dark"] {
  --app-background-color: #24292e; /* #0d2538;  #091a28*/
  --app-font-color: white;
  --app-link-color: var(--app-secondary-color);
}
[theme="sepia"] {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
  --app-link-color: var(--app-primary-color);
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: "Raleway", -apple-system, system-ui, BlinkMacSystemFont,
    sans-serif;
  line-height: 1.6;
  font-size: 1.25em;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding: 0px 20px 60px 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", -apple-system, system-ui, BlinkMacSystemFont,
    sans-serif;
  line-height: 1.4;
}

h1 {
  text-align: center;
}

a {
  text-decoration: none;
  color: var(--app-font-color);
}
a:hover {
  color: var(--app-link-color);
  transition: 0.4s;
}

img {
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  body {
    /* line-height: 1.5; */
    font-size: 1em;
  }
  .layout {
    padding: 0px 1em 1em 1em;
  }
}
</style>
