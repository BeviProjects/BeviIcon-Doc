import style from './Style.module.scss'

interface ButtonProps {
	dataAnimation: string
	onClick: () => void
}

const Button = ({ dataAnimation, onClick }: ButtonProps) => {
	return (
		<aside
			className={`${style.backgroundOverlay} ps-fixed`}
			data-animation={dataAnimation}
			onClick={() => onClick}
		/>
	)
}

export default Button
