<template>
  <header class="header">
    <div class="header__left">
      <g-link to="/">
        <Logo :mode="theme" />
      </g-link>
      <g-link class="nav__link" to="/">START HERE</g-link>
      <g-link class="nav__link" to="/posts/">POSTS</g-link>
      <!-- <g-link class="nav__link" to="/projects/">PROJECTS</g-link> -->
    </div>
    <div class="header__right">
      <Socials class="header__socials" />
      <ToggleTheme @toggled="onClickChild" class="nav__theme" />
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ToggleTheme from "@/components/ToggleTheme";
import Logo from "@/components/Logo.vue";
import Socials from "@/layouts/partials/Socials.vue";

export default {
  components: {
    ToggleTheme,
    Logo,
    Socials,
  },
  data() {
    return {
      theme: "light",
    };
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== "undefined") this.theme = window.__theme;
  },
  methods: {
    onClickChild(value) {
      this.theme = value;
    },
  },
};
</script>

<style lang="scss">
.header {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  vertical-align: 3em;
  font-family: "Raleway", -apple-system, system-ui, BlinkMacSystemFont,
    sans-serif;

  &__left {
    display: flex;
    float: left;
    align-items: center;
  }
  &__right {
    display: flex;
    float: right;
    margin-top: 5px;
  }
  &__socials {
    display: flex;
    width: 7em;
    justify-content: space-between;
  }
}

.nav__link {
  margin-left: 1em;
}

.nav__theme {
  margin-left: 1em;
}

@media only screen and (max-width: 600px) {
  .header__socials {
    display: none;
  }
}
</style>
