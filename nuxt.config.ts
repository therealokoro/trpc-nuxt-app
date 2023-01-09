import SVGLoader from "vite-svg-loader"
import Components from "unplugin-vue-components/vite"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"

export default defineNuxtConfig({
  srcDir: "./client",

  serverDir: "./server",

  css: ["~/assets/styles/base.scss"],

  modules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt", "@nuxtjs/color-mode", "@nuxt/image-edge"],

  build: { transpile: ["element-plus/es", "@headlessui/vue", "trpc-nuxt"] },

  imports: { dirs: ["stores"], presets: ["pinia"] },

  typescript: { strict: true, shim: false },

  app: { pageTransition: { name: "page", mode: "out-in" } },

  unocss: { preflight: true },

  colorMode: { classSuffix: "" },

  vite: {
    plugins: [
      SVGLoader(),
      Components({
        dts: true,
        resolvers: [HeadlessUiResolver()]
      })
    ]
  }
})
