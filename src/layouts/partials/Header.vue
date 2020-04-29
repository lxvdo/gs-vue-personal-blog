<template>
  <header class="header">
    <div>
      <g-link to="/">
        <Logo :mode="modeHeader" class="nav__link" />
      </g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
      <g-link class="nav__link" to="/posts/">Posts</g-link>
    </div>

    <ClientOnly>
      <ToggleTheme @toggled="onClickChild" />
    </ClientOnly>
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

export default {
  components: {
    ToggleTheme,
    Logo
  },
  data() {
    return {
      modeHeader: "light"
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
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-right: 20px;
  display: inline-block;
  font-variant: small-caps;
  &:hover {
    color: rgb(32, 201, 151);
    cursor: pointer;
    transition: 0.4s ease all;
  }
}
</style>
