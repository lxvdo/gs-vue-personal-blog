<template>
  <Layout>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
    </div>
    <g-image v-if="$page.post.image" :src="$page.post.image"></g-image>
    <div class="post-content" v-html="$page.post.content" />
    <button
      :style="{visibility: showComments ? 'hidden' : 'visible'}"
      v-on:click="showComments = true"
    >Load comments</button>
    <div class="post-comments" v-if="showComments">
      <vue-disqus shortname="lxvdo" :identifier="$page.post.title"></vue-disqus>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
          id
          title
        }
    image (width: 760, blur: 10)
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      showComments: false
    };
  }
};
</script>

<style lang="scss">
.post-title {
  text-align: center;
  font-size: 30px;
  /* line-height: 10px; */
  /* padding: 2em 0; */
  font-family: "Stylish";
}
.post-date {
  font-size: 16px;
  font-weight: 400;
}
.post-content {
  img {
    // font-size: 20px;
    width: 760px;
  }
}
</style>
