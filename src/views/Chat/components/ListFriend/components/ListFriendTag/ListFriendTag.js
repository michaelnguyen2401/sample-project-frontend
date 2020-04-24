import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import FriendTag from '../FriendTag/FriendTag'
import Filter from '../Filter/Filter'
import { GET_NEW_NOTI_MESSAGE_LIST, GET_USER_INFO } from '../../../../gql/query'
import { useQuery } from '@apollo/react-hooks'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	root__listfriend: {
		width: '332px',
	},
	root__chatview: {
		display: 'flex',
		flex: 1,
	},
}))

const dataExample = [
	{
		name: 'steve@example.com',
		id: 'steve@example.com',
		from: '1084886643066379263',
		to: '5e68995fb6d0bc05829b6e79',
	},
	{ name: 'Đại Nguyễn Văn', id: 'Đại Nguyễn Văn', from: 'asd', to: 'asd' },
	{ name: 'Trần Văn Văn', id: 'Trần Văn Văn', from: 'asd', to: 'asd' },
]

export default function ListFriendTag() {
	const classes = useStyles()

	const { data } = useQuery(GET_USER_INFO)
	console.log('asdfasdf', data)
	const {
		data: {
			newNotiMessageList: { items },
		},
		loading,
	} = useQuery(GET_NEW_NOTI_MESSAGE_LIST)
	const numberNotiOfUser = (from, to) =>
		items.find(noti => noti.from === from && noti.to === to) &&
		items.find(noti => noti.from === from && noti.to === to).numberNoti

	const lastMessageOfUser = (from, to) =>
		items.find(noti => noti.from === from && noti.to === to) &&
		items.find(noti => noti.from === from && noti.to === to).lastMessage

	return (
		<Box className={classes.root}>
			<Filter />
			{!loading &&
				dataExample.map(item => (
					<FriendTag
						key={item.id}
						{...item}
						numberNoti={numberNotiOfUser(item.from, item.to)}
						message={lastMessageOfUser(item.from, item.to)}
					/>
				))}
		</Box>
	)
}
