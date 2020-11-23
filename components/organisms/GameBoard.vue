<template>
  <div class="frame">
    <div class="board">
      <hand-area
        :cards="cpuHand"
        :owner="gameBoard.owner.cpu"
        :game-status="gameBoard.status"
      />
      <hand-area
        :cards="playerHand"
        :owner="gameBoard.owner.player"
        :game-status="gameBoard.status"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HandArea from '~/components/molecules/HandArea.vue'
import { Card } from '~/entities/CardIF'
import { GameBoard } from '~/entities/GameBoard'
import { Hand } from '~/entities/hands/Hand'

export default Vue.extend({
  components: {
    HandArea,
  },
  data() {
    return {
      gameBoard: null as GameBoard | null,
      cpuHand: null as Card[] | null,
      playerHand: null as Card[] | null,
    }
  },
  computed: {
    handOfCPU(): Hand | null {
      if (this.cpuHand != null && this.gameBoard != null) {
        return this.gameBoard.makeHand(this.cpuHand)
      }
      return null
    },
    handOfPlayer(): Hand | null {
      if (this.playerHand != null && this.gameBoard != null) {
        return this.gameBoard.makeHand(this.playerHand)
      }
      return null
    },
  },
  created() {
    this.initialize()
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.handOfCPU, this.handOfPlayer)
  },
  methods: {
    initialize() {
      this.gameBoard = new GameBoard()
      console.log(this.gameBoard.status)
      this.cpuHand = this.gameBoard.dealCard(5)
      this.playerHand = this.gameBoard.dealCard(5)
      this.gameBoard.progressGame()
      console.log(this.gameBoard.status)
    },
  },
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
