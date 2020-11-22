<template>
  <div class="hand">
    <one-card />
    <one-card />
    <one-card />
    <one-card />
    <one-card />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import OneCard from '~/components/atoms/OneCard.vue'

export default Vue.extend({
  components: {
    OneCard,
  },
})
</script>
