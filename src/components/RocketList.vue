<template>
  <ul>
    <li v-for="rocket in rockets" :key="rocket.id">
      <router-link :to="{ name: 'Rocket', params: { id: rocket.id } }">
        <h2>🚀 {{ rocket.name }}</h2>
      </router-link>
    </li>
  </ul>
</template>
<script>
import { GET_ROCKETS } from '../queries'

export default {
  apollo: {
    rockets: {
      query: GET_ROCKETS,
    },
  },
}
</script>
