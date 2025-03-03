'use client'

import { useMedStore } from '@/entities/product/model/useMedStore'
import { Button } from '@/shared/ui/button'
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select'
import { SelectContent } from '@radix-ui/react-select'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const FilterButtons = () => {
	const { viewMode, setViewMode, setSorting, sorting } = useMedStore()

	return (
		<section className='flex items-start'>
			<Select value={sorting} onValueChange={setSorting}>
				<SelectTrigger className='w-[200px]'>
					<SelectValue placeholder='По релевантности' />
				</SelectTrigger>
				<SelectContent
					position='popper'
					className='absolute bg-white p-2 rounded-lg top-3 w-[200px] z-50 '
				>
					<SelectItem value='relevance'>По релевантности</SelectItem>
					<SelectItem value='asc'>Сначала дешевые</SelectItem>
					<SelectItem value='desc'>Сначала дорогие</SelectItem>
				</SelectContent>
			</Select>

			<div className='flex items-center ml-4 bg-white px-2 rounded-lg h-[40px] '>
				<Button
					variant={viewMode === 'grid' ? 'default' : 'outline'}
					className='mr-2 size-8 border-none shadow-none'
					onClick={() => setViewMode('grid')}
				>
					<BsFillGridFill />
				</Button>

				<Button
					variant={viewMode === 'list' ? 'default' : 'outline'}
					className='size-8 border-none shadow-none '
					onClick={() => setViewMode('list')}
				>
					<BsList />
				</Button>
			</div>
		</section>
	)
}

export default FilterButtons
