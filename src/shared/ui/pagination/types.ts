export interface IPaginationState {
	currentPage: number
	totalPages?: number
	itemsPerPage?: number
	setPage: (page: number) => void
}
