// React / NextJS
import { useState } from 'react'
import Head from 'next/head'

// External lib

// Internal lib

// Component
// atom
import TitleSection from '../../components/atoms/titleSection'
import LinkScroll from '../../components/atoms/linkScroll'
import Button from '../../components/atoms/btnOpenModal'

// molecule
import IconCollection from '../../components/molecules/iconCollection'
import { IconCollectionVersion } from '../../components/molecules/iconCollection/version'

// organism
import Modal from '../../components/organisms/modal'

// Style module
import style from './Style.module.scss'

// Media

export default function Index() {
	const [isOpen, setIsOpen] = useState(false)
	const [nameIcon, setNameIcon] = useState('')
	return (
		<>
			<Head>
				<title>Documentação</title>
			</Head>
			<div className='ds-flex flow-col-nw gap-lg'>
				<div className='bv-container-md ds-flex flow-col-nw gap-xl'>
					<section>
						<TitleSection>Coleções de ícones</TitleSection>
					</section>
					<section className='ds-flex flow-row-wr gap-md'>
						<LinkScroll to='bevipentagono'>Bevipentagono</LinkScroll>
						<LinkScroll to='beviprotege'>Beviprotege</LinkScroll>
						<LinkScroll to='version1.1'>Versão 1.1</LinkScroll>
						<LinkScroll to='version1.2'>Versão 1.2</LinkScroll>
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
						anchor='version1.1'
						title='Versão 1.1'
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
					<IconCollectionVersion.Root
						anchor='version1.2'
						title='Versão 1.2'
						styleSection={`${style.collection} bgc-primary-03 radius-xl`}>
						<IconCollectionVersion.NewArea>
							<Button
								name='acute'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='add task'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='approval delegation'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='auto graph'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='badge'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='big debts'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='brightness hight'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='build'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='calculate'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='chart line down'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='content cut'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='crane'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='database'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='desktop'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='devices'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='directions boat'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='donut small'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='dove'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='elderly'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='emergency'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='event available'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='event busy'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='free cancellation'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='gasoline'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='gold'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='health and safety'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='heap snapshot large'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='home moving'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='hourglass top'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='interest free'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='iventory'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='laptop'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='laptop chart'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='laptop money'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='laptop plus'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='leaderboard'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='lock open'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='money plus'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='money time'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='nutrition'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='order approve'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='overview'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='paid'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='pending actions'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='pix'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='price check'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='psychiatry'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='repaid'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='security'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='sell'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='shopping basket'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='stethoscope'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='storefront'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='surprise box'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='tax paper'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='timelapse'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='today'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='verified user'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='wallet'
								setIsOpen={setIsOpen}
								setNameIcon={setNameIcon}
							/>
							<Button
								name='wheel'
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
