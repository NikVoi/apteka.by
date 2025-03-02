import { useMedStore } from '@/entities/medical/useMedStore'
import useToggle from '@/shared/lib/useToggle'
import { Checkbox } from '@/shared/ui/checkbox'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface FilterCategoryProps {
	title: string
	options: (string | number)[]
	filterKey:
		| 'selectedBrands'
		| 'selectedForms'
		| 'selectedDossage'
		| 'selectedQuantityPerPackage'
	formatValue?: (value: string | number) => string
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
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
		<div className='m-4'>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={toggle}
			>
				<h3 className='font-bold '>{title}</h3>
				{isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
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
