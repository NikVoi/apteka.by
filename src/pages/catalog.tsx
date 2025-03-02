import ProductsList from '@/entities/medical/productsList'
import FiltersAside from '@/features/filters/filtersAside'
import FilterButtons from '@/features/filters/ui/filterButtons/filterButtons'
import FilterItems from '@/features/filters/ui/filterItems/filterItems'

const Catalog = () => {
	console.log(`${process.env.API}/api/products`)

	return (
		<section className='p-5 bg-[#f4f6fa] flex justify-center'>
			<div className='w-[1250px]'>
				<section className='flex justify-between  mb-5 w-full rounded-xl p-4'>
					<FilterItems />
					<FilterButtons />
				</section>

				<section className='flex justify-center '>
					<FiltersAside />
					<ProductsList />
				</section>
			</div>
		</section>
	)
}

export default Catalog
