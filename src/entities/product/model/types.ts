import { IProduct } from '@/shared/types/IProduct'

interface Filters {
	minPrice: number
	maxPrice: number
	selectedBrands: string[]
	selectedForms: string[]
	selectedDossage: string[]
	selectedQuantityPerPackage: string[]
}

export interface MedStore {
	allProducts: IProduct[]
	products: IProduct[]
	isLoading: boolean
	error: string | null
	viewMode: 'grid' | 'list'
	sorting: string
	filters: Filters
	fetchProducts: () => Promise<void>
	setFilters: (filters: Partial<Filters>) => void
	setViewMode: (mode: 'grid' | 'list') => void
	setSorting: (sortingType: 'relevance' | 'asc' | 'desc') => void
}
