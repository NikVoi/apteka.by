'use client'

import { useMedStore } from '@/entities/medical/medStore'
import {
	brand,
	dossage,
	quantityPerPackage,
	releaseForm,
} from '@/shared/constants/filters'
import { Checkbox } from '@/shared/ui/checkbox'
import { Slider } from '@/shared/ui/slider'
import { FC, useState } from 'react'
import styles from './styles.module.css'

const FiltersAside: FC = () => {
	const { filters, setFilters } = useMedStore()
	const [tempRange, setTempRange] = useState([
		filters.minPrice,
		filters.maxPrice,
	])

	const handlePriceCommit = (newRange: number[]) => {
		setFilters({ minPrice: newRange[0], maxPrice: newRange[1] })
	}

	// Обновление фильтра цены
	const handlePriceChange = (newRange: number[]) => {
		setTempRange(newRange)
		setFilters({ minPrice: newRange[0], maxPrice: newRange[1] })
	}

	console.log(filters)

	const handleCheckboxChange = (
		key:
			| 'selectedBrands'
			| 'selectedForms'
			| 'selectedDossage'
			| 'selectedQuantityPerPackage',
		value: string | Number
	) => {
		const stringValue = String(value)

		setFilters({
			[key]: filters[key].includes(stringValue)
				? filters[key].filter(item => item !== stringValue)
				: [...filters[key], stringValue],
		})
	}

	return (
		<aside className={styles.aside}>
			<h2 className={styles.title}>Фильтры</h2>

			<div className={styles.filterBlock}>
				<h3>Цена</h3>
				<p className='text-sm font-medium text-gray-700'>
					{tempRange[0]} - {tempRange[1]} ₽
				</p>
				<Slider
					value={tempRange}
					onValueChange={handlePriceChange}
					onValueCommit={handlePriceCommit}
					min={0}
					max={100}
					step={1}
				/>
			</div>

			<hr />

			<div className={styles.filterBlock}>
				<h3>Бренд</h3>
				{brand.map(b => (
					<div key={b} className={styles.checkboxItem}>
						<Checkbox
							checked={filters.selectedBrands.includes(b)}
							onCheckedChange={() => handleCheckboxChange('selectedBrands', b)}
						/>
						<label>{b}</label>
					</div>
				))}
			</div>

			<hr />

			<div className={styles.filterBlock}>
				<h3>Форма выпуска</h3>
				{releaseForm.map(form => (
					<div key={form} className={styles.checkboxItem}>
						<Checkbox
							checked={filters.selectedForms.includes(form)}
							onCheckedChange={() =>
								handleCheckboxChange('selectedForms', form)
							}
						/>
						<label>{form}</label>
					</div>
				))}
			</div>

			<hr />

			<div className={styles.filterBlock}>
				<h3>Дозировка</h3>
				{dossage.map(d => (
					<div key={d} className={styles.checkboxItem}>
						<Checkbox
							checked={filters.selectedDossage.includes(d)}
							onCheckedChange={() => handleCheckboxChange('selectedDossage', d)}
						/>
						<label>{d}</label>
					</div>
				))}
			</div>

			<hr />

			<div className={styles.filterBlock}>
				<h3>Количество в упаковке</h3>
				{quantityPerPackage.map(q => (
					<div key={q} className={styles.checkboxItem}>
						<Checkbox
							checked={filters.selectedQuantityPerPackage.includes(q)}
							onCheckedChange={() =>
								handleCheckboxChange('selectedQuantityPerPackage', q)
							}
						/>
						<label>{q + ' шт'}</label>
					</div>
				))}
			</div>

			<hr />

			<button
				className={styles.resetButton}
				onClick={() =>
					setFilters({
						selectedBrands: [],
						selectedForms: [],
						selectedDossage: [],
						minPrice: 0,
						maxPrice: 1000,
					})
				}
			>
				Сбросить фильтры
			</button>
		</aside>
	)
}

export default FiltersAside
