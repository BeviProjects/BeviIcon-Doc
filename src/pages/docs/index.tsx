// React / NextJS
import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// External lib

// Internal lib
import BvIcon from '../../../lib/bvIcon'

// Component
// atom
import BtnCopy from '../../components/atoms/btnCopy'
import { FadeIn } from '../../components/atoms/animation'
import CardNew from '../../components/atoms/cardNew'

// molecule
// organism

// Style module
import styleMain from '../Style.module.scss'
import style from './Style.module.scss'

// Media
import ImageZero from '/public/image/docs/docs-00.jpg'
import ImageZeroMobile from '/public/image/docs/docs-00-mobile.png'

export default function Index() {
	return (
		<>
			<Head>
				<title>Documentação</title>
			</Head>
			<div className='bv-container-sm ds-flex flow-col-nw gap-lg'>
				<section>
					<CardNew />
				</section>
				<section>
					<div className={`${styleMain.card} ds-flex flow-col-nw gap-xl`}>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-sm'>
								<h1>Bevi Icon</h1>
								<p className='font-size-lg'>
									Esse sistema tem como objetivo auxiliar todos os funcionários
									da Bevi para utilização correta dos ícones.
								</p>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h2>Como utilizar</h2>
									<p>
										Para visualizar os ícones você pode acessar a aba de{' '}
										<Link href='/icons' className='button sm'>
											Coleções
										</Link>{' '}
										ou{' '}
										<Link href='/icons' className='button sm'>
											Ícones
										</Link>
										, ao observar todos os ícones, pode notar que é possível
										clicar para ver mais opções, e após abrir novas informações,
										verá esse menu.
									</p>
								</div>
								<picture>
									<Image
										src={ImageZeroMobile}
										alt={'Menu de opções para seleção de ícone'}
										className='object-contain ds-none lg:ds-block'
									/>
									<Image
										src={ImageZero}
										alt={'Menu de opções para seleção de ícone'}
										className='object-contain ds-blcok lg:ds-none'
									/>
								</picture>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h3 className='font-weight-600'>Tipos de ícones</h3>
									<p>
										A biblioteca de ícones da Bevi tem a separação de 4 tipos,
										são eles:
									</p>
								</div>
								<div className='ds-grid grid-tpl-col-2 sm:grid-tpl-col-1 gap-md'>
									<CardIcon
										title='Solid'
										description='Ícones solidos possuem sempre uma cor única.'
										usage={
											<ul className='ds-flex flow-col-nw gap-xs'>
												<li>Permite a alteração para qualquer cor</li>
												<li>Ideal para aplicações pequenas</li>
												<li>Ideal para aplicação em texto</li>
											</ul>
										}>
										<BvIcon name={'eco'} variant={'solid'} />
									</CardIcon>
									<CardIcon
										title='Duo'
										description='Ícones de dois tons, vão sempre variar entre a cor primaria e secundária da Bevim com graus de opacidade.'
										usage={
											<ul className='ds-flex flow-col-nw gap-xs'>
												<li>Ideal para aplicações grandes</li>
											</ul>
										}>
										<BvIcon name={'eco'} variant={'duo'} />
									</CardIcon>
									<CardIcon
										title='Dark'
										description='Ícones escuros se mantém em uma única cor, com graus de opacidade quando necessário.'
										usage={
											<ul className='ds-flex flow-col-nw gap-xs'>
												<li>Ideal para fundos claros</li>
												<li>Ideal para aplicações grandes</li>
												<li>Ideal para aplicações pequenas</li>
											</ul>
										}>
										<BvIcon name={'eco'} variant={'dark'} />
									</CardIcon>
									<CardIcon
										title='Light'
										description='Ícones claros se mantém em uma única cor, com graus de opacidade quando necessário.'
										usage={
											<ul className='ds-flex flow-col-nw gap-xs'>
												<li>Ideal para fundos escuros</li>
												<li>Ideal para aplicações grandes</li>
												<li>Ideal para aplicações pequenas</li>
											</ul>
										}>
										<BvIcon name={'eco'} variant={'light'} />
									</CardIcon>
								</div>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h3 className='font-weight-600'>Ações</h3>
									<p>
										Pelo menu de interação, além de escolher o tipo de ícone que
										deseja, pode escolher a ação que deseja realizar
									</p>
								</div>
								<div className='ds-flex flow-col-nw gap-sm'>
									<div className='ds-flex flow-row-nw align-start gap-md'>
										<button
											type='button'
											className={`${style.btnExample} button`}
											aria-label='Exemplo de botão para cópia'>
											<svg
												width='20'
												height='20'
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M12.2742 2.03939C11.743 1.88548 11.1898 2.19645 11.0367 2.73044L7.03672 16.8026C6.8836 17.3366 7.19297 17.8926 7.72422 18.0465C8.25547 18.2004 8.8086 17.8895 8.96172 17.3555L12.9617 3.28327C13.1148 2.74928 12.8055 2.19331 12.2742 2.03939ZM14.793 5.81186C14.4023 6.2045 14.4023 6.84214 14.793 7.23478L17.5836 10.0429L14.7898 12.8511C14.3992 13.2438 14.3992 13.8814 14.7898 14.2741C15.1805 14.6667 15.8148 14.6667 16.2055 14.2741L19.7055 10.756C20.0961 10.3633 20.0961 9.72568 19.7055 9.33304L16.2055 5.815C15.8148 5.42236 15.1805 5.42236 14.7898 5.815L14.793 5.81186ZM5.2086 5.81186C4.81797 5.41922 4.1836 5.41922 3.79297 5.81186L0.292969 9.3299C-0.0976562 9.72254 -0.0976562 10.3602 0.292969 10.7528L3.79297 14.2709C4.1836 14.6636 4.81797 14.6636 5.2086 14.2709C5.59922 13.8783 5.59922 13.2406 5.2086 12.848L2.41485 10.0429L5.2086 7.23478C5.59922 6.84214 5.59922 6.2045 5.2086 5.81186Z'
													fill='#222343'
												/>
											</svg>
										</button>
										<div className='ds-flex flow-col-nw gap-xs'>
											<h4 className='font-weight-600'>Copiar SVG</h4>
											<p>
												A cópia do SVG será adicionado automaticamente em sua
												área de transferência, possibilitando colar o ícone em
												algum software desejado ou diretamente em código.
											</p>
										</div>
									</div>
									<div className='ds-flex flow-row-nw align-start gap-md'>
										<button
											type='button'
											className={`${style.btnExample} button`}
											aria-label='Exemplo de botão para cópia'>
											<svg
												width='20'
												height='20'
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<g clipPath='url(#clip0_460_21)'>
													<path
														d='M11.25 1.25C11.25 0.558594 10.6914 0 10 0C9.30859 0 8.75 0.558594 8.75 1.25V10.7305L5.88281 7.86328C5.39453 7.375 4.60156 7.375 4.11328 7.86328C3.625 8.35156 3.625 9.14453 4.11328 9.63281L9.11328 14.6328C9.60156 15.1211 10.3945 15.1211 10.8828 14.6328L15.8828 9.63281C16.3711 9.14453 16.3711 8.35156 15.8828 7.86328C15.3945 7.375 14.6016 7.375 14.1133 7.86328L11.25 10.7305V1.25ZM2.5 13.75C1.12109 13.75 0 14.8711 0 16.25V17.5C0 18.8789 1.12109 20 2.5 20H17.5C18.8789 20 20 18.8789 20 17.5V16.25C20 14.8711 18.8789 13.75 17.5 13.75H13.5352L11.7656 15.5195C10.7891 16.4961 9.20703 16.4961 8.23047 15.5195L6.46484 13.75H2.5ZM16.875 17.8125C16.3555 17.8125 15.9375 17.3945 15.9375 16.875C15.9375 16.3555 16.3555 15.9375 16.875 15.9375C17.3945 15.9375 17.8125 16.3555 17.8125 16.875C17.8125 17.3945 17.3945 17.8125 16.875 17.8125Z'
														fill='#222343'
													/>
												</g>
												<defs>
													<clipPath id='clip0_460_21'>
														<rect width='20' height='20' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</button>
										<div className='ds-flex flow-col-nw gap-xs'>
											<h4 className='font-weight-600'>Download SVG</h4>
											<p>
												Quando clicar, será realizado o download do ícone
												desejado automaticamente
											</p>
										</div>
									</div>
								</div>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-sm'>
								<h2 className='font-weight-600'>CDN</h2>
								<p>
									Para os programadores, está disponível um <b>CDN</b> com todos
									os ícones da verão <b>Solid</b>, dessa forma fica mais leve e
									rápida a aplicação em códigos.
								</p>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h3 className='font-weight-600'>Repositório no GitHub</h3>
									<p>
										Caso queira acompanhar o desenvolvimento da biblioteca de
										ícones
									</p>
								</div>
								<code>
									https://github.com/BeviProjects/BeviIconFont/tree/v1.0.1
									<BtnCopy contentCopy='https://github.com/BeviProjects/BeviIconFont/tree/v1.0.1' />
								</code>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h3 className='font-weight-600'>Link CDN</h3>
									<p>
										Para utilização dos ícones solid em código, basta copiar o
										link CDN e aplicar em seu código HTML.
									</p>
								</div>
								<code>
									&#60;link
									<br />
									rel=&#34;stylesheet&#34;
									<br />
									href=&#34;https://cdn.jsdelivr.net/gh/BeviProjects/BeviIconFont@v1.0.1/dist/compressed/main.css&#34;
									/&#62;
									<BtnCopy contentCopy='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BeviProjects/BeviIconFont@v1.0.1/dist/compressed/main.css" />' />
								</code>
							</div>
						</FadeIn.YtoTop>
						<FadeIn.YtoTop>
							<div className='ds-flex flow-col-nw gap-md'>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h3 className='font-weight-600'>Aplicação em HTML</h3>
									<p>
										Para aplicar diretamente no seu código, é preciso adicionar
										em um elemento &#60;i&#62; a <b>class</b> que deseja seguida
										de algumas regras:
										<br />
										<br />
										<b>Prefixo:</b> bv-{' '}
										<span className='font-style-italic'>
											Abreviação de Bevi Icon
										</span>
										<br />
										<b>Conteúdo:</b> eco{' '}
										<span className='font-style-italic'>Nome do ícone</span>
										<br />
										<b>Sufixo:</b> -solid{' '}
										<span className='font-style-italic'>Tipo do ícone</span>
									</p>
								</div>
								<div className='ds-flex flow-col-nw gap-sm'>
									<h4 className='font-weight-600'>Exemplo:</h4>
									<code>
										&#60;i class=&#34;bv-eco-solid&#34; /&#62;
										<BtnCopy contentCopy='<i class="bv-eco-solid" />' />
									</code>
								</div>
							</div>
						</FadeIn.YtoTop>
					</div>
				</section>
			</div>
		</>
	)
}

interface CardIconProps {
	children: ReactNode
	title: string
	description: string
	usage?: ReactNode
}

const CardIcon = ({ title, description, usage, children }: CardIconProps) => {
	return (
		<div className={`${style.cardShow} radius-lg ds-flex flow-col-nw gap-md`}>
			<div className='ds-flex flow-col-nw gap-sm'>
				<div
					className={`${style.cardShowIcon} ds-flex-center radius-md bgc-gray-01`}>
					{children}
				</div>
				<h4 className='font-weight-600 color-primary-01'>{title}</h4>
				<p>{description}</p>
			</div>
			<div className='ds-flex flow-col-nw gap-sm'>
				<h5 className='font-weight-600'>Aplicação:</h5>
				{usage}
			</div>
		</div>
	)
}
