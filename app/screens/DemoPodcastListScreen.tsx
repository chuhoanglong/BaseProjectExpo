import { Screen, Text } from "@/components"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { $styles } from "../theme"
import { CalendarBody, CalendarContainer, CalendarHeader, PackedEvent } from "@howljs/calendar-kit"
import { View } from "react-native"
import { AppImageSvg } from "@/components/ImageSvg"

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"DemoPodcastList">> = observer(
  function DemoPodcastListScreen(_props) {
    const renderEvent = useCallback(
      (event: PackedEvent) => (
        <View
          style={{
            width: "100%",
            height: "100%",
            padding: 4,
          }}
        >
          <AppImageSvg type="ArrowLeft" size={24} />
          <Text style={{ color: "white", fontSize: 10 }}>{event.title}</Text>
        </View>
      ),
      [],
    )

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$styles.flex1}>
        <CalendarContainer
          numberOfDays={7}
          events={[
            {
              id: "1",
              title: "Meeting with Team",
              start: { dateTime: "2025-03-14T10:00:00Z" },
              end: { dateTime: "2025-03-14T11:00:00Z" },
              color: "#4285F4",
            },
            {
              id: "2",
              title: "Conference",
              start: { dateTime: "2025-03-12T00:00:00", timeZone: "America/New_York" },
              end: { dateTime: "2025-03-13T00:00:00", timeZone: "America/New_York" },
              color: "#34A853",
            },
            {
              id: "3",
              title: "Company Holiday",
              start: { date: "2025-03-12" },
              end: { date: "2025-03-12" },
              color: "#FBBC05",
            },
            {
              id: "4",
              title: "Annual Leave",
              start: { date: "2025-03-18" },
              end: { date: "2025-03-22" },
              color: "#EA4335",
            },
          ]}
        >
          <CalendarHeader />
          <CalendarBody renderEvent={renderEvent} />
        </CalendarContainer>
      </Screen>
    )
  },
)
