<template>
  <div>
    <g-link class="post-tags" v-for="tag in post.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
    <!-- <p class="post-tags" v-for="tag in post.tags" :key="tag.id">{{ tag.title }}</p> -->
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-tags {
  margin-left: 0.7em;
  margin-bottom: 0.7em;
  // font-size: 0.8em;
  display: inline-flex;
  color: white;
  text-decoration: none;
  background-color: var(--app-primary-color); // var(--bg-color);
  // color: currentColor !important; //Todo: remove important;
  padding: 0.3em 0.5em;
  border-radius: 0.3em;
  &:hover {
    color: white;
  }
}
</style>
