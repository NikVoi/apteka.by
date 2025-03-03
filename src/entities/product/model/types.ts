import { IProduct } from '@/shared/types/IProduct'

interface IFilters {
	minPrice: number
	maxPrice: number
	selectedBrands: string[]
	selectedForms: string[]
	selectedDossage: string[]
	selectedQuantityPerPackage: string[]
}

export interface IMedStore {
	allProducts: IProduct[]
	products: IProduct[]
	filteredProducts: IProduct[]
	isLoading: boolean
	error: string | null
	viewMode: 'grid' | 'list'
	sorting: string
	filters: IFilters
	fetchProducts: () => Promise<void>
	setFilters: (filters: Partial<IFilters>) => void
	setViewMode: (mode: 'grid' | 'list') => void
	setSorting: (sortingType: 'relevance' | 'asc' | 'desc') => void
}
