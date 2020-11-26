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
    <div class="d-none">
      <img src="~/assets/board2.png" alt="preload" />
      <img src="~/assets/body.jpg" alt="preload" />
      <img src="~/assets/wood.png" alt="preload" />
      <img :src="'./images/back.png'" alt="preload" />
      <img :src="'./images/C2.png'" alt="preload" />
      <img :src="'./images/C3.png'" alt="preload" />
      <img :src="'./images/C4.png'" alt="preload" />
      <img :src="'./images/C5.png'" alt="preload" />
      <img :src="'./images/C6.png'" alt="preload" />
      <img :src="'./images/C7.png'" alt="preload" />
      <img :src="'./images/C8.png'" alt="preload" />
      <img :src="'./images/C9.png'" alt="preload" />
      <img :src="'./images/C10.png'" alt="preload" />
      <img :src="'./images/CA.png'" alt="preload" />
      <img :src="'./images/CJ.png'" alt="preload" />
      <img :src="'./images/CK.png'" alt="preload" />
      <img :src="'./images/CQ.png'" alt="preload" />
      <img :src="'./images/D2.png'" alt="preload" />
      <img :src="'./images/D3.png'" alt="preload" />
      <img :src="'./images/D4.png'" alt="preload" />
      <img :src="'./images/D5.png'" alt="preload" />
      <img :src="'./images/D6.png'" alt="preload" />
      <img :src="'./images/D7.png'" alt="preload" />
      <img :src="'./images/D8.png'" alt="preload" />
      <img :src="'./images/D9.png'" alt="preload" />
      <img :src="'./images/D10.png'" alt="preload" />
      <img :src="'./images/DA.png'" alt="preload" />
      <img :src="'./images/DJ.png'" alt="preload" />
      <img :src="'./images/DK.png'" alt="preload" />
      <img :src="'./images/DQ.png'" alt="preload" />
      <img :src="'./images/H2.png'" alt="preload" />
      <img :src="'./images/H3.png'" alt="preload" />
      <img :src="'./images/H4.png'" alt="preload" />
      <img :src="'./images/H5.png'" alt="preload" />
      <img :src="'./images/H6.png'" alt="preload" />
      <img :src="'./images/H7.png'" alt="preload" />
      <img :src="'./images/H8.png'" alt="preload" />
      <img :src="'./images/H9.png'" alt="preload" />
      <img :src="'./images/H10.png'" alt="preload" />
      <img :src="'./images/HA.png'" alt="preload" />
      <img :src="'./images/HJ.png'" alt="preload" />
      <img :src="'./images/HK.png'" alt="preload" />
      <img :src="'./images/HQ.png'" alt="preload" />
      <img :src="'./images/S2.png'" alt="preload" />
      <img :src="'./images/S3.png'" alt="preload" />
      <img :src="'./images/S4.png'" alt="preload" />
      <img :src="'./images/S5.png'" alt="preload" />
      <img :src="'./images/S6.png'" alt="preload" />
      <img :src="'./images/S7.png'" alt="preload" />
      <img :src="'./images/S8.png'" alt="preload" />
      <img :src="'./images/S9.png'" alt="preload" />
      <img :src="'./images/S10.png'" alt="preload" />
      <img :src="'./images/SA.png'" alt="preload" />
      <img :src="'./images/SJ.png'" alt="preload" />
      <img :src="'./images/SK.png'" alt="preload" />
      <img :src="'./images/SQ.png'" alt="preload" />
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

@keyframes appear {
  0% {
    opacity: 0;
  }
}

@media (max-width: 599px) {
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 24px;
  }
}

.d-none {
  display: none;
}
</style>
