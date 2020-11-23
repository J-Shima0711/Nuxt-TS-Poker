<template>
  <div class="result-display"><slot>WIN</slot></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // export
})
</script>

<style>
.result-display {
  font-family: 'Abril Fatface', cursive;
  font-size: 62px;
  color: #f9cd0b;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
