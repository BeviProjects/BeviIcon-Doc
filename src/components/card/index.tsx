import React, { ReactNode } from 'react'
import style from './Style.module.scss'
import toast, { Toaster } from 'react-hot-toast'

export interface IndexProps {
	contentCopy: string
	children: ReactNode
}

const index = ({ contentCopy, children }: IndexProps) => {
	const addToClipboard = () => {
		navigator.clipboard.writeText(contentCopy)
		toast.success('Ícone copiado com sucesso')
	}

	return (
		<div className={`${style.card}`}>
			<button onClick={addToClipboard}>Copy</button>
			<div className='content'>{children}</div>
			<Toaster position='bottom-center' reverseOrder={false} />
		</div>
	)
}

export default index
