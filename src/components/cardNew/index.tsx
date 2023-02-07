import React, { ReactNode } from 'react'
import style from './Style.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import { FadeIn } from '../animation/index'

const index = () => {
	return (
		<FadeIn.Opacity delayProp={0.8}>
			<Link
				href='/collection#version1.0'
				className={`${style.card} ds-flex flow-col-nw align-center gap-md`}>
				<h3 className='text-align-center font-weight-bold ds-inline-flex align-center gap-sm color-primary-01'>
					Novidade! <i className='bi-heart-solid'></i>
				</h3>
				<p className='font-size-lg text-align-center color-primary-01'>
					Recebemos novos ícones na versão <b>1.0</b> da biblioteca de ícones da
					Bevi
				</p>
			</Link>
		</FadeIn.Opacity>
	)
}

export default index
