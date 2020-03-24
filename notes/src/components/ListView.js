import React, { useState, useEffect } from 'react'

import {
	ListViewWrapper,
	NotesViewWrapper,
	NotesListTitle,
	NoteCard,
	NoteCardLink,
	NoteCardList,
	NoteCardTitle,
	NoteCardText
} from './Styled'
import axios from 'axios'

const ListView = props => {
	const [viewNote, setViewNote] = useState({
		...props,
		notes: []
	})

	useEffect(() => {
		axios
			.get('https://fe-notes.herokuapp.com/note/get/all')
			.then(res => {
				setViewNote({ notes: res.data })
			})
			.catch(err => console.log(err, 'failed to get api'))
	})

	return (
		<ListViewWrapper>
			<NotesViewWrapper>
				<NotesListTitle>Your Notes:</NotesListTitle>

				<NoteCardList>
					{[...viewNote.notes].map(note => {
						return (
							<NoteCardLink to={`/note/${note._id}`} key={note._id}>
								<NoteCard>
									<NoteCardTitle>{note.title}</NoteCardTitle>
									<NoteCardText>{note.textBody}</NoteCardText>
								</NoteCard>
							</NoteCardLink>
						)
					})}
				</NoteCardList>
			</NotesViewWrapper>
		</ListViewWrapper>
	)
}

export default ListView
