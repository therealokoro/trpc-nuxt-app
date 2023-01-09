import { presetForms } from "@julr/unocss-preset-forms"
import type { Theme } from "unocss/preset-uno"
import presetTheme from "unocss-preset-theme"
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "unocss"

export default defineConfig<Theme>({
  theme: {
    colors: {
      primary: "#002147"
    }
  },
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetForms(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: {
            primary: "#cca123"
          }
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
