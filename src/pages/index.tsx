// React / NextJS
import Head from 'next/head'

// External lib

// Internal lib

// Component
// atom
import { FadeIn } from '../components/atoms/animation'

// molecule
// organism

// Style module
import style from './Style.module.scss'

// Media

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<section className={style.secInit}>
				<div className='bv-container-sm'>
					<FadeIn.YtoTop>
						<div className={`${style.card} ds-flex flow-col-nw gap-lg`}>
							<div className='bv-row'>
								<div className='bv-col ds-flex flow-col-nw gap-md'>
									<h1 className='text-align-center font-weight-700 color-primary-02'>
										Bem-vindo ao BeviIcon
									</h1>
									<p className='font-size-lg text-align-center color-primary-01'>
										Comece a utilizar agora o{' '}
										<span className='color-primary-02 font-weight-500'>
											BeviIcon
										</span>{' '}
										no seu projeto!
									</p>
								</div>
							</div>
						</div>
					</FadeIn.YtoTop>
				</div>
			</section>
		</>
	)
}
