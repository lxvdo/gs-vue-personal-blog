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
  /* margin: 0 1em 0 0; */
  font-size: 0.75em;
  /* position: relative; */
  /* float: left; */
  /* z-index: 1; */
}
/* .description {
  max-height: 4em;
  white-space: nowrap;
  overflow-y: hidden;
  text-overflow: ellipsis;
} */
</style>
