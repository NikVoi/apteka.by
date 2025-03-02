import ProductsList from '@/entities/medical/ui/productsList'
import FiltersAside from '@/features/filters/filtersAside'

const Catalog = () => {
	return (
		<section className='flex justify-between'>
			<FiltersAside />

			<ProductsList />
		</section>
	)
}

export default Catalog
