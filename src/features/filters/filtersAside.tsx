'use client'

import { useMedStore } from '@/entities/medical/useMedStore'
import { MAX_PRICE, MIN_PRICE } from '@/shared/constants/base'
import {
	brand,
	dossage,
	quantityPerPackage,
	releaseForm,
} from '@/shared/constants/filters'
import useToggle from '@/shared/lib/useToggle'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Slider } from '@/shared/ui/slider'
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon } from 'lucide-react'
import { FC, useState } from 'react'
import FilterCategory from './FilterCategory'

const FiltersAside: FC = () => {
	const { filters, setFilters } = useMedStore()
	const [tempRange, setTempRange] = useState([
		filters.minPrice,
		filters.maxPrice,
	])
	const { isOpen, toggle } = useToggle(true)

	const handlePriceCommit = (newRange: number[]) => {
		setFilters({ minPrice: newRange[0], maxPrice: newRange[1] })
	}

	const handlePriceChange = (newRange: number[]) => {
		setTempRange(newRange)
		setFilters({ minPrice: newRange[0], maxPrice: newRange[1] })
	}

	return (
		<aside className='w-[270px] h-full bg-white rounded-xl mr-5'>
			<div className='flex justify-center p-2 my-4'>
				<Button variant='secondary'>
					<ChevronLeftIcon /> Антибактериальные средства
				</Button>
			</div>

			<hr className='text-gray-200' />

			<div className='m-4'>
				<div
					className='flex justify-between items-center cursor-pointer'
					onClick={toggle}
				>
					<h3 className='font-bold '>Цена</h3>
					{isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
				</div>

				{isOpen && (
					<>
						<p className='text-sm font-medium text-gray-700 mb-4 flex items-center gap-2'>
							<span>От</span>
							<Input
								type='number'
								value={tempRange[0]}
								min={MIN_PRICE}
								max={tempRange[1]}
								className='w-16 text-center'
								onChange={e => {
									const newMin = Number(e.target.value)
									setTempRange([newMin, tempRange[1]])
									setFilters({ minPrice: newMin, maxPrice: tempRange[1] })
								}}
							/>

							<span>до</span>
							<Input
								type='number'
								value={tempRange[1]}
								min={tempRange[0]}
								max={MAX_PRICE}
								className='w-16 text-center'
								onChange={e => {
									const newMax = Number(e.target.value)
									setTempRange([tempRange[0], newMax])
									setFilters({ minPrice: tempRange[0], maxPrice: newMax })
								}}
							/>
							<span>р.</span>
						</p>

						<Slider
							value={tempRange}
							onValueChange={handlePriceChange}
							onValueCommit={handlePriceCommit}
							min={MIN_PRICE}
							max={MAX_PRICE}
							step={0.01}
						/>
					</>
				)}
			</div>

			<hr className='text-gray-200' />

			<FilterCategory
				title='Бренд'
				options={brand}
				filterKey='selectedBrands'
			/>

			<hr className='text-gray-200' />

			<FilterCategory
				title='Форма выпуска'
				options={releaseForm}
				filterKey='selectedForms'
			/>

			<hr className='text-gray-200' />

			<FilterCategory
				title='Дозировка'
				options={dossage}
				filterKey='selectedDossage'
			/>

			<hr className='text-gray-200' />

			<FilterCategory
				title='Количество в упаковке'
				options={quantityPerPackage}
				filterKey='selectedQuantityPerPackage'
				formatValue={q => `${q} шт`}
			/>

			<hr className='text-gray-200' />

			<div className='m-4'>
				<Button
					variant='secondary'
					onClick={() =>
						setFilters({
							selectedBrands: [],
							selectedForms: [],
							selectedDossage: [],
							selectedQuantityPerPackage: [],
							minPrice: MIN_PRICE,
							maxPrice: MAX_PRICE,
						})
					}
				>
					Сбросить фильтры
				</Button>
			</div>
		</aside>
	)
}

export default FiltersAside
