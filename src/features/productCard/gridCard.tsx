import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import { FC } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IItemProps } from './model/types'

const GridCard: FC<IItemProps> = ({ product }) => {
	return (
		<div
			className='flex flex-col justify-between h-[450px] items-center p-4  bg-[#ffff] rounded-xl hover:cursor-pointer hover:shadow-md duration-200'
			key={product.id}
		>
			<div className='relative'>
				<Image src={product.image} alt='image' width={215} height={215} />

				{product.characteristics.isByPrescription && (
					<p className='absolute bottom-2 left-2 text-xs bg-red-200 px-2  rounded-[4px] text-red-400'>
						По рецепту
					</p>
				)}
			</div>

			<div className='flex flex-col justify-between flex-1'>
				<p className='font-bold my-2'>{product.price} р.</p>
				<p className='text-sm'>{product.title}</p>

				<p className='text-xs opacity-50'>
					{product.characteristics.brand}, {product.characteristics.country}
				</p>

				<div className='flex justify-between '>
					<Button className='w-2/3 '>В корзину</Button>
					<Button
						variant={'ghost'}
						className='text-4xl w-1/3 hover:bg-white hover:text-red-400'
					>
						<CiHeart className='size-8 ' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default GridCard
