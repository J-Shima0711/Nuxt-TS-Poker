<template>
  <div class="hand-name"><slot></slot></div>
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
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
