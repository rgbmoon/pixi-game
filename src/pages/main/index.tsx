import mainPageBg from 'src/assets/icons/main-page-bg.svg?url'
import { Button } from 'src/components/Button'

export const MainPage = () => {
  return (
    <div
      className="h-full flex flex-col items-center justify-center p-6 gap-20"
      style={{ background: `url("${mainPageBg}") repeat-x center/auto 100%` }}
    >
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
