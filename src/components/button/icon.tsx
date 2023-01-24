import style from './Style.module.scss'

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

export default Button
