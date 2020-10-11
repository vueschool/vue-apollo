<template>
  <form @submit.prevent="submit">
    <fieldset>
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="text" placeholder="Twitter" v-model="twitter" required />
      <select v-model="rocket" required>
        <option :selected="true" :value="null">Choose Rocket</option>
        <option
          v-for="name in ['Falcon 1', 'Falcon 9', 'Falcon Heavy']"
          :value="name"
          :key="name"
        >
          {{ name }}
        </option>
      </select>
      <input type="submit" value="Send" />
    </fieldset>
  </form>
</template>
<script>
import uuidv4 from 'uuid/v4'
import { INSERT_USER } from '../mutations'
export default {
  data() {
    return {
      name: '',
      twitter: '',
      rocket: ''
    }
  },
  methods: {
    submit() {
      const { name, twitter, rocket } = this.$data
      const id = uuidv4()
      this.$apollo.mutate({
        mutation: INSERT_USER,
        variables: {
          id,
          name,
          twitter,
          rocket
        }
      })
    }
  }
}
</script>
