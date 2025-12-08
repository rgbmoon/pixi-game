import { type ReactNode } from 'react'

import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  link?: boolean
  href?: string
  className?: string
}

export const Button = ({ children, onClick, link, href, className = '' }: ButtonProps) => {
  const baseStyles = `
    h-10
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-md
    backdrop-blur-xs bg-white/10
    border border-white/20
    hover:bg-white/20
    transition-all duration-100
    ${className}
  `

  if (link && href) {
    return (
      <Link to={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  )
}
