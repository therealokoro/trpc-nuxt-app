<script setup lang="ts">
useHead({
  titleTemplate: (t: any) => (t ? `${t} | Attenda` : "Attenda"),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
})
</script>

<template>
  <Html lang="en">
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator color="#2194F2" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
