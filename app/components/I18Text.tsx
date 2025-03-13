import { useAppTheme } from "@/utils/useAppTheme"
import { useTranslationContext } from "@contexts"
import { isRTL, TranslateOptions, TxKeyPath } from "@i18n"
import { colors, ThemedStyle, typography, Typography, TypographyKeys } from "@theme"
import React, { forwardRef } from "react"
import {
  ColorValue,
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native"

export type TextSizes = keyof typeof $sizeStyles

const FONTS = typography.primary

export type TextWeights = keyof typeof FONTS

export interface I18TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * Text weight modifier.
   */
  weight?: TextWeights
  /**
   * Text size modifier.
   */
  size?: TextSizes | number
  /**
   * Line height modifier.
   */
  lh?: number | undefined
  /**
   * Typography styles.
   */
  typography?: TypographyKeys

  /**
   * Children components.
   */
  color?: ColorValue
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined
  centerVertical?: boolean
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export const I18Text = forwardRef<RNText, I18TextProps>((props: I18TextProps, ref) => {
  const {
    weight,
    size,
    lh,
    tx,
    align,
    centerVertical,
    txOptions,
    text,
    typography,
    children,
    style: $styleOverride,
    ...rest
  } = props
  const { translator } = useTranslationContext()
  const { themed } = useAppTheme()

  const i18nText = tx && translator(tx, txOptions)
  const content = i18nText ?? text ?? children

  const $styles: StyleProp<TextStyle> = [
    themed($baseStyle),
    $rtlStyle,
    weight ? $fontWeightStyles[weight] : $fontWeightStyles.normal,
    // use Typography styles if size is a string
    typography ? Typography[typography] : {},
    size !== undefined &&
      (typeof size === "number"
        ? { fontSize: size - 1 }
        : ({
            fontSize: $sizeStyles[size as TextSizes].fontSize,
          } as TextStyle)),
    align && { textAlign: align },
    lh !== undefined && typeof lh === "number" && { lineHeight: lh },
    centerVertical && { textAlignVertical: "center" },
    { color: colors.text }, // ko có color trong style hoặc props thì mặc định là text
    $styleOverride,
    props.color ? { color: props.color } : {},
  ]

  return (
    <RNText allowFontScaling={false} {...rest} ref={ref} style={$styles}>
      {content}
    </RNText>
  )
})

export const $sizeStyles = {
  /**
   * xxl: size: 36
   */
  xxl: { fontSize: 36 } satisfies TextStyle,
  /**
   * custom28: size: 28
   */
  custom28: { fontSize: 28 } satisfies TextStyle,
  /**
   * xl: size: 24
   */
  xl: { fontSize: 24 } satisfies TextStyle,
  /**
   * lg: size: 20
   */
  lg: { fontSize: 20 } satisfies TextStyle,
  /**
   * md: size: 18
   */
  md: { fontSize: 18 } satisfies TextStyle,
  /**
   * sm: size: 16
   */
  sm: { fontSize: 16 } satisfies TextStyle,
  /**
   * xs: size: 14
   */
  xs: { fontSize: 14 } satisfies TextStyle,
  /**
   * xxs: size: 12, line height: 18
   */
  xxs: { fontSize: 12 } satisfies TextStyle,
}

const $fontWeightStyles = Object.entries(FONTS).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<TextWeights, TextStyle>

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}

const $baseStyle: ThemedStyle<TextStyle> = (theme) => ({
  ...$sizeStyles.sm,
  ...$fontWeightStyles.normal,
  color: theme.colors.text,
})
