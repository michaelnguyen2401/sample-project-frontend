import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DeleteDialog } from '@views_components'

const useStyles = makeStyles(theme => ({
	root: {
		width: 381,
		margin: '20px auto',
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	formtitle: {
		color: theme.palette.primary.main,
		fontWeight: 600,
	},
	forminput: {
		width: '100%',
		marginTop: 18,
	},
	formcontent: {
		padding: 0,
	},
	formbuttons: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		width: '100%',
		'&>button': {
			marginTop: theme.spacing(2),
			marginLeft: 0,
			'&:not(:first-child)': {
				marginLeft: 0,
			},
		},
	},
	formbutton: {
		color: theme.palette.common.white,
		fontWeight: 600,
		textTransform: 'capitalize',
		padding: '18px 0',
	},
}))

const FormEditor = props => {
	const [userId, setUserId] = useState('')
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false)

	// useEffect(() => {
	// 	setUserId(selectedUser.id)
	// 	setEmail(selectedUser.email)
	// 	setName(selectedUser.name)
	// }, [selectedUser])

	// const hasSelectedUser =
	// 	selectedUser.id && selectedUser.name && selectedUser.email

	const hasSelectedUser = true
	const classes = useStyles()

	// const onCancel = () => {
	// 	if (!authToken) {
	// 		history.push('/sign-in')
	// 		return
	// 	}
	// 	setSelectedUser({
	// 		variables: {
	// 			selectedUser: {
	// 				id: userId + '_reset',
	// 				name: '',
	// 				email: '',
	// 				__typename: 'User',
	// 			},
	// 		},
	// 	})
	// 	setPassword('')
	// 	setConfirmPassword('')
	// }

	// const validateForm = () => {
	// 	const emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
	// 	const isValidEmail = email.match(emailRegex)

	// 	if (isValidEmail === null || password !== confirmPassword) {
	// 		return false
	// 	}
	// 	return true
	// }

	// const shouldUseRefetchQueries = () => {
	// 	return userSearchValue
	// 		? [
	// 				{
	// 					query: FETCH_USER_LIST,
	// 					variables: {
	// 						query: { searchText: userSearchValue, limit: PAGE_LIMIT },
	// 					},
	// 				},
	// 		  ]
	// 		: []
	// }

	// const updateUserInfo = () => {
	// 	let userInfo = { id: userId, email, name }
	// 	if (password) userInfo = { ...userInfo, password }
	// 	updateUser({
	// 		variables: { user: userInfo },
	// 	})
	// 		.then(() => {
	// 			onCancel()
	// 		})
	// 		.catch(error => {
	// 			alert(error.message)
	// 			console.error(error)
	// 		})
	// }

	// const createAUser = () => {
	// 	createNewUser({
	// 		variables: { user: { email, name, password } },
	// 		refetchQueries: shouldUseRefetchQueries(),
	// 		awaitRefetchQueries: !!userSearchValue,
	// 	})
	// 		.then(() => {
	// 			onCancel()
	// 		})
	// 		.catch(error => {
	// 			alert(error.message)
	// 			console.error(error)
	// 		})
	// }

	// const onSubmit = () => {
	// 	const isValid = validateForm()

	// 	if (isValid) {
	// 		if (selectedUser.id && selectedUser.name && selectedUser.email) {
	// 			updateUserInfo()
	// 		} else {
	// 			createAUser()
	// 		}
	// 	} else {
	// 		alert('Not valid!!!!')
	// 	}
	// }

	// const onAgreeDeleteAnUser = () => {
	// 	deleteUser({ variables: { id: userId } })
	// 		.then(() => {
	// 			setSelectedUser({
	// 				variables: {
	// 					selectedUser: {
	// 						id: userId + '_reset',
	// 						name: '',
	// 						email: '',
	// 						__typename: 'User',
	// 					},
	// 				},
	// 			})
	// 			setOpenConfirmDeleteDialog(false)
	// 		})
	// 		.catch(error => console.error(error))
	// }

	return (
		<Box className={classes.root}>
			<Typography variant='h5' className={classes.formtitle}>
				{hasSelectedUser ? 'Modify' : 'Sign up'}
			</Typography>
			<div className={classes.formcontent}>
				<TextField
					value={email}
					label='EMAIL'
					variant='outlined'
					type='email'
					className={classes.forminput}
					onChange={e => setEmail(e.target.value.toLowerCase())}
				/>
				<TextField
					value={name}
					label='NAME'
					variant='outlined'
					type='text'
					autoComplete='true'
					className={classes.forminput}
					onChange={e => setName(e.target.value)}
				/>
				<TextField
					id='formeditor-password'
					value={password}
					label='PASSWORD'
					variant='outlined'
					type='password'
					autoComplete='true'
					className={classes.forminput}
					onChange={e => setPassword(e.target.value)}
				/>
				<TextField
					id='formeditor-password-confirm'
					value={confirmPassword}
					label='PASSWORD CONFIRM'
					variant='outlined'
					type='password'
					autoComplete='true'
					className={classes.forminput}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
			</div>
			<div className={classes.formbuttons}>
				<Button
					data-cy='submit-button'
					variant='contained'
					size='large'
					fullWidth
					className={classes.formbutton}
					onClick={() => {
						setOpenConfirmDeleteDialog(true)
					}}
				>
					{hasSelectedUser ? 'Save' : 'Register'}
				</Button>
				{hasSelectedUser ? (
					<Button
						variant='contained'
						size='large'
						fullWidth
						className={classes.formbutton}
						onClick={() => {
							setOpenConfirmDeleteDialog(true)
						}}
					>
						Delete
					</Button>
				) : null}
				<Button
					variant='contained'
					size='large'
					fullWidth
					className={classes.formbutton}
					// onClick={onCancel}
				>
					Cancel
				</Button>
			</div>
			<DeleteDialog
				open={openConfirmDeleteDialog}
				onClose={() => {
					setOpenConfirmDeleteDialog(false)
				}}
				// onAgree={onAgreeDeleteAnUser}
				onDisagree={() => {
					setOpenConfirmDeleteDialog(false)
				}}
			/>
		</Box>
	)
}

export default FormEditor