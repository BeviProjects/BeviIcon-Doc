import { ReactNode } from 'react'

interface indexProps {
	children: ReactNode
}

const index = ({ children }: indexProps) => {
	return <h1 className='color-primary-01 font-weight-600'>{children}</h1>
}

export default index
