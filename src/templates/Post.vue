<template>
  <Layout>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-date">
        {{ $page.post.date }} &bull; {{ $page.post.timeToRead }} min read
      </p>
    </div>
    <g-image v-if="$page.post.image" :src="$page.post.image"></g-image>
    <div class="post-content" v-html="$page.post.content" />
    <hr />
    <Substack />
    <!-- <button
      class="button"
      :style="{ visibility: showComments ? 'hidden' : 'visible' }"
      v-on:click="showComments = true"
    >Load comments</button>
    <div class="post-comments" v-if="showComments">
    <div class="post-comments">
      <vue-disqus shortname="lxvdo" :identifier="$page.post.title"></vue-disqus>
    </div>-->
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
    description
    tags {
          id
          title
        }
    image (width: 760, blur: 10)
  }
}
</page-query>

<script>
import Substack from "@/components/Substack.vue";

export default {
  components: {
    Substack,
  },
  data() {
    return {
      showComments: false,
    };
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
        {
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          property: "og:description",
          content: this.$page.post.description,
        },
        {
          property: "og:image",
          content: this.$page.post.image || "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.post-date {
  text-align: center;
  font-size: 0.7em;
}

.post-content {
  a {
    text-decoration: underline;
    text-decoration-color: var(--app-link-color);
    text-decoration-skip: objects;
    color: var(--app-link-color);
    &:hover {
      opacity: 0.8;
      transition: 0.4s;
    }
  }
}
noscript + em {
  text-align: center;
  font-size: 0.7em;
}
.post-comments {
  margin-top: 3em;
}
</style>
