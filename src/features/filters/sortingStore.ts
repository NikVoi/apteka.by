import { useMedStore } from '@/entities/medical/useMedStore'
import { create } from 'zustand'
import { ISortingState } from './types'

export const useSortingStore = create<ISortingState>(set => ({
	sorting: 'default',

	setSorting: sortingType => {
		set(() => {
			let sortedProducts = [...useMedStore.getState().products]

			if (sortingType === 'asc') {
				sortedProducts.sort((a, b) => a.price - b.price)
			} else if (sortingType === 'desc') {
				sortedProducts.sort((a, b) => b.price - a.price)
			}

			useMedStore.setState({ products: sortedProducts })
			return { sorting: sortingType }
		})
	},
}))
