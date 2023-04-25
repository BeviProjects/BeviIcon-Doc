import Link from 'next/link'
import React from 'react'
import style from './Style.module.scss'

const index = () => {
	return (
		<footer className={`${style.footer} w-100 bgc-gray-01`}>
			<div className='bv-container-md'>
				<div className='bv-row'>
					<span className='text-align-center'>
						© 2023 Bevi - Todos os direitos reservados.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default index
