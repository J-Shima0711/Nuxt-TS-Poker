<template>
  <img class="card" :src="cardImage" alt="カード" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
// import { UserTypes } form '@/types/user'

export default Vue.extend({
  data() {
    return {
      card: {
        suit: 'S',
        label: 'A',
        rank: '14',
        visible: true,
        selected: false,
      },
    }
  },
  computed: {
    cardImage(): string {
      return this.card.visible
        ? `/images/${this.card.suit}${this.card.label}.png`
        : '/images/back.png'
    },
  },
})
</script>

<style>
.card {
  width: 80px;
  height: 120px;
}
.selected {
}
</style>
