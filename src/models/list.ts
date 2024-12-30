export interface ListChannelItem {
	id: number,
	title: string,
	description: string,
	pic: string
}

export interface Channel extends ListChannelItem {
	status?: string
}