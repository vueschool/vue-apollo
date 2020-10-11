<template>
  <div>
    <user-form />
    <user-list />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import UserForm from '@/components/UserForm.vue'
export default {
  components: {
    UserList,
    UserForm
  }
}
</script>
