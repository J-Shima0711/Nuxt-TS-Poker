<template>
  <game-board></game-board>
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

<style></style>
