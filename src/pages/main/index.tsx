import { BackgroundCanvas } from 'src/components/BackgroundCanvas'
import { Button } from 'src/components/Button'

export const MainPage = () => {
  return (
    <div className="relative h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center p-6 gap-20">
      <div className="absolute inset-0 -z-10">
        <BackgroundCanvas />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl text-center font-extralight">
          Добро пожаловать в <span className="text-[#a98fc3]">Pixi</span> <span className="text-[#6ec3a7]">Game</span>
        </h1>
        <p className="text-xl text-center font-extralight">
          Эту игру делают два энтузиаста с целью лучше изучить Pixi.js и веб гейм-дев в целом
          <br />
          Надеюсь, вам понравится
        </p>
      </div>
      <Button link href="/game">
        Играть
      </Button>
    </div>
  )
}
