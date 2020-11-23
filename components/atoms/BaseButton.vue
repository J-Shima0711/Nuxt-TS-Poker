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
  margin: 0 auto;
}
</style>
