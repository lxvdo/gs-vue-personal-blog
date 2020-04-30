<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
      <!-- <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
      </p>
    </div>-->
    </div>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap");

:root {
  --app-background-color: white;
  --app-font-color: black;
  --app-link-color: #00793c;
}
[theme="dark"] {
  --app-background-color: #24292e; /* #0d2538;  #091a28*/
  --app-font-color: white;
  --app-link-color: #00b33c;
}
[theme="sepia"] {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
  --app-link-color: #00793c;
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: "Raleway", -apple-system, system-ui, BlinkMacSystemFont,
    sans-serif;
  /* margin: 0; */
  /* padding: 0; */
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

a {
  text-decoration: none;
  color: var(--app-font-color);
}
/* a:link {
  color: var(--app-font-color);
}
a:visited {
  color: var(--app-font-color);
} */
a:hover {
  color: var(--app-link-color);
  /* opacity: 0.7; */
  /* cursor: pointer; */
  transition: 0.4s;
}

img {
  display: block;
  /* width: 600; */
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
