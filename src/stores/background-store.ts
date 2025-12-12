import { makeAutoObservable } from 'mobx'
import { Application, Filter, Graphics } from 'pixi.js'
import deformFrag from 'src/assets/shaders/deform.frag?raw'
import gradientFrag from 'src/assets/shaders/gradient.frag?raw'
import vertex from 'src/assets/shaders/vertex.frag?raw'

// TODO нагенерил какого то говна нейронками
// Вроде все запускается, но в шейдерах есть ошибки, надо бы проверить и поправить

export class BackgroundStore {
  pixiApp: Application | null = null
  isMounted = false

  private gradientFilter: Filter | null = null

  private deformFilter: Filter | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async mount(container: HTMLElement) {
    if (this.isMounted) {
      return
    }

    this.pixiApp = new Application()

    await this.pixiApp.init({
      background: '#475569',
      resizeTo: container,
      canvas: container.appendChild(document.createElement('canvas')),
    })

    this.initializeGradient()
    this.initializeDeform()
    this.addBackgroundQuad()
    this.startGame()
    this.isMounted = true
  }

  unmount() {
    if (!this.isMounted) return

    if (this.pixiApp) {
      this.pixiApp.destroy(true, { children: true })
      this.pixiApp = null
    }

    this.isMounted = false
  }

  private initializeGradient() {
    if (!this.pixiApp) return

    this.gradientFilter = new Filter({
      glProgram: {
        vertex,
        fragment: gradientFrag,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      resources: {
        uniforms: {
          uTime: { value: 0, type: 'f32' },
          uResolution: { value: [window.innerWidth, window.innerHeight], type: 'vec2<f32>' },
        },
      },
    })
  }

  private initializeDeform() {
    if (!this.pixiApp) return

    this.deformFilter = new Filter({
      glProgram: {
        vertex,
        fragment: deformFrag,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      resources: {
        uniforms: {
          uTime: { value: 0, type: 'f32' },
          uResolution: { value: [window.innerWidth, window.innerHeight], type: 'vec2<f32>' },
        },
      },
    })
  }

  private addBackgroundQuad() {
    if (!this.pixiApp || !this.gradientFilter || !this.deformFilter) return

    const g = new Graphics().rect(0, 0, window.innerWidth, window.innerHeight).fill(0xffffff)

    g.filters = [this.gradientFilter, this.deformFilter]

    this.pixiApp.stage.addChild(g)
  }

  private animateBackground() {
    const t = performance.now() * 0.001

    if (this.gradientFilter) {
      this.gradientFilter.resources.uniforms.uniforms.uTime = t
    }

    if (this.deformFilter) {
      this.deformFilter.resources.uniforms.uniforms.uTime = t
    }
  }

  private startGame() {
    if (!this.pixiApp?.ticker) return

    this.pixiApp.ticker.add(this.gameLoop)
  }

  private gameLoop = () => {
    this.animateBackground()
  }
}

export const backgroundStore = new BackgroundStore()
