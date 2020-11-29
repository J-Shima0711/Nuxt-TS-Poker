<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Poker</h1>
      <h2 class="subtitle">made with Nuxt JS & TypeScript</h2>
      <p>Programmed by J.Shima</p>
      <!--      <div class="links">-->
      <!--        <a-->
      <!--          href="https://nuxtjs.org/"-->
      <!--          target="_blank"-->
      <!--          rel="noopener noreferrer"-->
      <!--          class="button&#45;&#45;green"-->
      <!--        >-->
      <!--          Documentation-->
      <!--        </a>-->
      <!--        <a-->
      <!--          href="https://github.com/nuxt/nuxt.js"-->
      <!--          target="_blank"-->
      <!--          rel="noopener noreferrer"-->
      <!--          class="button&#45;&#45;grey"-->
      <!--        >-->
      <!--          GitHub-->
      <!--        </a>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('./PokerGame')
    }, 2500)
  },
})
</script>

<style>
.container {
  animation: 2s appear;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (max-width: 599px) {
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 24px;
  }
}
</style>
