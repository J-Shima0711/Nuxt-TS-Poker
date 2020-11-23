<template>
  <div class="card-area" :class="{ selected }" @click="toggleSelect">
    <img class="card-img" :src="cardImage" alt="カード" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
// import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { Card } from '~/entities/CardIF'
import { GameStatus, Owner } from '~/entities/GameBoard'
// import { UserTypes } form '@/types/user'

export default Vue.extend({
  props: {
    card: {
      type: Object,
      required: true,
    } as PropOptions<Card>,
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
      visible: false,
      selected: false,
      selectable: false,
    }
  },
  computed: {
    cardImage(): string {
      return this.visible
        ? `/images/${this.card.suit}${this.card.label}.png`
        : '/images/back.png'
    },
  },
  created() {
    // initialize
    if (this.owner === 'PLAYER') {
      this.visible = true
      this.selectable = true
    }
  },
  methods: {
    toggleSelect(): void {
      if (!this.selectable || this.gameStatus !== 'EXCHANGE_TIME') return
      this.selected = !this.selected
    },
    showCard(): void {
      this.visible = true
    },
    hideCard(): void {
      this.visible = false
    },
  },
})
</script>

<style>
.card-area {
  display: inline-block;
  padding: 10px;
}
.card-img {
  width: 80px;
  height: 120px;
}
.selected {
  background-color: lightgreen;
}
</style>
