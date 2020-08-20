<template>
  <Layout>
    <h1 class="tag-title">#{{ $page.tag.title }}</h1>
    <div class="posts">
      <PostList v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    id 
    belongsTo {
      edges  {
        node {
          ...on Post {
            title
            path
            date (format: "D MMMM YYYY")
            timeToRead
            description
            content
            tags(sortBy: "title", order: ASC) {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from '~/components/Author.vue'
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PostList,
  },
  metaInfo() {
    return {
      title: "Tagged as " + this.$page.tag.title,
      meta: [
        {
          name: "description",
          content: "Posts tagged as " + this.$page.tag.title,
        },
        {
          property: "og:title",
          content: "Tagged as " + this.$page.tag.title,
        },
        {
          property: "og:description",
          content: "Posts tagged as " + this.$page.tag.title,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
