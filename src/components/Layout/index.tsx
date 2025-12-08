import { Outlet } from 'react-router-dom'
import { LogoIcon } from 'src/assets/icons'
import headerBg from 'src/assets/icons/header-bg.svg?url'

import { Button } from '../Button'

export const Layout = () => {
  return (
    <div className="flex relative flex-col items-center h-screen">
      <header
        className="items-center justify-between shrink-0 sticky top-0 flex gap-4 w-full p-3"
        style={{ background: `url("${headerBg}") repeat-x center/auto 100%` }}
      >
        <a className="flex items-center gap-2" href="/">
          <LogoIcon width={40} height={40} />
          <h1 className="text-4xl font-extralight">Pixi Game</h1>
        </a>
        <Button link href="/game">
          Play
        </Button>
      </header>
      <main className="flex-1 w-full overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
