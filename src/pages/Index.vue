<template>
  <Layout>
    <h1 class="front-title">Hi there, I'm Alex van Domburg</h1>
    <p>
      This is my blog added stuff. I have {{ $page.allPost.totalCount }} posts
    </p>
    <MailChimp />
  </Layout>
</template>

<script>
import MailChimp from "@/components/MailChimp.vue";

export default {
  components: {
    MailChimp,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
        image
      }
    }
  }
}
</page-query>

<style scoped>
.front-title {
  text-align: center;
}
</style>
