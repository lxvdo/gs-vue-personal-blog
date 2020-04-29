<template>
  <div class="post-list">
    <!-- <hr class="line" />
    <p class="date" v-html="post.date" />-->
    <g-link :to="post.path" class="read">
      <h1 class="title">{{ post.title }}</h1>
      <p class="description">{{ post.description }}</p>
    </g-link>
    <div>
      <p class="tags">{{ post.timeToRead }} min read</p>
      <PostTags class="tags" :post="post" />
    </div>
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
  /* z-index: 1; */
  display: inline-block;
  margin-right: 2em;
  /* position: relative; */
  /* float: left; */
}
</style>
