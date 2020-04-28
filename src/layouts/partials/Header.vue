<template>
  <header class="header">
    <div>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>

      <g-link class="nav__link" to="/about/">About</g-link>
      <g-link class="nav__link" to="/posts/">Posts</g-link>
    </div>
    <!--<ClientOnly><ToggleTheme /></ClientOnly>-->
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

export default {
  components: {
    ToggleTheme,
  },
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
  margin-left: 20px;
  &:hover {
    color: rgb(32, 201, 151);
    cursor: pointer;
    transition: 0.4s ease all;
  }
}
</style>
