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
import { IconCollectionVersion } from '../../components/iconCollection/version'

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
						<LinkScroll to='version1.0.0'>Versão 1.0.0</LinkScroll>
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
					<IconCollectionVersion.Root
						anchor='version1.0.0'
						title='Versão 1.0.0'
						styleSection={`${style.collection} bgc-primary-03 radius-xl`}>
						<IconCollectionVersion.UpdateArea>
							<Button
								name='arrow circle right'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='campaign'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chart line up'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='emergency home'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='event'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='home'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='key'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='label'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='local shipping'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='luggage'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='place'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='question answer'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sack money'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='smart display'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='swipe right'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='verified'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='warning'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='watch later'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='work'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
						</IconCollectionVersion.UpdateArea>
						<IconCollectionVersion.NewArea>
							<Button
								name='alternate email'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow back'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow forward'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow north east'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow north'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow north weast'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='arrow south'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='article'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='assignment'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='bank'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='bookmark'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chat'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='check circle'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron back'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron down'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron forward'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron left'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron right'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chevron up'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='contact mail'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='contact phone'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='contact support'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='corporate'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='description'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='draft'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='drafts'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='email content'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='facebook'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='fact check'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='feed'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='launch'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='linkedin'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='list alt'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='lock person'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='lock'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='mail'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='mark as unread'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='medal honor'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='mood'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='perm phone msg'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='phone in talk'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='pie chart'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='query stats'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='quiz'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sentiment dissatisfied'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sentiment satisfied'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sentiment very satisfied'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='settings'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='shield with house'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='speaker notes'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sports motorsports'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='thumb up'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='trophy'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='youtube'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
						</IconCollectionVersion.NewArea>
					</IconCollectionVersion.Root>
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
