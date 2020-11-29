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

<style lang="scss">
.base-button {
  display: inline-block;
  width: 200px;
  height: 40px;
  font-size: 25px;
  font-family: 'Abril Fatface', cursive;
  text-shadow: 2px 2px 3px #000000;
  text-align: center;
  color: #ffffff;
  background: #ee0000; /*色*/
  border-radius: 20px; /*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5),
    inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  border: solid 2px #d27d00; /*線色*/
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  animation: 0.1s appear;
  transition: all 0.1s ease 0s;
  &:active:not(.disabled) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    text-shadow: 1px 1px 2px #000000;
  }
  &:hover:not(.disabled) {
    background: #ff0000;
    cursor: pointer;
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

@media (max-width: 959px) {
  .base-button {
    background: #ff0000;
  }
}
</style>
