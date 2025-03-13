import ActionSheet from "@/components/ActionSheet"
import {
  CallbackT,
  CancelButtonIndexT,
  DescriptionIndex,
  DestructiveButtonIndexT,
  OptionsT,
} from "@components"
import { isEqual } from "lodash"
import React, { PropsWithChildren, useState } from "react"
type ActionSheetContextT = {
  options: OptionsT
  destructiveButtonIndex: DestructiveButtonIndexT
  cancelButtonIndex: CancelButtonIndexT
  descriptionIndex?: DescriptionIndex
}

const ActionSheetContext = React.createContext({
  showActionSheetWithOptions: (
    { options, destructiveButtonIndex, cancelButtonIndex, descriptionIndex }: ActionSheetContextT,
    callback: CallbackT,
  ) => {},
})

const ActionSheetCustomProvider = ({ children }: PropsWithChildren) => {
  const [isActionSheetVisible, setActionSheetVisible] = useState(false)
  const [options, setOptions] = useState<OptionsT>([])
  const [destructiveButtonIndex, setDestructiveButtonIndex] = useState<DestructiveButtonIndexT>()
  const [cancelButtonIndex, setCancelButtonIndex] = useState<CancelButtonIndexT>()
  const [descriptionIndex, setDescriptionIndex] = useState<DescriptionIndex>()
  const [callback, setCallback] = useState<CallbackT>()

  const showActionSheet = React.useCallback(
    (
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        descriptionIndex,
      }: {
        options: OptionsT
        destructiveButtonIndex: DestructiveButtonIndexT
        cancelButtonIndex: CancelButtonIndexT
        descriptionIndex?: DescriptionIndex
      },
      callback: CallbackT,
    ) => {
      setOptions(options)
      setDestructiveButtonIndex(destructiveButtonIndex)
      setCancelButtonIndex(cancelButtonIndex)
      setDescriptionIndex(descriptionIndex)
      setCallback(() => callback)
      setActionSheetVisible(true)
    },
    [],
  )

  const handleSelect = React.useCallback(
    (index: number) => {
      setActionSheetVisible(false)
      setTimeout(() => {
        if (callback) callback(index)
      }, 350)
    },
    [callback],
  )

  return (
    <ActionSheetContext.Provider
      value={{
        showActionSheetWithOptions: showActionSheet,
      }}
    >
      {children}
      <ActionSheet
        isVisible={isActionSheetVisible}
        options={options}
        destructiveButtonIndex={destructiveButtonIndex ?? 0}
        cancelButtonIndex={cancelButtonIndex ?? 0}
        descriptionIndex={descriptionIndex}
        onClose={() => setActionSheetVisible(false)}
        onSelect={handleSelect}
      />
    </ActionSheetContext.Provider>
  )
}

export const useActionSheet = () => React.useContext(ActionSheetContext)

export default React.memo(ActionSheetCustomProvider, isEqual)
