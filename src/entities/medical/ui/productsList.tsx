'use client'
import { IProduct } from '@/shared/types/IProduct'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/shared/ui/pagination'
import { FC, useEffect } from 'react'
import { useMedStore } from '../medStore'
import GridCard from './gridCard/gridCard'
import ListCard from './listCard/listCard'

interface Props {
	className?: string
}

const ProductsList: FC = () => {
	const { products, viewMode, fetchProducts, pagination, setPage } =
		useMedStore()
	const { currentPage, itemsPerPage } = pagination

	useEffect(() => {
		fetchProducts()
	}, [])

	const totalPages = Math.ceil(products.length / itemsPerPage)

	const paginatedProducts = products.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)

	return (
		<section className='w-2/3'>
			{paginatedProducts.length > 0 ? (
				<>
					<div className='grid grid-cols-3 gap-4'>
						{paginatedProducts.map((product: IProduct) =>
							viewMode === 'grid' ? (
								<GridCard key={product.id} product={product} />
							) : (
								<ListCard key={product.id} />
							)
						)}
					</div>

					{totalPages > 1 && (
						<Pagination className='mt-4'>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious
										onClick={() => setPage(currentPage - 1)}
									/>
								</PaginationItem>
								{Array.from({ length: totalPages }, (_, i) => (
									<PaginationItem key={i}>
										<button
											className={`px-3 py-1 rounded ${
												currentPage === i + 1
													? 'bg-blue-500 text-white'
													: 'bg-gray-200'
											}`}
											onClick={() => setPage(i + 1)}
										>
											{i + 1}
										</button>
									</PaginationItem>
								))}
								<PaginationItem>
									<PaginationNext onClick={() => setPage(currentPage + 1)} />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					)}
				</>
			) : (
				<p className='text-center text-gray-600 mt-4'>Товары не найдены</p>
			)}
		</section>
	)
}

export default ProductsList
