import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteModal from './DeleteModal'
import {
	NoteViewWrapper,
	NoteWrapper,
	SingleNoteTitle,
	SingleNoteText,
	ModifyNoteWrapper,
	EditLink,
	Delete
} from './Styled'

const NoteView = props => {
	const [view, setView] = useState({
		title: '',
		textBody: '',
		id: '',
		modal: false
	})

	useEffect(() => {
		let params = useParams()
		const getData = async () => {
			const result = await axios(
				`https://fe-notes.herokuapp.com/note/get/${params.id}`
			)
			setView(result.view)
		}
		getData()
	}, [])
	// We only want to fetch data when the component mounts.
	// That's why you can provide an empty array as second argument
	// to the effect hook to avoid activating it on component updates
	// but only for the mounting of the component.

	// useEffect(async () => {
	//   axios
	//     .get(
	//       `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
	//     )
	//     .then(res => {
	//       setView({
	//         textBody: res.data.textBody,
	//         title: res.data.title,
	//         id: res.data._id
	//       });
	//     })
	//     .catch(err => console.log(err));
	// })

	const toggle = () => {
		setView({
			modal: !view.modal
		})
	}

	return (
		<NoteViewWrapper>
			<NoteWrapper>
				<ModifyNoteWrapper>
					<EditLink to={`/note/edit/${view.id}`}>edit</EditLink>
					<Delete onClick={e => toggle(e)}>delete</Delete>
				</ModifyNoteWrapper>

				<SingleNoteTitle>{view.title}</SingleNoteTitle>
				<SingleNoteText>{view.textBody}</SingleNoteText>
			</NoteWrapper>
			<DeleteModal modal={view.modal} toggle={e => toggle(e)} id={view.id} />
		</NoteViewWrapper>
	)
}

export default NoteView
