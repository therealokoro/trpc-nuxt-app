<script setup lang="ts">
const { $client } = useNuxtApp()
const user = ref()
async function query() {
  const { data, error } = await $client.auth.getUser.useQuery({ id: 2 })
  console.log(error.value)
  user.value = data.value
}
</script>

<template>
  <div class="dark">
    <div class="p-10 bg-primary/40">
      <h1>Hello</h1>
      <ui-button @click="query">Click</ui-button>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>
