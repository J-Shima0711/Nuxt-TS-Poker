<template>
  <div class="hand-name" :class="gradeOfHand"><slot></slot></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    handLevel: {
      type: Number,
      required: true,
    },
  },
  computed: {
    gradeOfHand() {
      return {
        low: this.handLevel < 3,
        middle: this.handLevel >= 3 && this.handLevel < 6,
        high: this.handLevel >= 6,
      }
    },
  },
})
</script>

<style>
.hand-name {
  font-family: 'Abril Fatface', cursive;
  font-size: 48px;
  text-shadow: 2px 2px 3px #000000;
  color: #f9cd0b;
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
  animation: 0.2s appear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.low {
  color: #66ff66;
}

.middle {
  color: #ffcc33;
}

.high {
  color: #ffff33;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
