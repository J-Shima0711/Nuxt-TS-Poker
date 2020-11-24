<template>
  <div class="result-display" :class="result"></div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ResultBox } from '~/entities/Result'

export default Vue.extend({
  // export
  props: {
    result: {
      type: Object,
      required: true,
    } as PropOptions<ResultBox>,
  },
})
</script>

<style>
.result-display {
  font-family: 'Abril Fatface', cursive;
  font-size: 0;
  text-shadow: 3px 3px 3px #000000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.2s appear;
}
.win:before {
  font-size: 62px;
  content: 'WIN';
  color: #f9cd0b;
}
.lose:before {
  font-size: 62px;
  content: 'LOSE';
  color: #33ffff;
}
.draw:before {
  font-size: 62px;
  content: 'DRAW';
  color: #00ff99;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
