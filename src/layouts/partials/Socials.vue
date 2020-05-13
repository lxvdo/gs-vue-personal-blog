<template>
  <div>
    <g-link to="mailto:alex@lxvdo.com">
      <MailIcon size="1x" />
    </g-link>
    <g-link to="https://www.linkedin.com/in/avdomburg/">
      <LinkedinIcon size="1x" />
    </g-link>
    <g-link to="https://www.instagram.com/lxvdo/">
      <InstagramIcon size="1x" />
    </g-link>
    <g-link to="https://github.com/lxvdo">
      <GithubIcon size="1x" />
    </g-link>
  </div>
</template>

<script>
import {
  MailIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon
} from "vue-feather-icons";

export default {
  components: {
    MailIcon,
    LinkedinIcon,
    InstagramIcon,
    GithubIcon
  }
};
</script>

<style lang="scss">
</style>