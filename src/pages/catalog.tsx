import ProductsList from '@/entities/product/productsList'
import FilterButtons from '@/features/filtering/ui/filterButtons'
import FilterItems from '@/features/filtering/ui/filterItems'
import FiltersAside from '@/features/filtering/ui/filtersAside'

const Catalog = () => {
	return (
		<section className='p-5 bg-[#f4f6fa] flex justify-center'>
			<div className='w-[1250px]'>
				<section className='flex justify-between  mb-5 w-full rounded-xl '>
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
