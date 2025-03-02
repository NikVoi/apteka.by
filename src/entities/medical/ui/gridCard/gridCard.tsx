import { IProduct } from '@/shared/types/IProduct'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import { FC } from 'react'
import { FaHeart } from 'react-icons/fa6'
import styles from './gridCard.module.css'

interface GridCardProps {
	product: IProduct
}

const GridCard: FC<GridCardProps> = ({ product }) => {
	console.log(product)
	return (
		<div className={styles.gridCard} key={product.id}>
			<Image src={product.image} alt='medical' width={215} height={215} />
			<div className={styles.content}>
				<div className={styles.recipe}></div>
				<div className={styles.no}></div>

				<p className={styles.price}>{product.price}</p>
				<p className={styles.description}>{product.title}</p>
				<p className={styles.brand}></p>

				<div className={styles.wrapper}>
					<Button variant={'secondary'}>В корзину</Button>
					<Button variant={'ghost'}>
						<FaHeart />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default GridCard
