<template>
  <div id="app">
    <Header />
    <div class="layout">
      <slot />
    </div>
    <footer id="foot">
      <socials class="socials" />
      <p id="copyright">©{{year}} Alex van Domburg</p>
    </footer>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
import Socials from "./partials/Socials.vue";
export default {
  components: {
    Header,
    Socials
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Raleway&display=swap");

:root {
  --app-primary-color: #00793c;
  --app-secondary-color: #00b33c;
  --app-background-color: white;
  --app-font-color: black;
  --app-link-color: var(--app-primary-color);
}
[data-theme="dark"] {
  --app-background-color: #24292e; /* #0d2538;  #091a28*/
  --app-font-color: white;
  --app-link-color: var(--app-secondary-color);
}
[data-theme="sepia"] {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
  --app-link-color: var(--app-primary-color);
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: "Montserrat", -apple-system, system-ui, BlinkMacSystemFont,
    sans-serif;
  line-height: 1.6;
  font-size: 1.22em;
  margin: 0;
  padding: 0;
  height: 100%; // footer test
}

#app {
  min-height: 100vh; // footer test
  position: relative; // footer test
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding: 0px 20px 80px 20px;
}

#foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  vertical-align: text-bottom;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", -apple-system, system-ui, BlinkMacSystemFont,
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
  transition: 0.2s;
}

.text-link {
  text-decoration: underline;
  text-decoration-color: var(--app-link-color);
  text-decoration-skip: objects;
  color: var(--app-link-color);
  &:hover {
    opacity: 0.8;
    transition: 0.4s;
  }
}

img {
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.socials {
  display: none;
  max-width: 200px;
  justify-content: space-between;
  margin: 1em auto 0 auto;
  font-size: 1.22em;
}

#copyright {
  text-align: center;
  padding-top: 40px;
  font-size: 0.8em;
  margin-top: 0.5em;
}

@media only screen and (max-width: 600px) {
  body {
    /* line-height: 1.5; */
    font-size: 1em;
  }
  .layout {
    padding: 0px 1em 80px 1em;
  }
  #copyright {
    padding-top: 0px;
  }
  .socials {
    display: flex;
  }
}
</style>
