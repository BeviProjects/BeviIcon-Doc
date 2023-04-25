import style from './Style.module.scss'

interface ButtonProps {
	name: string
	setIsOpen: (value: boolean) => void
	setNameIcon: (value: string) => void
}

const Button = ({ name, setIsOpen, setNameIcon }: ButtonProps) => {
	const camelCaseName = name
		.split(' ')
		.map((word, index) => {
			if (index === 0) {
				return word.toLowerCase()
			} else {
				const firstLetter = word[0].toUpperCase()
				const restOfWord = word.slice(1).toLowerCase()
				return firstLetter + restOfWord
			}
		})
		.join('')

	return (
		<button
			type='button'
			onClick={() => [setIsOpen(true), setNameIcon(camelCaseName)]}
			className={`${style.iconBtn} ds-flex-center`}
			aria-label={`Botão ${name}`}>
			<i
				className={`bv-${name
					.replace(/\s/g, '-')
					.toLocaleLowerCase()}-solid display-sm`}></i>
		</button>
	)
}

export default Button
