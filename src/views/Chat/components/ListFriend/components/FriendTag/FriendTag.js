import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Box, Grid, Typography } from '@material-ui/core'
import { Avatar } from '@views_components'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {
	SET_SELECTED_USER_OF_CHAT,
	SET_STATUS_READED_MESSAGE,
} from '../../../../gql/mutation'
import {
	GET_SELECTED_USER_OF_CHAT,
	GET_DRAFT_LIST,
} from '../../../../gql/query'
import { MessageNoti } from '@views_components'

const useStyles = makeStyles(theme => ({
	root: ({ isUserSelected }) => ({
		display: 'flex',
		width: '100%',
		height: 72,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		backgroundColor: isUserSelected && '#00897b80',
		'&:hover': {
			backgroundColor: '#00897b80',
		},
	}),
	root__listfriend: {
		width: '332px',
	},
	root__infor__name: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: theme.spacing(2),
	},
	root__infor__name__fullname: {
		fontSize: 18,
	},
	root__infor__name__time: {
		fontSize: 12,
		color: '#7a869a',
	},
	root__infor__unsent: {
		fontSize: 12,
		color: 'red',
	},
	root__infor__name__message: {
		fontSize: 12,
		color: '#7a869a',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '100%',
		whiteSpace: 'nowrap',
	},
	root__infor__boxname: {
		paddingRight: theme.spacing(2),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	root__infor__boxname__numbermessage: {
		margin: '0 8px',
		fontSize: '12px',
		background: 'red',
		borderRadius: '50%',
		color: 'white',
		width: '20px',
		height: '18px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	root__infor__boxmesssage: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
}))

export default function FriendTag(props) {
	const { name, imgUrl, message, from, to, time, id, numberNoti } = props

	const {
		data: { selectedUserOfChat },
	} = useQuery(GET_SELECTED_USER_OF_CHAT)

	const {
		data: {
			draftList: { items },
		},
	} = useQuery(GET_DRAFT_LIST)

	const valueDefault = items.find(item => item.id === id)
	const classes = useStyles({ isUserSelected: selectedUserOfChat.id === id })
	const [setSelectedUser] = useMutation(SET_SELECTED_USER_OF_CHAT)
	const [setStatusReadedMessage] = useMutation(SET_STATUS_READED_MESSAGE)

	const hanldeSelectedUser = () => {
		setSelectedUser({
			variables: {
				selectedUser: {
					name,
					id,
					from,
					to,
					__typename: 'UserOfMain',
				},
			},
		})
		document.title = 'CleVer Dashboard'
		setStatusReadedMessage({
			variables: {
				readedMessage: {
					from,
					to,
				},
			},
		})
	}

	return (
		<Box className={classes.root} onClick={hanldeSelectedUser}>
			<Grid item className={classes.root__infor__avatar}>
				<Avatar size={50} imgUrl={imgUrl} status='online' showStatus={true} />
			</Grid>
			<Grid item xs={9}>
				<Grid container className={classes.root__infor__name}>
					<Box className={classes.root__infor__boxname}>
						<Typography className={classes.root__infor__name__fullname}>
							{name}
						</Typography>
						{valueDefault && selectedUserOfChat.id !== id ? (
							<Typography className={classes.root__infor__unsent}>
								Chưa gửi
							</Typography>
						) : (
							<Typography className={classes.root__infor__name__time}>
								{time}
							</Typography>
						)}
					</Box>
					<Box className={classes.root__infor__boxmesssage}>
						<Typography className={classes.root__infor__name__message}>
							{message}
						</Typography>
						{numberNoti && <MessageNoti numberNoti={numberNoti} />}
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

FriendTag.propTypes = {
	name: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	message: PropTypes.string,
	time: PropTypes.string,
}

FriendTag.defaultProps = {
	name: '',
	imgUrl:
		'http://s120-ava-talk.zadn.vn/3/e/5/2/2/120/c181045e8a31aa07c65e25d88bd249e6.jpg',
	message: '',
	time: 'vài giây',
}
