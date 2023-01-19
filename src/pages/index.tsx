import Head from 'next/head'
import Image from 'next/image'
import style from './Style.module.scss'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<section className={style.secInit}>
				<div className='bv-container-sm ds-flex flow-col-nw gap-lg'>
					<div className='bv-row'>
						<div className='bv-col ds-flex flow-col-nw gap-md'>
							<h1 className='text-align-center font-weight-700 color-primary-02'>
								Bem vindo ao BeviIcon
							</h1>
							<p className='font-size-lg text-align-center color-primary-01'>
								Comece a utilizar agora a versão <b>Solid</b> de todos os ícones
								da Bevi via <b>CDN</b>
							</p>
						</div>
					</div>
					<div className='bv-row'>
						<div className='bv-col'>
							<code>
								https://cdn.jsdelivr.net/gh/BeviProjects/BeviIconFont@v1.0-beta/dist/compressed/main.css
							</code>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
