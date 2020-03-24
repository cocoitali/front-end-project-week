import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { addNote } from '../actions'
import {
	CreateViewWrapper,
	CreateHeader,
	Form,
	TitleInput,
	ContentInput,
	Btn
} from './Styled'
import axios from 'axios'

const CreateNewView = props => {
	// const dispatch = useDispatch()
	const [newNote, setNewNote] = useState({
		title: '',
		textBody: ''
	})

	const addNote = e => {
		e.preventDefault()
		axios
			.post('https://fe-notes.herokuapp.com/note/create', newNote)
			.then(res => {
				setNewNote({ title: '', textBody: '' })
			})
			.catch(err => console.log(err, 'failed to create'))
	}

	const changeHandler = e => {
		const { name, value } = e.target
		setNewNote({
			...newNote,
			[name]: value
		})
	}

	return (
		<CreateViewWrapper>
			<CreateHeader>Create New Note:</CreateHeader>

			<Form onSubmit={e => addNote(e)}>
				<TitleInput
					name='title'
					type='text'
					value={newNote.title}
					onChange={e => changeHandler(e)}
					placeholder='Note Title'
				/>
				<ContentInput
					name='textBody'
					type='text'
					value={newNote.textBody}
					onChange={e => changeHandler(e)}
					placeholder='Note Content'
				/>
				<Btn type='submit'>Save</Btn>
			</Form>
		</CreateViewWrapper>
	)
}

export default CreateNewView
// const mapStateToProps = state => {
// 	return {
// 		title: state.title,
// 		textBody: state.textBody
// 	}
// }
