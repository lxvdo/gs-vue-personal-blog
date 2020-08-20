<template>
  <Layout>
    <h1>Sorry, this page doesn't appear to exist</h1>
    <p>
      Maybe you can find it
      <g-link to="/posts" class="text-link">in here</g-link>?
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Oops, page not found",
  },
};
</script>

<style lang="scss">
</style>