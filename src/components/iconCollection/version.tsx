import { ReactNode } from 'react'
import style from './Style.module.scss'
import { FadeIn } from '../animation/index'

export interface RootProps {
	styleSection?: string
	anchor: string
	title: string
	children: ReactNode
}

const Root = ({ styleSection, anchor, title, children }: RootProps) => {
	return (
		<FadeIn.YtoTop>
			<section
				className={`${styleSection} ds-flex flow-col-nw gap-lg`}
				id={anchor.toLowerCase()}>
				<h3 className='font-weight-600'>{title}</h3>
				<div className={`w-100 ds-flex flow-col-nw gap-md`}>{children}</div>
			</section>
		</FadeIn.YtoTop>
	)
}
Root.displayName = 'Root.Root'

export interface UpdateAreaProps {
	children: ReactNode
}
const UpdateArea = ({ children }: UpdateAreaProps) => {
	return (
		<div className='ds-flex flow-col-nw gap-sm'>
			<h4>Atualizados</h4>
			<div className='w-100 ds-grid grid-tpl-col-6 lg:grid-tpl-col-5 md:grid-tpl-col-4 sm:grid-tpl-col-2 gap-lg'>
				{children}
			</div>
		</div>
	)
}
UpdateArea.displayName = 'IconCollectionVersion.UpdateArea'

export interface NewAreaProps {
	children: ReactNode
}
const NewArea = ({ children }: NewAreaProps) => {
	return (
		<div className='ds-flex flow-col-nw gap-sm'>
			<h4>Novos ícones</h4>
			<div className='w-100 ds-grid grid-tpl-col-6 lg:grid-tpl-col-5 md:grid-tpl-col-4 sm:grid-tpl-col-2 gap-lg'>
				{children}
			</div>
		</div>
	)
}
NewArea.displayName = 'IconCollectionVersion.NewArea'

export const IconCollectionVersion = {
	Root: Root,
	UpdateArea: UpdateArea,
	NewArea: NewArea,
}
