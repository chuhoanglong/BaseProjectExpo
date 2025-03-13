import { SvgTypes } from "@assets"
import React from "react"
import * as Svgs from "@assets" // Import all SVGs as an object

interface IProps {
  type: SvgTypes
  color?: string
  width?: number
  height?: number
  style?: any
  stroke?: string
  size?: number
}

export const AppImageSvg = (props: IProps) => {
  const { type, color, width, height, style, stroke, size } = props
  const Svg = Svgs.svgRegistry[type] // Map type to the imported SVG component

  if (!Svg) {
    console.error(`SVG not found for type: ${type}`)
    return null
  }

  return (
    <Svg width={width || size} height={height || size} fill={color} stroke={stroke} style={style} />
  )
}
