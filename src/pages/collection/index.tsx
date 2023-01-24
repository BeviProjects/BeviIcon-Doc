import Head from 'next/head'
import styleMain from '../Style.module.scss'
import style from './Style.module.scss'
import CardNew from '../../components/cardNew'
// import Link from 'next/link'
import TitleSection from '../../components/titleSection'
import LinkScroll from '../../components/linkScroll'
import Button from '../../components/button/icon'
import Modal from '../../components/modal'
import IconCollection from '../../components/iconCollection'

import { ReactNode, useState } from 'react'

export default function Index() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [nameIcon, setNameIcon] = useState('')
	return (
		<>
			<Head>
				<title>Documentação</title>
			</Head>
			<div className='ds-flex flow-col-nw gap-lg'>
				<div className='bv-container-sm ds-flex flow-col-nw gap-xl'>
					<section>
						<TitleSection>Coleções de ícones</TitleSection>
					</section>
					<section className='ds-flex flow-row-wr gap-md'>
						<LinkScroll to='bevipentagono'>Bevipentagono</LinkScroll>
						<LinkScroll to='beviprotege'>Beviprotege</LinkScroll>
						<LinkScroll to='version1.1'>Versão 1.1</LinkScroll>
					</section>
				</div>
				<div className='bv-container-md ds-flex flow-col-nw gap-lg'>
					<IconCollection
						anchor='bevipentagono'
						title='Bevipentagono'
						styleSection={`${style.collection} bgc-primary-03 radius-xl`}>
						<Button
							name='bevipentagono'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection
						anchor='beviprotege'
						title='Beviprotege'
						styleSection={`${style.collection} bgc-primary-03 radius-xl`}>
						<Button
							name='beviprotege'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection
						anchor='version1.1'
						title='Versão 1.1'
						styleSection={`${style.collection} bgc-primary-03 radius-xl`}>
						<Button
							name='icone'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
				</div>
			</div>
			<section>
				<div className='bv-container-md'>
					{isOpen && (
						<Modal setIsOpen={setIsOpen} isOpen={isOpen} name={nameIcon} />
					)}
				</div>
			</section>
		</>
	)
}
