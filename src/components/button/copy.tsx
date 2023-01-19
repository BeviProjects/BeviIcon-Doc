import React, { ReactNode } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export interface CopyProps {
	contentCopy: string
	children: ReactNode
	className: string
}

const copy = ({ contentCopy, children, className }: CopyProps) => {
	const addToClipboard = () => {
		navigator.clipboard.writeText(contentCopy)
		toast.success('Ícone copiado com sucesso', {
			style: {
				fontFamily: 'Nunito',
				fontWeight: '600',
			},
		})
	}

	return (
		<>
			<button type='button' className={className} onClick={addToClipboard}>
				{children}
			</button>
			<Toaster position='bottom-center' reverseOrder={false} />
		</>
	)
}

export default copy
