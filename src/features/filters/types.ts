export interface IFiltersState {
	minPrice: number
	maxPrice: number
	selectedBrands: string[]
	selectedForms: string[]
	selectedDossage: string[]
	selectedQuantityPerPackage: string[]
	setFilters: (filters: Partial<IFiltersState>) => void
}

export interface ISortingState {
	sorting: 'default' | 'asc' | 'desc'
	setSorting: (type: 'default' | 'asc' | 'desc') => void
}
