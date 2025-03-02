'use client'

import { useMedStore } from '@/entities/product/model/useMedStore'
import { MAX_PRICE, MIN_PRICE } from '@/shared/config/base'
import {
	brand,
	dossage,
	quantityPerPackage,
	releaseForm,
} from '@/shared/config/filters'
import { Button } from '@/shared/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import FilterCategory from './FilterCategory'
import FilterPrice from './filterPrice'

const FiltersAside = () => {
	const { setFilters } = useMedStore()

	const resetFilters = () => {
		setFilters({
			selectedBrands: [],
			selectedForms: [],
			selectedDossage: [],
			selectedQuantityPerPackage: [],
			minPrice: MIN_PRICE,
			maxPrice: MAX_PRICE,
		})
	}

	return (
		<aside className='w-[270px] h-full bg-white rounded-xl p-4 mr-4'>
			<Button variant='secondary' className='w-full mb-4'>
				<ChevronLeftIcon /> Антибактериальные средства
			</Button>

			<FilterPrice />
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
			/>

			<Button
				variant='secondary'
				className='w-full mt-4'
				onClick={resetFilters}
			>
				Сбросить фильтры
			</Button>
		</aside>
	)
}

export default FiltersAside
