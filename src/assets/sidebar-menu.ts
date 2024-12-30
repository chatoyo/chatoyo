interface Menu {
	target: string,
	icon: string,
	title: string
}

export default [
	{
		target: 'home',
		icon: 'home',
		title: '主页'
	},
	{
		target: 'message',
		icon: 'comments',
		title: '我的消息'
	},
	{
		target: 'contact',
		icon: 'user',
		title: '联系人'
	}
] as Menu[]