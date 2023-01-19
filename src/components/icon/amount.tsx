import React, { ReactNode } from 'react'

export interface AmountProps {
	name: string
	children: ReactNode
}

const amount = ({ name, children }: AmountProps) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			aria-hidden='true'
			data-icon={`bi-${name.replace(/\s/g, '-')}`}
			className={`bi-${name.replace(/\s/g, '-')}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			{children}
		</svg>
	)
}

export default amount
