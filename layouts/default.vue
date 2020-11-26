<template>
  <div>
    <Nuxt />
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.d-none {
  display: none;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.8s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
