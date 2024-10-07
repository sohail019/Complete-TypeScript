import React from 'react'
import { useWindowWidth } from './useWindowWidth'

export const WindowWidthComponent: React.FC = () => {
    const width = useWindowWidth({refreshInterval: 1000});
  return (
    <p>Window Width: {width}px</p>
  )
}
