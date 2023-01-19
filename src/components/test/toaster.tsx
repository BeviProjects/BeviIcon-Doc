import toast, { Toaster } from 'react-hot-toast'

import React from 'react'

const toaster = () => {
	toast.success('Ícone copiado com sucesso', {
		style: {
			fontFamily: 'Nunito',
			fontWeight: '600',
		},
	})
	return (
		<>
			<div>toaster</div>
			<Toaster position='bottom-center' reverseOrder={false} />
		</>
	)
}

export default toaster
