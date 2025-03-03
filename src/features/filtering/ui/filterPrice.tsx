'use client'

import { useMedStore } from '@/entities/product/model/useMedStore'
import { MAX_PRICE, MIN_PRICE } from '@/shared/config/base'
import useToggle from '@/shared/lib/useToggle'
import { cn } from '@/shared/lib/utils'
import { Input } from '@/shared/ui/input'
import { Slider } from '@/shared/ui/slider'
import { ChevronDownIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const FilterPrice = () => {
	const { filters, setFilters } = useMedStore()
	const { isOpen, toggle } = useToggle(true)
	const [tempRange, setTempRange] = useState([
		filters.minPrice,
		filters.maxPrice,
	])

	useEffect(() => {
		setTempRange([filters.minPrice, filters.maxPrice])
	}, [filters.minPrice, filters.maxPrice])

	const handlePriceCommit = useCallback(
		(newRange: number[]) => {
			setFilters({ minPrice: newRange[0], maxPrice: newRange[1] })
		},
		[setFilters]
	)

	return (
		<div className='mb-4'>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={toggle}
			>
				<h3 className='font-bold'>Цена</h3>
				<ChevronDownIcon
					size={16}
					className={cn(
						'transform transition-transform duration-200 ease-in-out',
						{ 'rotate-180': isOpen }
					)}
				/>
			</div>

			{isOpen && (
				<>
					<div className='flex items-center gap-2 my-4'>
						<Input
							type='number'
							value={tempRange[0]}
							min={MIN_PRICE}
							max={tempRange[1]}
							onChange={e =>
								setTempRange([Number(e.target.value), tempRange[1]])
							}
							className='w-1/2 border-none bg-[#f4f6fa]'
						/>
						<Input
							type='number'
							value={tempRange[1]}
							min={tempRange[0]}
							max={MAX_PRICE}
							onChange={e =>
								setTempRange([tempRange[0], Number(e.target.value)])
							}
							className='w-1/2  border-none bg-[#f4f6fa] '
						/>
					</div>

					<Slider
						value={tempRange}
						onValueChange={setTempRange}
						onValueCommit={handlePriceCommit}
						min={MIN_PRICE}
						max={MAX_PRICE}
						step={0.01}
					/>
				</>
			)}
		</div>
	)
}

export default FilterPrice
