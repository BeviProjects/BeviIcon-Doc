import React, { ReactNode, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

interface FadeInProps {
	children: ReactNode
	durationProp?: number
	delayProp?: number
}

export function FadeInYtoTop({
	children,
	durationProp,
	delayProp,
}: FadeInProps) {
	const animationControl = useAnimationControls()
	const ref = useRef(null)
	const isInView = useInView(ref)

	if (!durationProp) {
		durationProp = 0.4
	}

	if (isInView) {
		animationControl.start({
			opacity: 1,
			y: 0,
			transition: {
				type: 'tween',
				delay: delayProp,
				duration: durationProp,
			},
		})
	}

	return (
		<motion.div
			className='h-100 w-100'
			ref={ref}
			initial={{
				opacity: 0,
				y: 50,
			}}
			animate={animationControl}>
			{children}
		</motion.div>
	)
}
FadeInYtoTop.displayName = 'FadeIn.YtoTop'

export function FadeInYtoBottom({
	children,
	durationProp,
	delayProp,
}: FadeInProps) {
	const animationControl = useAnimationControls()
	const ref = useRef(null)
	const isInView = useInView(ref)

	if (isInView) {
		animationControl.start({
			opacity: 1,
			y: 0,
			transition: {
				type: 'tween',
				delay: delayProp,
				duration: durationProp,
			},
		})
	}

	return (
		<motion.div
			className='h-100 w-100'
			ref={ref}
			initial={{
				opacity: 0,
				y: -50,
			}}
			animate={animationControl}>
			{children}
		</motion.div>
	)
}
FadeInYtoBottom.displayName = 'FadeIn.YtoBottom'

export function FadeInOpacity({
	children,
	durationProp,
	delayProp,
}: FadeInProps) {
	const animationControl = useAnimationControls()
	const ref = useRef(null)
	const isInView = useInView(ref)

	if (!delayProp) {
		delayProp = 0.2
	}
	if (!durationProp) {
		delayProp = 0.4
	}

	if (isInView) {
		animationControl.start({
			opacity: 1,
			transition: {
				type: 'tween',
				delay: delayProp,
				duration: durationProp,
			},
		})
	}

	return (
		<motion.div
			className='h-100 w-100'
			ref={ref}
			initial={{
				opacity: 0,
			}}
			animate={animationControl}>
			{children}
		</motion.div>
	)
}
FadeInOpacity.displayName = 'FadeIn.Opacity'

export const FadeIn = {
	YtoTop: FadeInYtoTop,
	YtoBottom: FadeInYtoBottom,
	Opacity: FadeInOpacity,
}
