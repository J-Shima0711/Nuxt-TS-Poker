<template>
  <div class="back-ground">
    <game-board></game-board>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameBoard from '~/components/organisms/GameBoard.vue'

export default Vue.extend({
  components: {
    GameBoard,
  },
  data() {
    return {
      text: '' as string,
    }
  },
  created() {
    this.text = 'a'
  },
})
</script>

<style>
.back-ground {
  background-image: url('~assets/body.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
