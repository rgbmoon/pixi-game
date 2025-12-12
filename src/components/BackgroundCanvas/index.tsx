import { useEffect, useRef } from 'react'

import { backgroundStore } from 'src/stores/background-store'

export const BackgroundCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = containerRef.current
    if (element && !backgroundStore.isMounted) {
      backgroundStore.mount(element)
    }

    return () => {
      backgroundStore.unmount()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
