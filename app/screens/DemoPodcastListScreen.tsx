import { Screen } from "@/components"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { $styles } from "../theme"

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"DemoPodcastList">> = observer(
  function DemoPodcastListScreen(_props) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$styles.flex1}></Screen>
    )
  },
)
