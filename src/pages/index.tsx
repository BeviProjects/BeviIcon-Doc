import Head from 'next/head'
import Image from 'next/image'
import style from './Style.module.scss'
import Link from 'next/link'
import BtnCopy from '../components/button/copy'
import { FadeIn } from '../components/animation'

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
							{/* <div className='bv-row'>
								<div className='bv-col'>
									<code>
										https://cdn.jsdelivr.net/gh/BeviProjects/BeviIconFont@v1.0-beta/dist/compressed/main.css
										<BtnCopy contentCopy='https://cdn.jsdelivr.net/gh/BeviProjects/BeviIconFont@v1.0-beta/dist/compressed/main.css' />
									</code>
								</div>
							</div> */}
						</div>
					</FadeIn.YtoTop>
				</div>
			</section>
		</>
	)
}
