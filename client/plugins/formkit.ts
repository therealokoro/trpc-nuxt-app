import { plugin, defaultConfig } from "@formkit/vue"
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(plugin, defaultConfig)
})
