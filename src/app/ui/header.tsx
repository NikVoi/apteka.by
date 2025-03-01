import { FC } from 'react'
import styles from './header.module.scss'

interface Props {
	className?: string
}

const Header: FC<Props> = ({ className }) => {
	return <section className={styles.header}>header</section>
}

export default Header
