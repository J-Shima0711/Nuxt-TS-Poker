<template>
  <div class="card-area" :class="{ selected }">
    <img class="card-img" :src="cardImage" alt="カード" @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Card } from '~/entities/CardIF'

export default Vue.extend({
  props: {
    card: {
      type: Object,
      required: true,
    } as PropOptions<Card>,
    visible: {
      type: Boolean,
      required: true,
    },
    selectable: {
      type: Boolean,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    cardImage(): string {
      return this.visible
        ? `/images/${this.card.suit}${this.card.label}.png`
        : '/images/back.png'
    },
  },
  methods: {
    onClick(): void {
      if (this.selectable) {
        this.$emit('click')
      }
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
