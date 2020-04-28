<template>
  <div class="post-list">
    <hr class="line" />
    <p class="date" v-html="post.date" />
    <h1 class="title">{{ post.title }}</h1>
    <PostTags :post="post" />
    <p class="description">{{ post.description }}</p>

    <b> {{ post.timeToRead }} min read </b> &nbsp;
    <g-link :to="post.path" class="read">Read More here...</g-link>
  </div>
</template>

<script>
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostTags,
  },
  props: ["post"],
};
</script>

<style scoped></style>
