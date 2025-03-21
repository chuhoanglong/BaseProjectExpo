// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform, StyleSheet } from "react-native"
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

import {
  Nunito_400Regular as nunitoRegular,
  Nunito_700Bold as nunitoBold,
  Nunito_800ExtraBold as nunitoExtraBold,
  Nunito_900Black as nunitoBlack,
} from "@expo-google-fonts/nunito"

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,

  nunitoRegular,
  nunitoBold,
  nunitoExtraBold,
  nunitoBlack,
}

const fonts = {
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
  nunito: {
    // Cross-platform Google font.
    regular: "nunitoRegular",
    bold: "nunitoBold",
    extraBold: "nunitoExtraBold",
    black: "nunitoBlack",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.spaceGrotesk,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}

export const Typography = StyleSheet.create({
  // Default text styles
  Nunito12_400: {
    fontSize: 12,
    fontFamily: fonts.monospace.normal,
    lineHeight: 16,
  },
})

export type TypographyKeys = keyof typeof Typography
