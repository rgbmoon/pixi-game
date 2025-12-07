import { StrictMode } from 'react'

import { Canvas } from '../components/Canvas'

export const App = () => {
  return (
    <StrictMode>
      <div className="flex items-center justify-center w-screen h-screen">
        <Canvas />
      </div>
    </StrictMode>
  )
}
