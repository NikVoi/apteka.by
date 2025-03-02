'use client'

import { useMedStore } from '@/entities/product/model/useMedStore'
import { MAX_PRICE, MIN_PRICE } from '@/shared/config/base'
import { Button } from '@/shared/ui/button'
import { X } from 'lucide-react'

const FilterItems = () => {
	const { filters, setFilters, setSorting, sorting } = useMedStore()

	const removeFilter = (key: keyof typeof filters, value?: string) => {
		if (key === 'minPrice' || key === 'maxPrice') {
			setFilters({ minPrice: MIN_PRICE, maxPrice: MAX_PRICE })
		} else if (value) {
			setFilters({
				[key]: filters[key].filter((item: string) => item !== value),
			})
		}
	}

	const resetFilters = () => {
		setFilters({
			minPrice: MIN_PRICE,
			maxPrice: MAX_PRICE,
			selectedBrands: [],
			selectedForms: [],
			selectedDossage: [],
			selectedQuantityPerPackage: [],
		})
	}

	const hasFilters =
		filters.minPrice > MIN_PRICE ||
		filters.maxPrice < MAX_PRICE ||
		filters.selectedBrands.length > 0 ||
		filters.selectedForms.length > 0 ||
		filters.selectedDossage.length > 0 ||
		filters.selectedQuantityPerPackage.length > 0

	return (
		<section className='flex flex-wrap gap-2 rounded-lg'>
			{hasFilters && (
				<Button
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={resetFilters}
				>
					Очистить <X size={14} />
				</Button>
			)}

			{(filters.minPrice > MIN_PRICE || filters.maxPrice < MAX_PRICE) && (
				<Button
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={() => removeFilter('minPrice')}
				>
					Цена: {filters.minPrice} р. - {filters.maxPrice} р. <X size={14} />
				</Button>
			)}

			{filters.selectedBrands.map(brand => (
				<Button
					key={brand}
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={() => removeFilter('selectedBrands', brand)}
				>
					{brand} <X size={14} />
				</Button>
			))}

			{filters.selectedForms.map(form => (
				<Button
					key={form}
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={() => removeFilter('selectedForms', form)}
				>
					{form} <X size={14} />
				</Button>
			))}

			{filters.selectedDossage.map(dossage => (
				<Button
					key={dossage}
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={() => removeFilter('selectedDossage', dossage)}
				>
					{dossage} <X size={14} />
				</Button>
			))}

			{filters.selectedQuantityPerPackage.map(qty => (
				<Button
					key={qty}
					variant='secondary'
					className='flex items-center gap-1 bg-gray-200 hover:text-blue-500 hover:line-through text-xs font-light'
					onClick={() => removeFilter('selectedQuantityPerPackage', qty)}
				>
					{qty} шт <X size={14} />
				</Button>
			))}
		</section>
	)
}

export default FilterItems
