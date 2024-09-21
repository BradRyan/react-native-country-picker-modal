import React from 'react'
import { Platform, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export type CountryFilterProps = TextInputProps

export const CountryFilter = ({placeholder = 'Enter country name', ...props}: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
  } = useTheme()
  return (
    <TextInput
      testID='text-input-country-filter'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      placeholder={placeholder}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor },
      ]}
      {...props}
    />
  )
}