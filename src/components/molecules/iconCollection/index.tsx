import { ReactNode } from 'react'
import style from './Style.module.scss'
import { FadeIn } from '../../atoms/animation/index'

interface IndexProps {
	styleSection?: string
	anchor: string
	title: string
	children: ReactNode
}

const Index = ({ styleSection, anchor, title, children }: IndexProps) => {
	return (
		<FadeIn.YtoTop>
			<section
				className={`${styleSection} ds-flex flow-col-nw gap-md`}
				id={anchor.toLowerCase()}>
				<h3 className='font-weight-600'>{title}</h3>
				<div
					className={`w-100 ds-grid grid-tpl-col-6 lg:grid-tpl-col-5 md:grid-tpl-col-4 sm:grid-tpl-col-2 gap-lg`}>
					{children}
				</div>
			</section>
		</FadeIn.YtoTop>
	)
}

export default Index
