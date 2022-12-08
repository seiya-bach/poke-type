/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toPropValue, Color, Space } from 'utils/styles'

export type BoxProps = {
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.color, props.theme)}
  ${(props) => toPropValue('width', props.color, props.theme)}
  ${(props) => toPropValue('height', props.color, props.theme)}
  ${(props) => toPropValue('min-width', props.color, props.theme)}
  ${(props) => toPropValue('min-height', props.color, props.theme)}
  ${(props) => toPropValue('display', props.color, props.theme)}
  ${(props) => toPropValue('border', props.color, props.theme)}
  ${(props) => toPropValue('overflow', props.color, props.theme)}
  ${(props) => toPropValue('margin', props.color, props.theme)}
  ${(props) => toPropValue('margin-top', props.color, props.theme)}
  ${(props) => toPropValue('margin-left', props.color, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.color, props.theme)}
  ${(props) => toPropValue('margin-right', props.color, props.theme)}
  ${(props) => toPropValue('padding', props.color, props.theme)}
  ${(props) => toPropValue('padding-top', props.color, props.theme)}
  ${(props) => toPropValue('padding-left', props.color, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.color, props.theme)}
  ${(props) => toPropValue('padding-right', props.color, props.theme)}
`

export default Box