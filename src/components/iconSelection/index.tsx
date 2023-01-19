import React from 'react'

const index = () => {
	return <div>index</div>
}

export default index

// import React, { ReactNode, useEffect, useRef, useState } from 'react'
// import style from './Style.module.scss'
// import CopyButton from '../button/copy'
// import Image from 'next/image'
// import toast, { Toaster } from 'react-hot-toast'
// import AmountSVG from '../../components/icon/amount'

// import solid from '../../components/icon/solid'
// import duo from '../../components/icon/duo'
// import dark from '../../components/icon/dark'
// import light from '../../components/icon/light'

// interface ModalType {
// 	isOpen: boolean
// 	toggle: () => void
// 	name: string
// }

// export default function Modal({ isOpen, toggle, name }: ModalType) {
// 	const [animation, setAnimation] = useState('hide')
// 	const nameNoSpace = name.replace(/\s/g, '')
// 	console.log('Name no Space: ', nameNoSpace)

// 	const [iconHighlightState, setIconHighlightState] = useState([
// 		solid[name],
// 		'solid',
// 	])

// 	const iconHighlightRef = useRef<string[]>([])

// 	const closeModal = () => {
// 		setAnimation('hide')
// 		setTimeout(toggle, 256)
// 	}
// 	// useEffect(() => {
// 	// 	if (isOpen) {
// 	// 		setTimeout(setAnimation('show'), 1000)
// 	// 	} else setTimeout(setAnimation('hide'), 1000)
// 	// }, [isOpen])

// 	const solidHighlight = () => {
// 		setIconHighlightState([solid[name], 'solid'])
// 	}
// 	const duoHighlight = () => {
// 		setIconHighlightState([duo[name], 'duo'])
// 	}
// 	const darkHighlight = () => {
// 		setIconHighlightState([dark[name], 'dark'])
// 	}
// 	const lightHighlight = () => {
// 		setIconHighlightState([light[name], 'light'])
// 	}

// 	console.log(iconHighlightRef.current?.innerHTML)

// 	const copySVG = () => {
// 		navigator.clipboard.writeText(iconHighlightRef.current?.innerHTML)
// 		toast.success('Ícone copiado com sucesso', {
// 			style: {
// 				fontFamily: 'Nunito',
// 				fontWeight: '600',
// 			},
// 		})
// 	}

// 	const downloadSVG = () => {
// 		var element = document.createElement('a')
// 		element.setAttribute(
// 			'href',
// 			'data:svg/plain;charset=utf-8,' +
// 				encodeURIComponent(iconHighlightRef.current?.innerHTML)
// 		)
// 		element.setAttribute(
// 			'download',
// 			name + '-' + iconHighlightState[1] + '.svg'
// 		)
// 		element.style.display = 'none'
// 		document.body.appendChild(element)
// 		element.click()
// 		document.body.removeChild(element)
// 	}

// 	return (
// 		<>
// 			{isOpen && (
// 				<aside
// 					className={`${style.modalBackground} ps-fixed ds-flex flow-col-nw justify-end`}
// 					onClick={closeModal}
// 					data-status={animation}>
// 					<div className='bv-container-md'>
// 						<div
// 							onClick={(e) => e.stopPropagation()}
// 							className={`${style.modal} ds-flex flow-col-nw gap-sm bgc-primary-03`}
// 							data-status={animation}>
// 							<div className='w-100 ds-flex flow-row-nw align-start justify-between'>
// 								<h3 className='font-weight-600'>{name}</h3>
// 								<button
// 									type='button'
// 									aria-label='Fechar'
// 									className={style.btnAction}
// 									onClick={closeModal}>
// 									<svg
// 										width='20'
// 										height='20'
// 										viewBox='0 0 20 20'
// 										fill='none'
// 										xmlns='http://www.w3.org/2000/svg'>
// 										<path
// 											d='M16.1357 6.13574C16.624 5.64746 16.624 4.85449 16.1357 4.36621C15.6475 3.87793 14.8545 3.87793 14.3662 4.36621L10.2529 8.4834L6.13574 4.37012C5.64746 3.88184 4.85449 3.88184 4.36621 4.37012C3.87793 4.8584 3.87793 5.65137 4.36621 6.13965L8.4834 10.2529L4.37012 14.3701C3.88184 14.8584 3.88184 15.6514 4.37012 16.1396C4.8584 16.6279 5.65137 16.6279 6.13965 16.1396L10.2529 12.0225L14.3701 16.1357C14.8584 16.624 15.6514 16.624 16.1396 16.1357C16.6279 15.6475 16.6279 14.8545 16.1396 14.3662L12.0225 10.2529L16.1357 6.13574Z'
// 											fill='black'
// 										/>
// 									</svg>
// 								</button>
// 							</div>
// 							<div className='ds-flex flow-row-nw gap-lg'>
// 								<div>
// 									<div
// 										className={`${style.iconHighlight} ds-flex-center bgc-gray-01 radius-lg`}
// 										ref={iconHighlightRef}>
// 										<AmountSVG name={name}>{iconHighlightState[0]}</AmountSVG>
// 									</div>
// 								</div>
// 								<div className='w-100 ds-flex flow-col-nw justify-between'>
// 									<div className='ds-flex flow-row-nw gap-lg'>
// 										<button
// 											type='button'
// 											className={`${style.option} ds-flex-center radius-lg bgc-gray-01`}
// 											aria-label={`Selecione o ícone ${name} solid`}
// 											onClick={solidHighlight}>
// 											<AmountSVG name={name}>{solid[name]}</AmountSVG>
// 										</button>
// 										<button
// 											type='button'
// 											className={`${style.option} ds-flex-center radius-lg bgc-gray-01`}
// 											aria-label={`Selecione o ícone ${name} duotone`}
// 											onClick={duoHighlight}>
// 											<AmountSVG name={name}>{duo[name]}</AmountSVG>
// 										</button>
// 										<button
// 											type='button'
// 											className={`${style.option} ds-flex-center radius-lg bgc-gray-01`}
// 											aria-label={`Selecione o ícone ${name} dark`}
// 											onClick={darkHighlight}>
// 											<AmountSVG name={name}>{dark[name]}</AmountSVG>
// 										</button>
// 										<button
// 											type='button'
// 											className={`${style.option} ds-flex-center radius-lg bgc-gray-01`}
// 											aria-label={`Selecione o ícone ${name} light`}
// 											onClick={lightHighlight}>
// 											<AmountSVG name={name}>{light[name]}</AmountSVG>
// 										</button>
// 									</div>
// 									<div className='ds-flex flow-col-nw align-end gap-sm'>
// 										<div className='ds-flex-center flow-row-nw gap-md'>
// 											<button
// 												type='button'
// 												id='copySVG'
// 												className={`${style.btnAction} ps-relative`}
// 												aria-label='Copiar SVG'
// 												onClick={copySVG}>
// 												<label
// 													htmlFor='copySVG'
// 													className={`${style.tooltipBtn} ps-absolute font-weight-400 radius-md bgc-primary-01 color-primary-03`}>
// 													Copiar SVG
// 												</label>
// 												<svg
// 													width='20'
// 													height='17'
// 													viewBox='0 0 20 17'
// 													fill='none'
// 													xmlns='http://www.w3.org/2000/svg'>
// 													<g clipPath='url(#clip0_375_87)'>
// 														<path
// 															d='M12.275 0.0374403C11.7438 -0.116474 11.1906 0.194496 11.0375 0.728484L7.03751 14.8006C6.88439 15.3346 7.19376 15.8906 7.72501 16.0445C8.25626 16.1984 8.80939 15.8875 8.96251 15.3535L12.9625 1.28132C13.1156 0.747331 12.8063 0.191355 12.275 0.0374403V0.0374403ZM14.7938 3.80991C14.4031 4.20255 14.4031 4.84019 14.7938 5.23283L17.5844 8.04098L14.7906 10.8491C14.4 11.2418 14.4 11.8794 14.7906 12.2721C15.1813 12.6647 15.8156 12.6647 16.2063 12.2721L19.7063 8.75402C20.0969 8.36138 20.0969 7.72373 19.7063 7.33109L16.2063 3.81305C15.8156 3.42041 15.1813 3.42041 14.7906 3.81305L14.7938 3.80991ZM5.20939 3.80991C4.81876 3.41727 4.18439 3.41727 3.79376 3.80991L0.293762 7.32795C-0.0968628 7.72059 -0.0968628 8.35824 0.293762 8.75087L3.79376 12.2689C4.18439 12.6616 4.81876 12.6616 5.20939 12.2689C5.60001 11.8763 5.60001 11.2386 5.20939 10.846L2.41564 8.04098L5.20939 5.23283C5.60001 4.84019 5.60001 4.20255 5.20939 3.80991Z'
// 															fill='#222343'
// 														/>
// 													</g>
// 													<defs>
// 														<clipPath id='clip0_375_87'>
// 															<rect width='20' height='16.0825' fill='white' />
// 														</clipPath>
// 													</defs>
// 												</svg>
// 											</button>
// 											<button
// 												type='button'
// 												id='downloadSVG'
// 												className={`${style.btnAction} ps-relative`}
// 												aria-label='Download SVG'
// 												onClick={downloadSVG}>
// 												<label
// 													htmlFor='downloadSVG'
// 													className={`${style.tooltipBtn} ps-absolute font-weight-400 radius-md bgc-primary-01 color-primary-03`}>
// 													Download
// 												</label>
// 												<svg
// 													width='20'
// 													height='20'
// 													viewBox='0 0 20 20'
// 													fill='none'
// 													xmlns='http://www.w3.org/2000/svg'>
// 													<g clip-path='url(#clip0_379_9)'>
// 														<path
// 															d='M11.25 1.25C11.25 0.558594 10.6914 0 10 0C9.30859 0 8.75 0.558594 8.75 1.25V10.7305L5.88281 7.86328C5.39453 7.375 4.60156 7.375 4.11328 7.86328C3.625 8.35156 3.625 9.14453 4.11328 9.63281L9.11328 14.6328C9.60156 15.1211 10.3945 15.1211 10.8828 14.6328L15.8828 9.63281C16.3711 9.14453 16.3711 8.35156 15.8828 7.86328C15.3945 7.375 14.6016 7.375 14.1133 7.86328L11.25 10.7305V1.25ZM2.5 13.75C1.12109 13.75 0 14.8711 0 16.25V17.5C0 18.8789 1.12109 20 2.5 20H17.5C18.8789 20 20 18.8789 20 17.5V16.25C20 14.8711 18.8789 13.75 17.5 13.75H13.5352L11.7656 15.5195C10.7891 16.4961 9.20703 16.4961 8.23047 15.5195L6.46484 13.75H2.5ZM16.875 17.8125C16.3555 17.8125 15.9375 17.3945 15.9375 16.875C15.9375 16.3555 16.3555 15.9375 16.875 15.9375C17.3945 15.9375 17.8125 16.3555 17.8125 16.875C17.8125 17.3945 17.3945 17.8125 16.875 17.8125Z'
// 															fill='black'
// 														/>
// 													</g>
// 													<defs>
// 														<clipPath id='clip0_379_9'>
// 															<rect width='20' height='20' fill='white' />
// 														</clipPath>
// 													</defs>
// 												</svg>
// 											</button>
// 										</div>
// 										<code
// 											className={`${style.code} w-100 ps-relative line-height-1 radius-lg bgc-gray-01`}>
// 											&#60;i
// 											className=&#34;bi-blocks-solid&#34;&#62;&#60;/i&#62;
// 										</code>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</aside>
// 			)}
// 			<Toaster position='bottom-center' reverseOrder={false} />
// 		</>
// 	)
// }

// interface BtnActionProps {
// 	onClick: void
// 	ident: string
// 	alt: string
// 	label: string
// 	children: ReactNode
// }

// const BtnAction = ({
// 	onClick,
// 	ident,
// 	alt,
// 	label,
// 	children,
// }: BtnActionProps) => {
// 	return (
// 		<button
// 			type='button'
// 			id={ident}
// 			className={`${style.btnAction} ps-relative`}
// 			onClick={onClick}
// 			aria-label={alt}>
// 			<label
// 				htmlFor={ident}
// 				className={`${style.tooltipBtn} ps-absolute font-weight-400 radius-md bgc-primary-01 color-primary-03`}>
// 				{label}
// 			</label>
// 			{children}
// 		</button>
// 	)
// }
