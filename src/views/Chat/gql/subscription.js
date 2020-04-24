import gql from 'graphql-tag'

const ON_ZALO_MESSAGE_RECEIVED = gql`
	subscription {
		onZaloMessageReceived {
			id
			from
			to
			timestamp
			content
		}
	}
`
const ON_ZALO_MESSAGE_CREATED = gql`
	subscription {
		onZaloMessageCreated {
			id
			from
			to
			timestamp
			content
		}
	}
`
const ON_ZALO_MESSAGE_RECEIVED_FROM_USER = gql`
	subscription onZaloMessageReceived($filter: OnZaloMessageReceivedInput) {
		onZaloMessageReceived(filter: $filter) {
			id
			from
			to
			timestamp
			content
		}
	}
`
const ON_ZALO_MESSAGE_CREATED_TO_USER = gql`
	subscription onZaloMessageCreated($filter: OnZaloMessageCreatedInput) {
		onZaloMessageCreated(filter: $filter) {
			id
			from
			to
			timestamp
			content
		}
	}
`

export {
	ON_ZALO_MESSAGE_RECEIVED,
	ON_ZALO_MESSAGE_CREATED,
	ON_ZALO_MESSAGE_RECEIVED_FROM_USER,
	ON_ZALO_MESSAGE_CREATED_TO_USER,
}
