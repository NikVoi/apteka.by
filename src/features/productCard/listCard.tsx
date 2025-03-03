import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import { FC } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IItemProps } from './model/types'

const ListCard: FC<IItemProps> = ({ product }) => {
	return (
		<div className='w-full bg-white flex justify-between p-4 rounded-lg cursor-pointer hover:shadow-lg  duration-200'>
			<Image src={product.image} alt='image' width={215} height={215} />

			<div className=' flex-1 px-2 border-r border-solid border-gray-200'>
				<div className='mb-3'>{product.title}</div>

				<p className='text-sm mb-2'>
					<span className='opacity-50'>Производитель: </span>
					<span>
						{product.characteristics.brand}, {product.characteristics.country}
					</span>
				</p>

				<p className='text-sm mb-2'>
					<span className='opacity-50'>Форма выпуска: </span>
					<span>{product.characteristics.releaseForm}</span>
				</p>

				<p className='text-sm mb-2'>
					<span className='opacity-50'>Дозировка: </span>
					<span>{product.characteristics.dossage}</span>
				</p>
			</div>

			<div className='flex flex-col justify-between items-end ml-4'>
				<div className='font-bold'>{product.price} р.</div>

				<div>
					<div className='flex justify-between mb-4 '>
						<Button className='w-2/3 '>В корзину</Button>
						<Button
							variant={'ghost'}
							className='text-4xl w-1/3 hover:bg-white hover:text-red-400'
						>
							<CiHeart className='size-8' />
						</Button>
					</div>

					<div className='opacity-70 text-xs'>
						Оплата в аптеке при получении
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListCard
