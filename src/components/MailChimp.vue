<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <p>Do you want to get new articles delivered straight to you? Then signup here:</p>
    <form
      action="https://lxvdo.us20.list-manage.com/subscribe/post?u=e93f9ba0c5e810f3e12b0a3ad&amp;id=ef147bea44"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <!-- <label for="mce-FNAME">First Name</label> -->
          <input
            type="text"
            value
            name="FNAME"
            class="required"
            id="mce-FNAME"
            placeholder="First name..."
          />
        </div>
        <div class="mc-field-group">
          <!-- <label for="mce-EMAIL">Email Address</label> -->
          <input
            type="email"
            value
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
            placeholder="Email..."
          />
        </div>

        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_e93f9ba0c5e810f3e12b0a3ad_ef147bea44" tabindex="-1" value />
        </div>
        <div class="clear">
          <input
            type="submit"
            value="Sign me up!"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button"
          />
        </div>
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</template>

<script>
export default {};
</script>

<style lang="scss">
.mc-field-group input {
  display: block;
  font-family: inherit;
  font-size: inherit;
  max-width: 100%;
  width: 450px;
  margin: 0.7em auto;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0.3em;
}
.mc-field-group input:focus {
  /* outline-color: var(--app-link-color); */
  outline: 0;
  box-shadow: 0 0 10px var(--app-link-color);
}

.button {
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: white;
  border: none;
  background-color: var(--app-primary-color);
  width: 450px;
  max-width: 100%;
  margin: 0.7em auto;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0.3em;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.2s;
  }
}
</style>
