export interface ICharacteristics {
	brand: string
	country: string
	dossage: string
	expirationDate: string
	isByPrescription: boolean
	manufacturer: string
	quantityPerPackage: number
	releaseForm: string
	storageTemperature: string
}

export interface IProduct {
	id: string
	image: string
	price: number
	title: string
	characteristics: ICharacteristics
}
