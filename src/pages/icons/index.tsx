import Head from 'next/head'
import style from './Style.module.scss'
import Modal from '../../components/modal'
import { ReactNode, useState } from 'react'

// Modal.setAppElement('#root')

export default function index() {
	const [isOpen, setIsOpen] = useState(false)
	const [nameIcon, setNameIcon] = useState('')

	// // eslint-disable-next-line react-hooks/rules-of-hooks
	// const { isOpen, toggle } = useModal()
	// // eslint-disable-next-line react-hooks/rules-of-hooks
	// const [iconHighlight, setIconHighlight] = useState('test')

	// const handleClick = (name: string) => {
	// 	console.log(name)
	// }

	// eslint-disable-next-line react-hooks/rules-of-hooks

	return (
		<>
			<Head>
				<title>Ícones</title>
			</Head>
			<div className='bv-container-md ds-flex flow-col-nw gap-lg'>
				<section>
					<h1>Todos os Ícones</h1>
				</section>
				<GroupIcon ident='a'>
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
				</GroupIcon>
				<GroupIcon ident='b'>
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
					<Button name='bolt' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
					<Button name='book' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
				</GroupIcon>
				<GroupIcon ident='c'>
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
					<Button name='cube' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
				</GroupIcon>
				<GroupIcon ident='d'>
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
				</GroupIcon>
				<GroupIcon ident='e'>
					<Button name='eco' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
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
				</GroupIcon>
				<GroupIcon ident='f'>
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
					<Button name='fgts' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
				</GroupIcon>
				<GroupIcon ident='g'>
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
					<Button name='home' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
					<Button
						name='house car'
						setIsOpen={setIsOpen}
						setNameIcon={setNameIcon}
					/>
				</GroupIcon>
				<GroupIcon ident='k'>
					<Button name='key' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
				</GroupIcon>
				<GroupIcon ident='l'>
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
				</GroupIcon>
				<GroupIcon ident='m'>
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
				</GroupIcon>
				<GroupIcon ident='p'>
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
				</GroupIcon>
				<GroupIcon ident='q'>
					<Button
						name='question answer'
						setIsOpen={setIsOpen}
						setNameIcon={setNameIcon}
					/>
				</GroupIcon>
				<GroupIcon ident='s'>
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
					<Button name='snap' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
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
				</GroupIcon>
				<GroupIcon ident='t'>
					<Button
						name='target'
						setIsOpen={setIsOpen}
						setNameIcon={setNameIcon}
					/>
				</GroupIcon>
				<GroupIcon ident='v'>
					<Button
						name='verified'
						setIsOpen={setIsOpen}
						setNameIcon={setNameIcon}
					/>
				</GroupIcon>
				<GroupIcon ident='w'>
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
					<Button name='wifi' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
					<Button name='work' setIsOpen={setIsOpen} setNameIcon={setNameIcon} />
				</GroupIcon>
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

interface ButtonProps {
	name: string
	setIsOpen: (value: boolean) => void
	setNameIcon: (value: string) => void
}

const Button = ({ name, setIsOpen, setNameIcon }: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={() => [setIsOpen(true), setNameIcon(name.toLowerCase())]}
			className={style.iconBtn}
			aria-label={`Botão ${name}`}>
			<i
				className={`bi-${name
					.replace(/\s/g, '-')
					.toLocaleLowerCase()}-solid display-sm`}></i>
		</button>
	)
}

interface GroupIconProps {
	ident: string
	children: ReactNode
}

const GroupIcon = ({ ident, children }: GroupIconProps) => {
	return (
		<section
			className={`${style.secIcons} ds-flex flow-col-nw gap-md`}
			id={ident.toLowerCase()}>
			<h3 className='font-weight-800'>{ident.toUpperCase()}</h3>
			<div
				className={`${style.groupIcons} w-100 ds-grid grid-tpl-col-6 lg:grid-tpl-col-5 md:grid-tpl-col-4 sm:grid-tpl-col-2 gap-lg`}>
				{children}
			</div>
		</section>
	)
}
