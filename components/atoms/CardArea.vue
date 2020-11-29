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
$card-width: 80px;
$card-height: 120px;
$card-width-sp: 60px;
$card-height-sp: 90px;

.card-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $card-width + 20;
  height: $card-height + 20;
  transition: 0.1s;
  &.selected {
    background-color: rgba(144, 238, 144, 0.5);
  }
}
.card-img {
  width: $card-width;
  height: $card-height;
  background-size: 100% 100%;
  transition: all 0.1s ease 0s;
  animation: 0.3s appear;
  &.selectable:hover {
    cursor: pointer;
    width: $card-width + 8;
    height: $card-height + 8;
  }
  @each $card, $value in $cards {
    &.#{$card} {
      background-image: url(#{$value});
    }
  }
}

@media (max-width: 959px) {
  .card-img {
    &.selectable:hover {
      width: $card-width;
      height: $card-height;
    }
  }
}

@media (max-width: 599px) {
  .card-area {
    width: $card-width-sp + 15;
    height: $card-height-sp + 15;
  }
  .card-img {
    width: $card-width-sp;
    height: $card-height-sp;
    &.selectable:hover {
      width: $card-width-sp;
      height: $card-height-sp;
    }
  }
}
</style>
