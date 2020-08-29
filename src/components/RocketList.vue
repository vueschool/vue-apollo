<template>
    <ul>
        <li v-for="rocket in rockets" :key="rocket.id">
            <h2>{{rocket.name}}</h2>
            <h3>{{rocket.description}}</h3>
            <h3>$ {{rocket.costPerLaunch }}</h3>
        </li>
    </ul>
</template>
<script>
import gql from "graphql-tag"

const query = gql`
query getRockets {
  rockets {
    id
    name
    description
    costPerLaunch: cost_per_launch
  }
}`

export default {
    apollo: {
        rockets: {
            query
        }
    }
}
</script>