<template>
  <Layout>
    <g-image src="@/assets/IMG_20191128_163431_529.jpg"></g-image>
    <h1 class="front-title">Hi &ndash; I'm Alex van Domburg</h1>
    <p>
      I question, write and build stuff for a brighter future. On this website I explore what it means
      to be human in this day and age. I focus on three topics:
    </p>

    <ul>
      <li>
        <b>Technology:</b> How does modern technology impact our lives?
      </li>
      <li>
        <b>Brain:</b> How do we think, believe and choose?
      </li>
      <li>
        <b>Sustainability:</b> What does real sustainability look like and how do you get there?
      </li>
    </ul>

    <p>
      <b>Insert more text</b>
    </p>
    <MailChimp />
  </Layout>
</template>

<script>
import MailChimp from "@/components/MailChimp.vue";

export default {
  components: {
    MailChimp
  },
  metaInfo: {
    title: "Hi!"
  }
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
