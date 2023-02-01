import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import style from './Style.module.scss'

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [animation, setAnimation] = useState('hide')

	const closeMenu = () => {
		setAnimation('hide')
		setTimeout(() => setIsOpen(false), 250)
	}

	const openMenu = () => {
		setTimeout(() => setAnimation('show'), 1)
		setIsOpen(true)
	}

	return (
		<header className={`${style.header} w-100 ps-fixed top-0`}>
			<div className='bv-container-md'>
				<nav
					className={`${style.nav} ps-relative w-100 ds-flex flow-row-nw justify-between align-center gap-sm radius-xl`}>
					<div
						className={`${style.growMiddle} logo ds-flex flow-row-nw justify-start align-center`}>
						<Link href='/'>
							<svg
								width='56'
								height='24'
								viewBox='0 0 56 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M53.1857 5.58012C54.1959 5.58012 55.0148 4.76119 55.0148 3.75098C55.0148 2.74076 54.1959 1.92183 53.1857 1.92183C52.1754 1.92183 51.3565 2.74076 51.3565 3.75098C51.3565 4.76119 52.1754 5.58012 53.1857 5.58012Z'
									fill='#25CBDB'
								/>
								<path
									d='M0.0385312 14.1633C0.0563652 14.745 0.148744 15.322 0.313414 15.8803C0.8786 17.7274 2.88845 19.1763 4.75527 19.333H4.80665C3.97923 18.7917 3.34598 18.0007 2.99891 17.0749C2.17854 14.8261 3.68399 11.9154 6.12456 10.9006C8.10614 10.0768 10.414 10.6257 11.8835 12.0507C13.5722 13.688 13.5105 15.8606 13.4968 16.192C13.4831 16.4977 13.3778 18.272 12.0128 19.709C9.9036 21.9303 6.59982 21.4388 5.5705 21.2855C4.50659 21.1115 3.47739 20.7683 2.52192 20.269C1.61053 19.7979 0.773698 19.1949 0.0385312 18.4793C0.151568 18.7362 2.27016 23.3518 7.06054 23.9427C7.63086 24.0129 10.7959 24.3418 13.4488 22.0759C15.5803 20.2553 16.0547 17.8944 16.1583 17.2804C16.3732 16.0061 16.2809 14.6989 15.889 13.4675C15.4972 12.236 14.8171 11.1159 13.9053 10.2001C11.6694 7.97365 8.83402 7.84948 8.41698 7.83834C6.38403 7.78354 4.32881 8.46519 2.7951 9.88843C2.78939 7.21778 2.78368 4.54628 2.77797 1.87392C2.54076 0.622802 0.949684 -0.186442 0 0.0370637C0 11.864 0.0333978 7.47183 0.0111329 12.3598L0.0385312 14.1633Z'
									fill='#222343'
								/>
								<path
									d='M26.6947 23.8854C24.1514 23.8854 22.1487 23.1701 20.6866 21.7394C19.2245 20.3088 18.4935 18.354 18.4935 15.8752C18.4935 14.2858 18.8166 12.882 19.4629 11.6637C20.0744 10.4825 21.0052 9.49656 22.1492 8.81807C23.291 8.14042 24.6041 7.80159 26.0884 7.80159C28.2287 7.80159 29.9128 8.48496 31.1408 9.85168C32.3688 11.2184 32.9845 13.0989 32.988 15.4933C32.988 16.2143 32.5644 16.5745 31.7172 16.574H21.6123C21.8452 19.7955 23.5511 21.406 26.7298 21.4054C27.404 21.4012 28.0756 21.3214 28.7319 21.1674C29.4546 20.9975 30.1416 20.7015 30.7615 20.2931C31.2068 20.039 31.5936 19.9491 31.9218 20.0233C32.0743 20.0529 32.2181 20.1169 32.342 20.2106C32.4659 20.3042 32.5668 20.425 32.6369 20.5637C32.7859 20.8591 32.8144 21.2008 32.7165 21.5168C32.6206 21.8667 32.3717 22.1687 31.9698 22.4228C31.1979 22.9331 30.3426 23.3044 29.4427 23.5198C28.5453 23.7543 27.6223 23.8772 26.6947 23.8854ZM26.2177 10.0581C24.8824 10.0581 23.8228 10.4714 23.039 11.298C22.2551 12.1247 21.7784 13.2265 21.6089 14.6035H30.2862C30.2228 13.1632 29.8415 12.0453 29.1421 11.2501C28.4428 10.4548 27.468 10.0575 26.2177 10.0581Z'
									fill='#222343'
								/>
								<path
									d='M41.637 23.822C40.7464 23.822 40.0899 23.3451 39.6674 22.3911L34.3581 10.0598C34.1041 9.48887 34.0935 8.9802 34.3264 8.53376C34.5593 8.08732 35.0363 7.86496 35.7574 7.86667C36.0948 7.85143 36.4273 7.95239 36.6993 8.15269C36.9425 8.34337 37.1598 8.67192 37.351 9.13834L41.7055 19.882L46.1585 9.13834C46.3498 8.67249 46.567 8.34394 46.8102 8.15269C47.0534 7.96144 47.3979 7.8661 47.8438 7.86667C48.4147 7.86667 48.8066 8.08903 49.0195 8.53376C49.2325 8.97849 49.2219 9.4766 48.9879 10.0281L43.6066 22.3911C43.203 23.3451 42.5464 23.822 41.637 23.822Z'
									fill='#222343'
								/>
								<path
									d='M53.1121 23.7894C52.0519 23.7894 51.5222 23.2068 51.5227 22.0416V9.6452C51.5227 8.49999 52.0525 7.92909 53.1121 7.93252C54.1928 7.93252 54.7332 8.50341 54.7332 9.6452V22.0416C54.7309 23.2074 54.1905 23.79 53.1121 23.7894Z'
									fill='#222343'
								/>
							</svg>
						</Link>
					</div>
					<div
						className={`${style.content} ps-absolute ds-flex-center lg:ds-none flow-row-nw sm:flow-col-nw gap-md radius-lg lg:hidden`}>
						<Link href='/docs' className={style.itemMenu}>
							Documentação
						</Link>
						<Link href='/collection' className={style.itemMenu}>
							Coleções
						</Link>
						<Link href='/icons' className={style.itemMenu}>
							Ícones
						</Link>
					</div>
					<div
						className={`${style.growMiddle} ${style.github} lg:hidden ds-flex lg:ds-none flow-row-nw justify-end align-center gap-sm`}>
						<span className={`${style.version}`}>1.1-beta</span>

						<Link
							href='https://github.com/BeviProjects/BeviIcon-Doc'
							target='_blank'
							rel='noopener noreferrer'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clipPath='url(#clip0_356_48)'>
									<path
										d='M6.68952 15.7016C6.68952 15.7823 6.59677 15.8468 6.47984 15.8468C6.34677 15.8589 6.25403 15.7944 6.25403 15.7016C6.25403 15.621 6.34677 15.5565 6.46371 15.5565C6.58468 15.5444 6.68952 15.6089 6.68952 15.7016ZM5.43548 15.5202C5.40726 15.6008 5.4879 15.6935 5.60887 15.7177C5.71371 15.7581 5.83468 15.7177 5.85887 15.6371C5.88306 15.5565 5.80645 15.4637 5.68548 15.4274C5.58064 15.3992 5.46371 15.4395 5.43548 15.5202ZM7.21774 15.4516C7.10081 15.4798 7.02016 15.5565 7.03226 15.6492C7.04435 15.7298 7.14919 15.7823 7.27016 15.754C7.3871 15.7258 7.46774 15.6492 7.45564 15.5685C7.44355 15.4919 7.33468 15.4395 7.21774 15.4516ZM9.87097 0C4.27823 0 0 4.24597 0 9.83871C0 14.3105 2.81452 18.1371 6.83468 19.4839C7.35081 19.5766 7.53226 19.2581 7.53226 18.996C7.53226 18.746 7.52016 17.3669 7.52016 16.5202C7.52016 16.5202 4.69758 17.125 4.10484 15.3185C4.10484 15.3185 3.64516 14.1452 2.98387 13.8427C2.98387 13.8427 2.06048 13.2097 3.04839 13.2218C3.04839 13.2218 4.05242 13.3024 4.60484 14.2621C5.4879 15.8185 6.96774 15.371 7.54435 15.1048C7.6371 14.4597 7.89919 14.0121 8.18952 13.746C5.93548 13.496 3.66129 13.1694 3.66129 9.29032C3.66129 8.18145 3.96774 7.625 4.6129 6.91532C4.50806 6.65323 4.16532 5.57258 4.71774 4.17742C5.56048 3.91532 7.5 5.26613 7.5 5.26613C8.30645 5.04032 9.17339 4.92339 10.0323 4.92339C10.8911 4.92339 11.7581 5.04032 12.5645 5.26613C12.5645 5.26613 14.504 3.91129 15.3468 4.17742C15.8992 5.57661 15.5565 6.65323 15.4516 6.91532C16.0968 7.62903 16.4919 8.18548 16.4919 9.29032C16.4919 13.1815 14.1169 13.4919 11.8629 13.746C12.2339 14.0645 12.5484 14.6694 12.5484 15.6169C12.5484 16.9758 12.5363 18.6573 12.5363 18.9879C12.5363 19.25 12.7218 19.5685 13.2339 19.4758C17.2661 18.1371 20 14.3105 20 9.83871C20 4.24597 15.4637 0 9.87097 0ZM3.91935 13.9073C3.86694 13.9476 3.87903 14.0403 3.94758 14.1169C4.0121 14.1815 4.10484 14.2097 4.15726 14.1573C4.20968 14.1169 4.19758 14.0242 4.12903 13.9476C4.06452 13.8831 3.97177 13.8548 3.91935 13.9073ZM3.48387 13.5806C3.45565 13.6331 3.49597 13.6976 3.57661 13.7379C3.64113 13.7782 3.72177 13.7661 3.75 13.7097C3.77823 13.6573 3.7379 13.5927 3.65726 13.5524C3.57661 13.5282 3.5121 13.5403 3.48387 13.5806ZM4.79032 15.0161C4.72581 15.0685 4.75 15.1895 4.84274 15.2661C4.93548 15.3589 5.05242 15.371 5.10484 15.3065C5.15726 15.254 5.13306 15.1331 5.05242 15.0565C4.96371 14.9637 4.84274 14.9516 4.79032 15.0161ZM4.33065 14.4234C4.26613 14.4637 4.26613 14.5685 4.33065 14.6613C4.39516 14.754 4.50403 14.7944 4.55645 14.754C4.62097 14.7016 4.62097 14.5968 4.55645 14.504C4.5 14.4113 4.39516 14.371 4.33065 14.4234Z'
										fill='black'
									/>
								</g>
								<defs>
									<clipPath id='clip0_356_48'>
										<rect width='20' height='20' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
					<button
						type='button'
						className='hide-on-desk sm'
						aria-label='Menu'
						onClick={() => {
							isOpen ? closeMenu() : openMenu()
						}}>
						Menu
					</button>
				</nav>
			</div>
			{isOpen && (
				<aside
					className={`${style.menuMobile} w-100 ps-fixed hide-on-desk duration-normal property-all ease-in-out`}
					data-animation={animation}
					data-overlay={isOpen}>
					<div className='bv-container-md'>
						<div
							className={`${style.cardMobile} ds-flex flow-col-nw align-center gap-lg radius-md`}>
							<div className={`w-100 ds-flex flow-col-nw align-center gap-sm`}>
								<Link
									href='/docs'
									className={`${style.itemMenu} w-100`}
									onClick={() => closeMenu()}>
									Documentação
								</Link>
								<Link
									href='/collection'
									className={`${style.itemMenu} w-100`}
									onClick={() => closeMenu()}>
									Coleções
								</Link>
								<Link
									href='/icons'
									className={`${style.itemMenu} w-100`}
									onClick={() => closeMenu()}>
									Ícones
								</Link>
							</div>
							<div
								className={`${style.growMiddle} ${style.github} w-fit ds-flex flow-row-nw justify-end align-center gap-sm`}>
								<span className={`${style.version}`}>1.1-beta</span>

								<Link
									href='https://github.com/BeviProjects/BeviIcon-Doc'
									target='_blank'
									rel='noopener noreferrer'>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g clipPath='url(#clip0_356_48)'>
											<path
												d='M6.68952 15.7016C6.68952 15.7823 6.59677 15.8468 6.47984 15.8468C6.34677 15.8589 6.25403 15.7944 6.25403 15.7016C6.25403 15.621 6.34677 15.5565 6.46371 15.5565C6.58468 15.5444 6.68952 15.6089 6.68952 15.7016ZM5.43548 15.5202C5.40726 15.6008 5.4879 15.6935 5.60887 15.7177C5.71371 15.7581 5.83468 15.7177 5.85887 15.6371C5.88306 15.5565 5.80645 15.4637 5.68548 15.4274C5.58064 15.3992 5.46371 15.4395 5.43548 15.5202ZM7.21774 15.4516C7.10081 15.4798 7.02016 15.5565 7.03226 15.6492C7.04435 15.7298 7.14919 15.7823 7.27016 15.754C7.3871 15.7258 7.46774 15.6492 7.45564 15.5685C7.44355 15.4919 7.33468 15.4395 7.21774 15.4516ZM9.87097 0C4.27823 0 0 4.24597 0 9.83871C0 14.3105 2.81452 18.1371 6.83468 19.4839C7.35081 19.5766 7.53226 19.2581 7.53226 18.996C7.53226 18.746 7.52016 17.3669 7.52016 16.5202C7.52016 16.5202 4.69758 17.125 4.10484 15.3185C4.10484 15.3185 3.64516 14.1452 2.98387 13.8427C2.98387 13.8427 2.06048 13.2097 3.04839 13.2218C3.04839 13.2218 4.05242 13.3024 4.60484 14.2621C5.4879 15.8185 6.96774 15.371 7.54435 15.1048C7.6371 14.4597 7.89919 14.0121 8.18952 13.746C5.93548 13.496 3.66129 13.1694 3.66129 9.29032C3.66129 8.18145 3.96774 7.625 4.6129 6.91532C4.50806 6.65323 4.16532 5.57258 4.71774 4.17742C5.56048 3.91532 7.5 5.26613 7.5 5.26613C8.30645 5.04032 9.17339 4.92339 10.0323 4.92339C10.8911 4.92339 11.7581 5.04032 12.5645 5.26613C12.5645 5.26613 14.504 3.91129 15.3468 4.17742C15.8992 5.57661 15.5565 6.65323 15.4516 6.91532C16.0968 7.62903 16.4919 8.18548 16.4919 9.29032C16.4919 13.1815 14.1169 13.4919 11.8629 13.746C12.2339 14.0645 12.5484 14.6694 12.5484 15.6169C12.5484 16.9758 12.5363 18.6573 12.5363 18.9879C12.5363 19.25 12.7218 19.5685 13.2339 19.4758C17.2661 18.1371 20 14.3105 20 9.83871C20 4.24597 15.4637 0 9.87097 0ZM3.91935 13.9073C3.86694 13.9476 3.87903 14.0403 3.94758 14.1169C4.0121 14.1815 4.10484 14.2097 4.15726 14.1573C4.20968 14.1169 4.19758 14.0242 4.12903 13.9476C4.06452 13.8831 3.97177 13.8548 3.91935 13.9073ZM3.48387 13.5806C3.45565 13.6331 3.49597 13.6976 3.57661 13.7379C3.64113 13.7782 3.72177 13.7661 3.75 13.7097C3.77823 13.6573 3.7379 13.5927 3.65726 13.5524C3.57661 13.5282 3.5121 13.5403 3.48387 13.5806ZM4.79032 15.0161C4.72581 15.0685 4.75 15.1895 4.84274 15.2661C4.93548 15.3589 5.05242 15.371 5.10484 15.3065C5.15726 15.254 5.13306 15.1331 5.05242 15.0565C4.96371 14.9637 4.84274 14.9516 4.79032 15.0161ZM4.33065 14.4234C4.26613 14.4637 4.26613 14.5685 4.33065 14.6613C4.39516 14.754 4.50403 14.7944 4.55645 14.754C4.62097 14.7016 4.62097 14.5968 4.55645 14.504C4.5 14.4113 4.39516 14.371 4.33065 14.4234Z'
												fill='black'
											/>
										</g>
										<defs>
											<clipPath id='clip0_356_48'>
												<rect width='20' height='20' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</aside>
			)}
			<div
				className={`background-overlay ps-fixed`}
				data-animation={animation}
				data-overlay={isOpen ? 'close' : 'open'}
				onClick={() => closeMenu()}></div>
		</header>
	)
}

export default index
