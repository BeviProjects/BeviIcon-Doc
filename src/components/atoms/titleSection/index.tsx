import { ReactNode } from 'react'

interface indexProps {
	children: ReactNode
	counter?: string
}

const index = ({ children, counter }: indexProps) => {
	return (
		<div className='w-100 ds-flex flow-row-nw justify-between'>
			<h1 className='color-primary-01 font-weight-600'>{children}</h1>
			{counter ? (
				<span className='title-md color-gray-80'>{counter}</span>
			) : null}
		</div>
	)
}

export default index
