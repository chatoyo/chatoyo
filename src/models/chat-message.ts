export type BaseChatMessage = {
	self: boolean,
	content: string,
	avatar: string,
	status: string,
	time?: number,
	type?: 1 | 2 // undefined = text, 1 = img
}