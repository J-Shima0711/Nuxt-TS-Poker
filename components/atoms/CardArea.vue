<template>
  <div class="card-area" :class="{ selected }">
    <img
      class="card-img"
      :class="{ selectable }"
      :src="cardImage"
      alt="カード"
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 140px;
}
.card-img {
  width: 80px;
  height: 120px;
  transition: all 0.1s ease 0s;
  animation: 0.3s appear;
}
img.selectable:hover {
  cursor: pointer;
  width: 88px;
  height: 128px;
}
.selected {
  background-color: rgba(144, 238, 144, 0.5);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
