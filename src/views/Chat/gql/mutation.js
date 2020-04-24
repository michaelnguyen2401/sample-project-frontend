import gql from 'graphql-tag'

const SET_SELECTED_USER_OF_CHAT = gql`
	mutation SetSelectedUserOfChat($selectedUser: User!) {
		setSelectedUserOfChat(selectedUser: $selectedUser) @client {
			id
			name
		}
	}
`
const SET_DRAFT_LIST = gql`
	mutation SetDraftList($draft: Draft!) {
		setDraftList(draft: $draft) @client {
			id
			message
		}
	}
`
const SET_STATUS_READED_MESSAGE = gql`
	mutation SetStatusReadedMessage($readedMessage: ReadedMessage!) {
		setStatusReadedMessage(readedMessage: $readedMessage) @client {
			from
			to
			numberNoti
			lastMessage
		}
	}
`

const SET_USER_SEARCH_TEXT = gql`
	mutation SetUserSearchValueOfChat($searchValue: String!) {
		setUserSearchValueOfChat(searchValue: $searchValue) @client
	}
`

const CREATE_ZALO_MESSAGE = gql`
	mutation CreateZaloMessage($message: CreateZaloMessageInput) {
		createZaloMessage(message: $message) {
			from
			to
			content
			timestamp
			id
		}
	}
`

export {
	SET_SELECTED_USER_OF_CHAT,
	SET_DRAFT_LIST,
	SET_STATUS_READED_MESSAGE,
	SET_USER_SEARCH_TEXT,
	CREATE_ZALO_MESSAGE,
}
