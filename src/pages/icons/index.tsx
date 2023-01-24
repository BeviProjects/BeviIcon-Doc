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
						<ButtonAnchor to='l' />
						<ButtonAnchor to='m' />
						<ButtonAnchor to='p' />
						<ButtonAnchor to='q' />
						<ButtonAnchor to='s' />
						<ButtonAnchor to='t' />
						<ButtonAnchor to='v' />
						<ButtonAnchor to='w' />
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
							name='arrow circle right'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='arrow selector tool'
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
							name='directions car'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
						<Button
							name='door open'
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
							name='falabevi'
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
							name='lightbulb'
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
					</IconCollection>
					<IconCollection anchor='m' title='M'>
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
					</IconCollection>
					<IconCollection anchor='p' title='P'>
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
							name='place'
							setIsOpen={setIsOpen}
							setNameIcon={setNameIcon}
						/>
					</IconCollection>
					<IconCollection anchor='q' title='Q'>
						<Button
							name='question answer'
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
							name='swipe right'
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
