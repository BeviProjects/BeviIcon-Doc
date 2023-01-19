import React, { useEffect, useRef } from 'react'
import AmountSVG from '../../components/icon/amount'
import dark from '../../components/icon/dark'
import { Slot } from '@radix-ui/react-slot'

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const testRef = useRef(null)

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		console.log(testRef?.current)
	}, [testRef])

	return (
		<div ref={testRef}>
			<h1>Test</h1>
			<Slot ref={testRef}>
				<AmountSVG name='blocks'>{dark.blocks}</AmountSVG>
			</Slot>
		</div>
	)
}

export default index
