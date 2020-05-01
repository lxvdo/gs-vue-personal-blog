<template>
  <Layout>
    <h1>Posts</h1>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Posts"
  }
};
</script>

<page-query>
query {
  allPost(filter: { published: { eq: true}}) {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        path
        content
        date (format: "D MMMM YYYY")
        tags(sortBy: "title", order: ASC) {
          id
          title
          path
        }
        image (width: 760)
      }
    }
  }
}
</page-query>

<style></style>
