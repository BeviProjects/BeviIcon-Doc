import Head from 'next/head'
import style from './Style.module.scss'
import Modal from '../../components/modal'
import { ReactNode, useState } from 'react'
import LinkScroll from '../../components/linkScroll'

import TitleSection from '../../components/titleSection'
import IconCollection from '../../components/iconCollection'
import Button from '../../components/button/icon'

// Modal.setAppElement('#root')

export default function index() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [nameIcon, setNameIcon] = useState('')
	return (
		<>
			<Head>
				<title>Ícones</title>
			</Head>
			<div className='ds-flex flow-col-nw gap-lg'>
				<div className='bv-container-sm ds-flex flow-col-nw gap-xl'>
					<section>
						<TitleSection>Todos os ícones</TitleSection>
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
						<ButtonAnchor to='p' />
						<ButtonAnchor to='q' />
						<ButtonAnchor to='s' />
						<ButtonAnchor to='t' />
						<ButtonAnchor to='v' />
						<ButtonAnchor to='w' />
						<ButtonAnchor to='y' />
					</section>
					{/* https://www.youtube.com/watch?v=QzW03hyw_bU */}
				</div>
				<div className='bv-container-md ds-flex flow-col-nw gap-lg'>
					<IconCollection anchor='a' title='A'>
						<Button
							name='account box'
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
							name='autorenew'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='b' title='B'>
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
					</IconCollection>
					<IconCollection anchor='c' title='C'>
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
							name='corporate'
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
							name='description'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='directions car'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='door open'
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
					</IconCollection>
					<IconCollection anchor='g' title='G'>
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
							name='home'
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
							name='launch'
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
							name='money'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='mood'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='p' title='P'>
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
							name='place'
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
					</IconCollection>
					<IconCollection anchor='t' title='T'>
						<Button
							name='target'
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
					</IconCollection>
					<IconCollection anchor='v' title='V'>
						<Button
							name='verified'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='w' title='W'>
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
			className={`${style.buttonAnchor} aspect-ratio-square`}>
			{to.toUpperCase()}
		</LinkScroll>
	)
}
