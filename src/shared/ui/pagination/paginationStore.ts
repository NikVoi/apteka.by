import { create } from 'zustand'
import { IPaginationState } from './types'

export const usePaginationStore = create<IPaginationState>(set => ({
	currentPage: 1,
	itemsPerPage: 12,

	setPage: newPage => set({ currentPage: newPage }),
}))
