export interface List {
	id: number,
	title: string,
	description: string,
	pic: string
}

export interface Channel extends List {
	status?: string
}