/* eslint-disable react-hooks/rules-of-hooks */
// React / NextJS
import { useState } from 'react'
import Head from 'next/head'

// External lib

// Internal lib

// Component
// atom
import LinkScroll from '../../components/atoms/linkScroll'
import TitleSection from '../../components/atoms/titleSection'
import Button from '../../components/atoms/btnOpenModal'

// molecule
import IconCollection from '../../components/molecules/iconCollection'

// organism
import Modal from '../../components/organisms/modal'

// Style module
import style from './Style.module.scss'

// Media
export default function index() {
	const [isOpen, setIsOpen] = useState(false)
	const [nameIcon, setNameIcon] = useState('')
	return (
		<>
			<Head>
				<title>Ícones</title>
			</Head>
			<div className='ds-flex flow-col-nw gap-lg'>
				<div className='bv-container-md ds-flex flow-col-nw gap-xl'>
					<section>
						<TitleSection counter='186'>Todos os ícones</TitleSection>
					</section>
					<section className='ds-flex flow-row-wr gap-md'>
						<ButtonAnchor to='a' />
						<ButtonAnchor to='b' />
						<ButtonAnchor to='c' />
						<ButtonAnchor to='d' />
						<ButtonAnchor to='e' />
						<ButtonAnchor to='f' />
						<ButtonAnchor to='g' />
						<ButtonAnchor to='h' />
						<ButtonAnchor to='i' />
						<ButtonAnchor to='k' />
						<ButtonAnchor to='l' />
						<ButtonAnchor to='m' />
						<ButtonAnchor to='n' />
						<ButtonAnchor to='o' />
						<ButtonAnchor to='p' />
						<ButtonAnchor to='q' />
						<ButtonAnchor to='r' />
						<ButtonAnchor to='s' />
						<ButtonAnchor to='t' />
						<ButtonAnchor to='v' />
						<ButtonAnchor to='w' />
						<ButtonAnchor to='y' />
					</section>
				</div>
				<div className='bv-container-md ds-flex flow-col-nw gap-lg'>
					<IconCollection anchor='a' title='A'>
						<Button
							name='account box'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
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
							name='agriculture'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='alternate email'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='approval delegation'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='arrow back'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='arrow circle right'
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
							name='arrow selector tool'
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
							name='auto graph'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='autorenew'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='b' title='B'>
						<Button
							name='badge'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='bank'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='bevipentagono'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='beviprotege'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='big debts'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='blocks'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='bolt'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='book'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='bookmark'
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
					</IconCollection>
					<IconCollection anchor='c' title='C'>
						<Button
							name='calculate'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='campaign'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='chalkboard user'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='chart line down'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='chart line up'
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
							name='cloud'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='construction'
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
							name='content cut'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='corporate'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='crane'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='credit card'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='cube'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='d' title='D'>
						<Button
							name='database'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='description'
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
							name='directions car'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='donut small'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='door open'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='dove'
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
					</IconCollection>
					<IconCollection anchor='e' title='E'>
						<Button
							name='eco'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='elderly'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='email content'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='emergency home'
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
							name='event'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='f' title='F'>
						<Button
							name='face retouching natural'
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
							name='falabevi'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='feed'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='fgts'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='free cancellation'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='g' title='G'>
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
							name='groups'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='h' title='H'>
						<Button
							name='hand archive'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='hand credit card'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='hand house'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='hand money'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='handshake business'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='headset mic'
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
							name='heart'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='help center'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='help'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='home moving'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='home'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='hourglass top'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='house car'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='i' title='I'>
						<Button
							name='import contacts'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='instagram'
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
					</IconCollection>
					<IconCollection anchor='k' title='K'>
						<Button
							name='key'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='l' title='L'>
						<Button
							name='label'
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
							name='launch'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='leaderboard'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='lightbulb'
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
							name='local shipping'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='lock open'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='lock'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='lock person'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='luggage'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='m' title='M'>
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
							name='medal'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='money plus'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='money'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='money time'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='mood'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='n' title='N'>
						<Button
							name='nutrition'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='o' title='O'>
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
					</IconCollection>
					<IconCollection anchor='p' title='P'>
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
							name='perm phone msg'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='person remove'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='person'
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
							name='pix'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='place'
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
					</IconCollection>
					<IconCollection anchor='r' title='R'>
						<Button
							name='repaid'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='q' title='Q'>
						<Button
							name='query stats'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='question answer'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='quiz'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='s' title='S'>
						<Button
							name='sack money'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='saving pigs'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='search'
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
							name='school'
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
							name='shopping basket'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='smart display'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='smartphone'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='snap'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='solar panel'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='speaker notes'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='swipe right'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='speed'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='sports motorsports'
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
					</IconCollection>
					<IconCollection anchor='t' title='T'>
						<Button
							name='target'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='tax paper'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='thumb up'
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
							name='trophy'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='v' title='V'>
						<Button
							name='verified'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='verified user'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='w' title='W'>
						<Button
							name='wallet'
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
							name='wheel'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='wifi'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='work'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='y' title='Y'>
						<Button
							name='youtube'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
				</div>
				<section>
					<div className='bv-container-md'>
						{isOpen && (
							<Modal setIsOpen={setIsOpen} isOpen={isOpen} name={nameIcon} />
						)}
					</div>
				</section>
			</div>
		</>
	)
}

interface ButtonAnchorProps {
	to: string
}

const ButtonAnchor = ({ to }: ButtonAnchorProps) => {
	return (
		<LinkScroll
			to={to.toLowerCase()}
			className={`${style.buttonAnchor} ds-flex-center aspect-square p-00`}>
			{to.toUpperCase()}
		</LinkScroll>
	)
}
