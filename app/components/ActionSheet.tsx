import { colors, typography } from "@theme"
import { isEqual } from "lodash"
import React from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { I18Text } from "./I18Text"

export type OptionsT = string[]

export type DestructiveButtonIndexT = number

export type CancelButtonIndexT = number

export type DescriptionIndex = number

export type CallbackT = (index: number) => void

const ActionSheet = ({
  isVisible,
  options,
  destructiveButtonIndex,
  cancelButtonIndex,
  descriptionIndex,
  onClose,
  onSelect,
}: {
  isVisible: boolean
  options: OptionsT
  destructiveButtonIndex: DestructiveButtonIndexT
  cancelButtonIndex: CancelButtonIndexT
  descriptionIndex?: DescriptionIndex
  onClose: () => void
  onSelect: CallbackT
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        {options.map((option, index) => {
          if (index === cancelButtonIndex) return null
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                {
                  borderBottomWidth: 0.5,
                  borderBottomColor:
                    index === options.length - 1 ? "transparent" : "rgba(0, 0, 0, 0.3)",
                },
              ]}
              onPress={() => onSelect(index)}
              disabled={index === descriptionIndex}
            >
              <I18Text
                style={[
                  styles.text,
                  index === destructiveButtonIndex && styles.destructiveText,
                  index === descriptionIndex && styles.descriptionText,
                ]}
              >
                {option}
              </I18Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.cancelContainer}>
        <TouchableOpacity style={styles.option} onPress={() => onSelect(cancelButtonIndex)}>
          <I18Text style={[styles.text, styles.cancelText]}>{options[cancelButtonIndex]}</I18Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  cancelContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    marginBottom: Platform.OS === "ios" ? 20 : 10,
  },
  option: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: colors.text,
    fontFamily: typography.primary.normal,
  },
  destructiveText: {
    color: colors.error,
    fontFamily: typography.primary.normal,
  },
  descriptionText: {
    color: colors.text,
    fontFamily: typography.primary.normal,
  },
  cancelText: {
    color: colors.text,
    fontFamily: typography.primary.normal,
  },
})

export default React.memo(ActionSheet, isEqual)
