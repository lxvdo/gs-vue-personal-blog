<template>
  <Layout>
    <g-image src="@/assets/IMG_20191128_163431_529.jpg"></g-image>
    <h1 class="front-title">Hi &ndash; I'm Alex van Domburg</h1>
    <p>
      I question, write and build stuff for a brighter future. On this website I
      explore what it means to be human in this day and age. I focus on three
      topics:
    </p>

    <ul>
      <li>
        <b>Technology:</b> How does modern technology impact our lives?
      </li>
      <li>
        <b>Mind:</b> How do we learn, believe and decide?
      </li>
      <li>
        <b>Sustainability:</b> What does real sustainability look like and how
        do we get there?
      </li>
    </ul>

    <p>
      Using writing and coding projects I dive into my own relationship with
      technology and question my own beliefs in pursuit of a truer truth. I go from
      personal experience and lessons from wise people that I've encountered
      along the way.
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
    title: "Meditations on sustainability, technology and the mind",
  },
};
</script>

<style lang="scss">
// .text-link {
//   text-decoration: underline;
//   text-decoration-color: var(--app-link-color);
//   text-decoration-skip: objects;
//   color: var(--app-link-color);
//   &:hover {
//     opacity: 0.8;
//     transition: 0.4s;
//   }
// }
</style>
