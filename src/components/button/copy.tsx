import React, { ReactNode } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export interface CopyProps {
	contentCopy: string
	className?: string
}

const copy = ({ contentCopy, className }: CopyProps) => {
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
			<button
				type='button'
				className={className}
				onClick={addToClipboard}
				aria-label='Botão de cópia'>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0_452_13)'>
						<path
							d='M7 0C5.89688 0 5 0.896875 5 2V9C5 10.1031 5.89688 11 7 11H14C15.1031 11 16 10.1031 16 9V2C16 0.896875 15.1031 0 14 0H7ZM2 5C0.896875 5 0 5.89688 0 7V14C0 15.1031 0.896875 16 2 16H9C10.1031 16 11 15.1031 11 14V12H9V14H2V7H4V5H2Z'
							fill='#333333'
						/>
					</g>
					<defs>
						<clipPath id='clip0_452_13'>
							<rect width='16' height='16' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</button>
			<Toaster position='bottom-center' reverseOrder={false} />
		</>
	)
}

export default copy
