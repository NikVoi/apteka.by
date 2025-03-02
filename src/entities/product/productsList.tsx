'use client'

import GridCard from '@/features/productCard/gridCard'
import ListCard from '@/features/productCard/listCard'
import PaginationControls from '@/shared/ui/pagination/PaginationControls'
import { usePaginationStore } from '@/shared/ui/pagination/paginationStore'
import { useEffect } from 'react'
import { useMedStore } from './model/useMedStore'

const ProductsList = () => {
	const { products, fetchProducts, isLoading, error, viewMode } = useMedStore()
	const { currentPage, itemsPerPage = 12, setPage } = usePaginationStore()

	useEffect(() => {
		fetchProducts()
	}, [])

	const totalPages = Math.ceil(products.length / itemsPerPage)
	const paginatedProducts = products.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)

	if (isLoading) {
		return (
			<p className='w-full text-center text-gray-600 mt-4'>
				Загрузка товаров...
			</p>
		)
	}

	if (error) {
		return <p className='w-full text-center text-red-500 mt-4'>{error}</p>
	}

	return (
		<section className='w-full '>
			{paginatedProducts.length > 0 ? (
				<>
					<div
						className={
							viewMode === 'grid'
								? 'grid grid-cols-4 gap-4'
								: 'flex flex-col gap-4'
						}
					>
						{paginatedProducts.map(product =>
							viewMode === 'grid' ? (
								<GridCard key={product.id} product={product} />
							) : (
								<ListCard key={product.id} product={product} />
							)
						)}
					</div>

					{totalPages > 1 && (
						<PaginationControls
							currentPage={currentPage}
							totalPages={totalPages}
							setPage={setPage}
						/>
					)}
				</>
			) : (
				<p className='text-center text-gray-600 mt-4'>Товары не найдены</p>
			)}
		</section>
	)
}

export default ProductsList
