import { IProduct } from '@/shared/types/IProduct'

interface Filters {
	minPrice: number
	maxPrice: number
	selectedBrands: string[]
	selectedForms: string[]
	selectedDossage: string[]
	selectedQuantityPerPackage: string[]
}

interface IPagination {
	currentPage: number
	itemsPerPage: number
}

export interface MedStore {
	allProducts: IProduct[]
	products: IProduct[]
	isLoading: boolean
	error: string | null
	viewMode: 'grid' | 'list'
	filters: Filters
	pagination: IPagination
	fetchProducts: () => Promise<void>
	setFilters: (filters: Partial<Filters>) => void
	setViewMode: (mode: 'grid' | 'list') => void
	setPage: (page: number) => void
	setSorting: (sortingType: 'relevance' | 'asc' | 'desc') => void
}
