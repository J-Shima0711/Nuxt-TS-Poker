<template>
  <a class="base-button" @click="onClick"><slot>Button</slot></a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    onClick(idx: number): void {
      this.$emit('click', idx)
    },
  },
})
</script>

<style>
.base-button {
  font-family: 'Abril Fatface', cursive;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.1s ease 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  animation: 0.1s appear;
}
a.base-button:hover {
  text-shadow: 2px 2px 3px #000000;
  opacity: 1;
  font-size: 30px;
}
</style>
