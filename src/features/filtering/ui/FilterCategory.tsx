import { useMedStore } from '@/entities/product/model/useMedStore'
import useToggle from '@/shared/lib/useToggle'
import { cn } from '@/shared/lib/utils'
import { Checkbox } from '@/shared/ui/checkbox'
import { ChevronDownIcon } from 'lucide-react'
import { FC } from 'react'
import { IFilterCategoryProps } from '../model/types'

const FilterCategory: FC<IFilterCategoryProps> = ({
	title,
	options,
	filterKey,
	formatValue,
}) => {
	const { filters, setFilters } = useMedStore()
	const { isOpen, toggle } = useToggle(true)

	const handleCheckboxChange = (value: string | number) => {
		const stringValue = String(value)
		setFilters({
			[filterKey]: filters[filterKey].includes(stringValue)
				? filters[filterKey].filter(item => item !== stringValue)
				: [...filters[filterKey], stringValue],
		})
	}

	return (
		<div className='my-4 '>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={toggle}
			>
				<h3 className='font-bold '>{title}</h3>
				<ChevronDownIcon
					size={16}
					className={cn(
						'transform transition-transform duration-200 ease-in-out',
						{ 'rotate-180': isOpen }
					)}
				/>
			</div>

			{isOpen && (
				<div className='h-[240px] overflow-y-auto mt-2 '>
					{options.map(option => (
						<div key={option} className='flex items-center mb-2  '>
							<Checkbox
								checked={filters[filterKey].includes(String(option))}
								onCheckedChange={() => handleCheckboxChange(option)}
							/>
							<label className='ml-2 opacity-50'>
								{formatValue ? formatValue(option) : option}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default FilterCategory
