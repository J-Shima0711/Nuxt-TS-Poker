<template>
  <div class="hand-area">
    <card-area
      v-for="(card, idx) in cards"
      :key="card.suit + card.label"
      :card="card"
      :visible="visible"
      :selectable="selectable"
      :selected="selectedStates[idx]"
      @click="propagationClick(idx)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import CardArea from '~/components/atoms/CardArea.vue'
import { Card } from '~/entities/CardIF'

export default Vue.extend({
  components: {
    CardArea,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    } as PropOptions<Card[]>,
    visible: {
      type: Boolean,
      required: true,
    },
    selectable: {
      type: Boolean,
      required: true,
    },
    selectedStates: {
      type: Array,
      required: true,
    } as PropOptions<Boolean[]>,
  },
  methods: {
    propagationClick(idx: number): void {
      this.$emit('toggleSelect', idx)
    },
  },
})
</script>
