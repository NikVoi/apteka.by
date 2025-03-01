import { FC } from 'react'
import styles from './footer.module.scss'

interface Props {
	className?: string
}

const Footer: FC<Props> = ({ className }) => {
	return <section className={styles.footer}>footer</section>
}

export default Footer
