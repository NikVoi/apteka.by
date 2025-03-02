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
	viewMode: 'grid' | 'list'
	filters: Filters
	fetchProducts: () => Promise<void>
	setFilters: (filters: Partial<Filters>) => void
	setViewMode: (mode: 'grid' | 'list') => void
	setPage: (page: number) => void
	pagination: IPagination
}
