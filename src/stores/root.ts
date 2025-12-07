import { makeAutoObservable } from 'mobx'
import { Application, type Ticker } from 'pixi.js'

export class RootStore {
  pixiApp: Application | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async mount(container: HTMLElement) {
    if (this.pixiApp) {
      return
    }

    this.pixiApp = new Application()

    await this.pixiApp.init({
      background: '#1099bb',
      resizeTo: container,
    })

    container.appendChild(this.pixiApp.canvas)

    this.startGame()
  }

  unmount() {
    if (this.pixiApp) {
      this.pixiApp.destroy(true, { children: true })
      this.pixiApp = null
    }
  }

  private startGame() {
    if (!this.pixiApp) return

    this.pixiApp.ticker.add(this.gameLoop)
  }

  private gameLoop = (_ticker: Ticker) => {
  }
}

export const rootStore = new RootStore()
