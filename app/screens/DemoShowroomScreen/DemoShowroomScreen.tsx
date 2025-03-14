import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { FC, useEffect, useRef } from "react"
import { View, ViewStyle } from "react-native"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { I18Text, Screen, Text } from "@components"
import { AppImageSvg } from "@/components/ImageSvg"
import ArrowLeft from "../../assets/svgs/arrow-left.svg"

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    const { themed, theme } = useAppTheme()

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <AppImageSvg type="ArrowLeft" size={25} />
        <View style={themed($heading)}>
          <I18Text tx="auth:enterPhone" color={theme.colors.text} />
          <Text tx="auth:enterPhone" />
        </View>
      </Screen>
    )
  }

const $heading: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.xxxl,
})
