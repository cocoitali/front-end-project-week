import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
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
	const [newNote, setNewNote] = useState({
		...props,
		newNote: {}
	})

	const addNote = (e) => {
		useEffect(() => {
			e.preventDefault()
			axios
				.post('https://fe-notes.herokuapp.com/note/create', newNote)
				.then(res => {
					setNewNote({ title: '', textBody: '' })
				})
				.catch(err => console.log(err, 'failed to create'))
		}, [])
		
	}

	const changeHandler = e => {
		setNewNote({
			[e.target.name]: e.target.value
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
					onChange={e =>changeHandler(e)}
					placeholder='Note Content'
				/>
				<Btn type='submit'>Save</Btn>
			</Form>
		</CreateViewWrapper>
	)
}

const mapStateToProps = state => {
	return {
		title: state.title,
		textBody: state.textBody
	}
}

export default connect(mapStateToProps, { addNote })(CreateNewView)
