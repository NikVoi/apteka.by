export interface IPaginationState {
	currentPage: number
	itemsPerPage: number
	setPage: (page: number) => void
}
