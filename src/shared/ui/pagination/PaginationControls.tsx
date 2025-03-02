'use client'
import { Button } from '@/shared/ui/button'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/shared/ui/pagination'
import { FC } from 'react'
import { generatePagination } from './paginationUtils'
import { IPaginationState } from './types'

const PaginationControls: FC<IPaginationState> = ({
	currentPage = 1,
	totalPages = 1,
	setPage,
}) => {
	const pages = generatePagination(currentPage, totalPages)

	return (
		<Pagination className='mt-4'>
			<PaginationContent>
				{currentPage > 1 && (
					<PaginationItem>
						<PaginationPrevious onClick={() => setPage(currentPage - 1)} />
					</PaginationItem>
				)}

				{pages.map((page, i) =>
					page === '...' ? (
						<PaginationItem key={i}>
							<span className='px-2 text-gray-500'>...</span>
						</PaginationItem>
					) : (
						<PaginationItem key={i}>
							<Button
								className={`rounded-full text-black shadow-none ${
									currentPage === page
										? 'bg-blue-500 text-white'
										: 'bg-[#f4f6fa]'
								}`}
								onClick={() => setPage(page as number)}
							>
								{page}
							</Button>
						</PaginationItem>
					)
				)}

				{currentPage < totalPages && (
					<PaginationItem>
						<PaginationNext onClick={() => setPage(currentPage + 1)} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationControls
