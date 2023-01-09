<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <div>
    <p>Not found</p>
    <button btn text-sm m="3 t8" @click="router.back()">Back</button>
  </div>
</template>
