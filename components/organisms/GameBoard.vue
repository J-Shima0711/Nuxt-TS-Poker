<template>
  <div class="frame">
    <div class="board">
      <player-hand />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlayerHand from '~/components/molecules/PlayersHand.vue'

export default Vue.extend({
  components: {
    PlayerHand,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.deck.deal(5))
  },
  methods: {},
})
</script>

<style>
.frame {
  background-image: url('/images/wood.jpg');
  width: 560px;
  padding: 20px;
  box-sizing: border-box;
}
.board {
  width: 520px;
  padding: 5px;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url('/images/board.jpg');
}
</style>
