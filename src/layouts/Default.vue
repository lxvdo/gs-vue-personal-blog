<template>
  <div class="layout">
    <Header />
    <slot />
    <!-- <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
      </p>
    </div>-->
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
:root {
  --app-background-color: #ffffff;
  --app-font-color: black;
}
[theme="dark"] {
  --app-background-color: #0d2538; /* #091a28*/
  --app-font-color: white;
}
[theme="sepia"] {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1.1em;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
}

a {
  text-decoration: none;
}
a:link {
  color: var(--app-font-color);
}
a:visited {
  color: var(--app-font-color);
}
/* .footer {
  position: fixed;
  bottom: 0;
} */
</style>
