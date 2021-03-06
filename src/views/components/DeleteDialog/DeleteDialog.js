import React from 'react'

import clsx from 'clsx'
import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	Slide,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: 'none',
		borderRadius: 'unset',
		width: 323,
		padding: '24px 12px 12px 24px',
		margin: 0,
	},
	title: {
		marginBottom: 3,
		'&>h2': {
			lineHeight: 'initial',
			fontWeight: 700,
			fontSize: '1.5rem',
		},
	},
	nopadding: {
		padding: 0,
	},
	button: {
		height: 56,
		minWidth: '0px',
		boxShadow: 'none',
		textTransform: 'none',
		color: theme.palette.common.white,
	},
}))

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const DeleteDialog = props => {
	const { open, onClose, onAgree, onDisagree } = props
	const classes = useStyles()

	return (
		<Dialog
			TransitionComponent={Transition}
			open={open}
			onClose={onClose}
			classes={{ paper: classes.root }}
		>
			<DialogTitle className={clsx(classes.nopadding, classes.title)}>
				Delete!
			</DialogTitle>
			<DialogActions className={classes.nopadding}>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => {
						onAgree && onAgree()
					}}
				>
					Yes
				</Button>
				<Button
					variant='contained'
					className={classes.button}
					onClick={() => {
						onDisagree && onDisagree()
					}}
				>
					No
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default DeleteDialog

DeleteDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onAgree: PropTypes.func.isRequired,
	onDisagree: PropTypes.func.isRequired,
}
DeleteDialog.defaultProps = {
	open: false,
}
