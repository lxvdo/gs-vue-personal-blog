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
    <nav class="header__item"></nav>
    <div class="header__right">
      <g-link class="nav__icon" to="mailto:alex@lxvdo.com">
        <MailIcon size="1x" />
      </g-link>
      <g-link class="nav__icon" to="https://www.linkedin.com/in/avdomburg/">
        <LinkedinIcon size="1x" />
      </g-link>
      <g-link class="nav__icon" to="https://www.instagram.com/lxvdo/">
        <InstagramIcon size="1x" />
      </g-link>
      <g-link class="nav__icon" to="https://github.com/lxvdo">
        <GithubIcon size="1x" />
      </g-link>
      <!-- <g-link>
      <ClientOnly>-->
      <ToggleTheme @toggled="onClickChild" class="nav__theme" />
      <!-- </ClientOnly>
      </g-link>-->
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
import {
  MailIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon
} from "vue-feather-icons";

export default {
  components: {
    ToggleTheme,
    Logo,
    MailIcon,
    LinkedinIcon,
    InstagramIcon,
    GithubIcon
  },
  data() {
    return {
      theme: "light"
    };
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== "undefined") this.theme = window.__theme;
  },
  methods: {
    onClickChild(value) {
      this.theme = value;
    }
  }
};
</script>

<style lang="scss">
.header {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &__left {
    display: flex;
    float: left;
    align-items: center;
  }
  &__right {
    float: right;
  }
}

.nav__link {
  margin: 0 0 0 1em;
  color: var(--app-font-color);
  float: left;
}

.nav__icon {
  margin-left: 1em;
  color: var(--app-font-color);
  float: left;
}

@media only screen and (max-width: 600px) {
  .nav__icon {
    display: none;
  }
}
.nav__theme {
  float: left;
  margin-left: 1em;
}
</style>
