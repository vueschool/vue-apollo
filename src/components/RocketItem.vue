<template>
  <div v-if="rocket">
    <h2>🚀 {{ rocket.name }}</h2>
    <h3>{{ rocket.description }}</h3>
    <h3>$ {{ rocket.costPerLaunch }}</h3>
  </div>
</template>
<script>
import { GET_ROCKET } from '../queries'

export default {
  apollo: {
    rocket: {
      query: GET_ROCKET,
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
