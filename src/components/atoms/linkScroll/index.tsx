import React, { ReactNode } from 'react'
import style from './Style.module.scss'
import { Link } from 'react-scroll'

export interface IndexProps {
	className?: string
	children: ReactNode
	to: string
}

const index = ({ className, to, children }: IndexProps) => {
	return (
		<Link
			to={to.toLowerCase()}
			spy={true}
			smooth={true}
			offset={-100}
			duration={500}
			className={`${className} ${style.button} button sm cursor-pointer font-weight-400 bgc-primary-01 color-primary-03`}>
			{children}
		</Link>
	)
}

export default index
