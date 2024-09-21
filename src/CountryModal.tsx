import * as React from 'react'
import { ModalProps, Platform, SafeAreaView, StyleSheet } from 'react-native'
import { AnimatedModal } from './AnimatedModal'
import { CountryModalContext } from './CountryModalProvider'
import { useTheme } from './CountryTheme'
import { Modal } from './Modal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const CountryModal = ({
  children,
  withModal = true,
  animated = true,
  animationType = 'slide',
  disableNativeModal,
  ...props
}: ModalProps & {
  children: React.ReactNode
  withModal?: boolean
  disableNativeModal?: boolean
}) => {
  const { backgroundColor } = useTheme()
  const { teleport } = React.useContext(CountryModalContext)
  const content = (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {children}
    </SafeAreaView>
  )

  React.useEffect(() => {
    if (disableNativeModal) {
      teleport!(<AnimatedModal {...props}>{content}</AnimatedModal>)
    }
  }, [disableNativeModal])
  
  if (withModal) {
    if (disableNativeModal && Platform.OS !== 'web') return null

    return <Modal animated={animated} animationType={animationType} {...props}>{content}</Modal>
  }

  return content
}


