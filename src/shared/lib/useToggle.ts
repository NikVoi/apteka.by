import { useState } from 'react'

const useToggle = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState)

	const toggle = () => setIsOpen(prev => !prev)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)

	return { isOpen, toggle, open, close }
}

export default useToggle
