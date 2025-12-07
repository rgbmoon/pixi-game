import { rootStore } from '../../stores/root'

export const Canvas = () => {
  return (
    <div
      ref={(element: HTMLDivElement | null) => {
        if (element) {
          rootStore.mount(element)
        }
      }}
      className="w-full h-full"
    />
  )
}
