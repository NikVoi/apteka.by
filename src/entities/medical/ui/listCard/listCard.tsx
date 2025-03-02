import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import { FC } from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './listCard.module.css'

interface Props {
	className?: string
}

const ListCard: FC<Props> = ({ className }) => {
	return (
		<div className='w-2/3'>
			<Image src={''} alt='' width={300} height={200} />

			<div className={styles.content}>
				<div className={styles.recipe}></div>

				<span className={styles.title}></span>

				<span className={styles.product}></span>
				<span className={styles.form}></span>
				<span className={styles.doza}></span>
			</div>

			<div className={styles.no}></div>
			<span className={styles.price}></span>

			<div className={styles.wrapper}>
				<Button variant={'ghost'}>В корзину</Button>
				<Button variant={'ghost'}>
					<FaHeart />
				</Button>
			</div>
		</div>
	)
}

export default ListCard
