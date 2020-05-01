<template>
  <Layout>
    <h1 class="front-title">Hi &ndash; I'm Alex van Domburg</h1>
    <g-image src="@/assets/IMG_20191128_163431_529.jpg"></g-image>
    <p>
      LXVDO refers to me, Alex van Domburg. As an engineer and thinker, I am
      fascinated by human's ability to make sense of its environment, invent
      solutions and improve its way of living. At the same time, the more I read
      and see, the more I realize that we are becoming one of our own
      <a
        href="https://www.80000hours.org/articles/extinction-risk/"
        class="text-link"
      >largest existential threats</a>
      .
    </p>
    <p>
      Technological progress has given us the power to transform our lives. But
      without proper control, that same power can just as easily lead us to our
      demise. Our power has destabilized the global system, has increased
      inequality on multiple levels and has been disconnecting us from our
      environment and ourselves. It influences our thinking and some of its
      mental constructs are deeply rooted in our culture. I believe tackling
      these large problems starts with becoming aware. We have to take time to
      reflect on how our actions are impacting the world we live in. Being
      conscious of our own biases and flaws, we can map out a path of change to
      start rebalancing and reconnecting. On this blog, I explore what it means
      to be human in this day and age. I use these questions as my guide:
    </p>

    <ul>
      <li>How do we think and act?</li>
      <li>How are modern culture and technologies influencing us?</li>
      <li>How can we rebalance the global system and aim for true sustainability?</li>
    </ul>
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
    title: "Hello, world!"
  }
};
</script>

<style lang="scss" scoped>
.text-link {
  text-decoration: underline;
  text-decoration-color: var(--app-link-color);
  text-decoration-skip: objects;
  color: var(--app-link-color);
  &:hover {
    opacity: 0.8;
    transition: 0.4s;
  }
}
</style>
