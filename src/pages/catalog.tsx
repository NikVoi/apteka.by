import { FC } from 'react'
import styles from './catalog.module.scss'

interface Props {
	className?: string
}

const Catalog: FC<Props> = ({ className }) => {
	return <section className={styles.catalog}>catalog</section>
}

export default Catalog
