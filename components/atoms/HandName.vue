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
  color: #f9cd0b;
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
