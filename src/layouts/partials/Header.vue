<template>
  <header class="header">
    <div class="header__left">
      <g-link to="/">
        <Logo :mode="modeHeader" />
      </g-link>
      <g-link class="nav__link" to="/">START HERE</g-link>
      <g-link class="nav__link" to="/posts/">POSTS</g-link>
      <g-link class="nav__link" to="/projects/">PROJECTS</g-link>
    </div>
    <nav class="header__item"></nav>
    <div class="header__right">
      <g-link class="nav__icon" to="mailto:alex@lxvdo.com"
        ><MailIcon size="1x"
      /></g-link>
      <g-link class="nav__icon" to="https://www.linkedin.com/in/avdomburg/"
        ><LinkedinIcon size="1x"
      /></g-link>
      <g-link class="nav__icon" to="https://www.instagram.com/lxvdo/"
        ><InstagramIcon size="1x"
      /></g-link>
      <g-link class="nav__icon" to="https://github.com/lxvdo"
        ><GithubIcon size="1x"
      /></g-link>
      <g-link>
        <ClientOnly>
          <ToggleTheme @toggled="onClickChild" class="nav__icon" />
        </ClientOnly>
      </g-link>
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
  GithubIcon,
} from "vue-feather-icons";

export default {
  components: {
    ToggleTheme,
    Logo,
    MailIcon,
    LinkedinIcon,
    InstagramIcon,
    GithubIcon,
  },
  data() {
    return {
      modeHeader: "light",
    };
  },
  created() {
    const mode = localStorage.getItem("theme");
    if (mode) {
      this.modeHeader = mode;
    }
  },
  methods: {
    onClickChild(value) {
      this.modeHeader = value;
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
  padding: 10px 0;

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
  // font-weight: 400;

  // text-decoration: none;
  float: left;
  // vertical-align: middle;
  // display: inline-block;
  // &:hover {
  //   color: rgb(32, 201, 151);
  //   cursor: pointer;
  //   transition: 0.4s ease all;
  // }
  //   &__icon {
  //     // position: relative;
  //     // top: 2px;
  //     margin-right: 0.7em;
  //     float: right;
  //     // &:hover {
  //     //   color: rgb(32, 201, 151);
  //     //   cursor: pointer;
  //     //   transition: 0.4s ease all;
  //     // }
  //   }
}

.nav__icon {
  margin-left: 1em;
  color: var(--app-font-color);
  // text-decoration: none;
  float: left;
  // display: inline-block;
  // &:hover {
  //   color: rgb(32, 201, 151);
  //   cursor: pointer;
  //   transition: 0.4s ease all;
  // }
  //   &__icon {
  //     // position: relative;
  //     // top: 2px;
  //     margin-right: 0.7em;
  //     float: right;
  //     // &:hover {
  //     //   color: rgb(32, 201, 151);
  //     //   cursor: pointer;
  //     //   transition: 0.4s ease all;
  //     // }
  //   }
}
.nav__icon > svg {
  float: right;
}
</style>
