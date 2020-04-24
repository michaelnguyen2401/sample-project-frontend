import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Avatar } from '@views_components'

const useStyles = makeStyles(() => ({
	root: ({ leftOrRight }) => ({
		display: 'flex',
		flexDirection: leftOrRight === 'right' ? 'row-reverse' : 'row',
	}),
	root__message: () => ({
		marginBottom: 4,
		marginLeft: 8,
		marginRight: 8,
		borderRadius: 8,
		minWidth: '32px',
		maxWidth: 'calc(100% - 150px)',
		backgroundColor: '#DAE9FF',
		padding: 12,
	}),
}))

export default function MessageCard(props) {
	const { message, leftOrRight } = props
	const classes = useStyles({ leftOrRight })
	return (
		<Box className={classes.root}>
			<Avatar size={40} />
			<Box className={classes.root__message}>
				<Typography>{message}</Typography>
			</Box>
		</Box>
	)
}

MessageCard.propTypes = {
	message: PropTypes.string,
}

MessageCard.defaultProps = {
	message: '',
}
