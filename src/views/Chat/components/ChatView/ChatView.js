import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import Header from './components/Header'
import ViewMessage from './components/ViewMessage'
import EditorChat from './components/EditorChat/EditorChat'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		borderRight: '1px solid #e5e5e9',
		height: '100vh',
	},
}))

export default function ChatView({ selectedUserOfChat }) {
	const classes = useStyles()

	return (
		<Box className={classes.root}>
			<Header selectedUserOfChat={selectedUserOfChat} />
			<ViewMessage selectedUserOfChat={selectedUserOfChat} />
			<EditorChat idUser={selectedUserOfChat.id} />
		</Box>
	)
}
