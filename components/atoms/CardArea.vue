<template>
  <div class="card-area" :class="{ selected }">
    <div
      class="card-img"
      :class="[cardName, { selectable }]"
      @click="onClick"
    />
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
    // cardImage(): string {
    //   return this.visible
    //     ? `./images/${this.card.suit}${this.card.label}.png`
    //     : './images/back.png'
    // },
    cardName(): string {
      return this.visible
        ? `${this.card.suit.toLowerCase()}${this.card.label.toLowerCase()}`
        : 'back'
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

<style lang="scss">
.card-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 140px;
  transition: 0.1s;
  &.selected {
    background-color: rgba(144, 238, 144, 0.5);
  }
}
.card-img {
  width: 80px;
  height: 120px;
  background-size: 80px 120px;
  transition: all 0.1s ease 0s;
  animation: 0.3s appear;
  &.selectable:hover {
    cursor: pointer;
    width: 88px;
    height: 128px;
    background-size: 88px 128px;
  }
  @each $card, $value in $cards {
    &.#{$card} {
      background-image: url(#{$value});
    }
  }
}
</style>
