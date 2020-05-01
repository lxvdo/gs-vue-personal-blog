<template>
  <div class="post-list">
    <!-- <hr class="line" />
    <p class="date" v-html="post.date" />-->
    <g-link :to="post.path" class="read">
      <h2 class="title">{{ post.title }}</h2>
      <p class="description">{{ post.description }}</p>
      <p class="tags">{{ post.timeToRead }} min read</p>
    </g-link>
    <PostTags :post="post" class="tags" />
  </div>
</template>

<script>
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostTags
  },
  props: ["post"]
};
</script>

<style scoped>
.tags {
  display: inline;
  font-size: 0.75em;
}
.title {
  margin-bottom: 0.4em;
}
.description {
  margin-top: 0;
}
</style>
