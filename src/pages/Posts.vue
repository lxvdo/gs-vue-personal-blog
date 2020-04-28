<template>
  <Layout>
    <h1>Posts</h1>
    <section class="posts">
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "",
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
        tags {
          id
          title
          path
        }
        image (width: 770, height: 380, blur: 10)
      }
    }
  }
}
</page-query>

<style></style>
