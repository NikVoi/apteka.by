import { MAX_PRICE, MIN_PRICE } from '@/shared/constants/base'
import axios from 'axios'
import { create } from 'zustand'
import { MedStore } from './types'

export const useMedStore = create<MedStore>((set, get) => ({
	allProducts: [],
	products: [],
	isLoading: false,
	viewMode: 'grid',
	filters: {
		minPrice: MIN_PRICE,
		maxPrice: MAX_PRICE,
		selectedBrands: [],
		selectedForms: [],
		selectedDossage: [],
		selectedQuantityPerPackage: [],
	},
	pagination: {
		currentPage: 1,
		itemsPerPage: 12,
	},

	fetchProducts: async () => {
		set({ isLoading: true })
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API}/api/products`
			)
			set({ allProducts: response.data, products: response.data })
		} catch (error) {
			set({ error: 'Ошибка загрузки товаров. Попробуйте позже.' })
		} finally {
			set({ isLoading: false })
		}
	},

	setFilters: newFilters => {
		set(state => {
			const updatedFilters = { ...state.filters, ...newFilters }

			const filteredProducts = state.allProducts.filter(product => {
				const matchesPrice =
					product.price >= updatedFilters.minPrice &&
					product.price <= updatedFilters.maxPrice

				const matchesBrand =
					updatedFilters.selectedBrands.length === 0 ||
					updatedFilters.selectedBrands.includes(product.characteristics.brand)

				const matchesForm =
					updatedFilters.selectedForms.length === 0 ||
					updatedFilters.selectedForms.includes(
						product.characteristics.releaseForm
					)

				const matchesDossage =
					updatedFilters.selectedDossage.length === 0 ||
					updatedFilters.selectedDossage.includes(
						product.characteristics.dossage
					)

				const matchesQuantityPerPackage =
					updatedFilters.selectedQuantityPerPackage.length === 0 ||
					updatedFilters.selectedQuantityPerPackage.includes(
						String(product.characteristics.quantityPerPackage)
					)

				return (
					matchesPrice &&
					matchesBrand &&
					matchesForm &&
					matchesDossage &&
					matchesQuantityPerPackage
				)
			})

			return { filters: updatedFilters, products: filteredProducts }
		})
	},

	setViewMode: mode => set({ viewMode: mode }),

	setSorting: sortingType => {
		set(state => {
			let sortedProducts = [...state.products]

			if (sortingType === 'asc') {
				sortedProducts.sort((a, b) => a.price - b.price)
			} else if (sortingType === 'desc') {
				sortedProducts.sort((a, b) => b.price - a.price)
			} else {
				sortedProducts = [...state.allProducts]
			}

			return { products: sortedProducts }
		})
	},

	setPage: newPage => {
		set(state => ({
			pagination: { ...state.pagination, currentPage: newPage },
		}))
	},
}))
