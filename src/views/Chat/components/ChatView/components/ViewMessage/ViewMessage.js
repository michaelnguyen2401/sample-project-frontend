import React, { useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import MessageCard from '../MessageCard/MessageCard'
import { useQuery } from '@apollo/react-hooks'
import { GET_ZALO_MESSAGE_LIST } from '../../../../gql/query'
import { ON_ZALO_MESSAGE_RECEIVED } from '../../../../gql/subscription'

ViewMessage.propTypes = {}

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		overflow: 'auto',
		padding: '26px 16px',
	},
}))

const dataExample = [
	'133',
	`	Lorem Ipsum is simply dummy text of the printing and typesetting
	industry. Lorem Ipsum has been the industry's standard dummy text ever
	since the 1500s, when an unknown printer took a galley of type and
	scrambled it to makecinto electronic typesetting,
	remaining essentially unchanged. It was popularised in the 1960s with
	the release of Letraset sheets containing Lorem Ipsum passages, and
	more recently with desktop publishing software like Aldus PageMaker
	including versions of Lorem Ipsum.`,
	'1',
	'12',
	'14',
	`	Lorem Ipsum is simply dummy tecas popularised in the 1960s with
	the release of Letraset sheets containing Lorem Ipsum passages, and
	more recently with desktop publishing software like Aldus PageMaker
	including versions of Lorem Ipsum.`,
	'123',
	`ry. Lorem Ipsum has been the industry's standard dummy text ever
	since the 1500s, when an unknown printer took a galley of type and
	scrambled it to make a type specimen book. It has survived not only
	five centuries, but also the leap into electronic typesetting,
	remaining essentially `,
	'13',
	"ry. Lorem Ipsum has been the industry's s",
]
export default function ViewMessage({ selectedUserOfChat: { from, to } }) {
	const classes = useStyles()

	const { data, loading, subscribeToMore } = useQuery(GET_ZALO_MESSAGE_LIST, {
		variables: { query: { limit: 30, from, to } },
	})

	useEffect(() => {
		console.log('subscribeToMore ')
		subscribeToMore({
			document: ON_ZALO_MESSAGE_RECEIVED,
			updateQuery: (prev, { subscriptionData }) => {
				console.log('ON_ZALO_MESSAGE_RECEIVED usserFF', subscriptionData)
				// if (!subscriptionData.data) return prev
				// const newLink = subscriptionData.data.newLink
				// const exists = prev.feed.links.find(({ id }) => id === newLink.id);
				// if (exists) return prev;

				// return Object.assign({}, prev, {
				// 	feed: {
				// 		links: [newLink, ...prev.feed.links],
				// 		count: prev.feed.links.length + 1,
				// 		__typename: prev.feed.__typename
				// 	}
				// })
			},
		})
	}, [subscribeToMore])

	console.log('asdf', data)

	return (
		<Box className={classes.root}>
			{!loading &&
				data.zaloMessageList.items.map((item, index) => (
					<MessageCard
						message={item.content}
						leftOrRight={'left'}
						key={item.id}
					/>
				))}
		</Box>
	)
}
