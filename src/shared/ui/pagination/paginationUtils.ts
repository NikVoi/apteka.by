export const paginate = <T>(
	items: T[],
	currentPage: number,
	itemsPerPage: number
): T[] => {
	return items.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)
}

export const generatePagination = (
	currentPage: number,
	totalPages: number
): (number | string)[] => {
	const pages = []
	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i)
		}
	} else {
		if (currentPage <= 3) {
			pages.push(1, 2, 3, '...', totalPages)
		} else if (currentPage >= totalPages - 2) {
			pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
		} else {
			pages.push(
				1,
				'...',
				currentPage - 1,
				currentPage,
				currentPage + 1,
				'...',
				totalPages
			)
		}
	}
	return pages
}
