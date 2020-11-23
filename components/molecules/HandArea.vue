<template>
  <div class="hand-area">
    <card-area
      v-for="card in cards"
      :key="card.suit + card.label"
      :card="card"
      :owner="owner"
      :game-status="gameStatus"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import CardArea from '~/components/atoms/CardArea.vue'
import { Card } from '~/entities/CardIF'
import { GameStatus, Owner } from '~/entities/GameBoard'

export default Vue.extend({
  components: {
    CardArea,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    } as PropOptions<Card[]>,
    owner: {
      type: String,
      required: true,
    } as PropOptions<Owner>,
    gameStatus: {
      type: String,
      required: true,
    } as PropOptions<GameStatus>,
  },
  data() {
    return {
      selectedCards: [] as Card[],
    }
  },
  methods: {},
})
</script>
