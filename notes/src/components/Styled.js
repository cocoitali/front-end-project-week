import styled from 'styled-components'
import { Link } from 'react-router-dom'

//App.js
export const AppWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
	max-width: 885px;
	display: flex;
	border: 1px solid #afafaf;
	height: 100vh;
`

//SideBar.js
export const SideBarWrapper = styled.div`
	width: 100%;
	max-width: 220px;
	background: #d3d2d3;
	height: 100vh;
	border-right: 2px solid #afafaf;
`
export const SideBarTitle = styled.h1`
	color: #414242;
	margin-left: 15px;
	margin-top: 15px;
`
export const SideBarLinksWrapper = styled.div`
	list-style-type: none;
	margin-left: 13px;
`
export const Btn = styled.button`
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;
	background: white;
	color: palevioletred;
`

//CreateNewView.js
export const CreateViewWrapper = styled.div`
width: 75%
max-width: 665px;
background: #F2F1F2;
margin-top: 50px;
`
export const CreateHeader = styled.h3`
	margin-left: 25px;
`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-left: 25px;
`
export const TitleInput = styled.input`
  width: 54%; 
  max-width: 358px;
  height: 43px;
  border: 2px solid #B7B7B7
  background: white;
`
export const ContentInput = styled.input`
  width: 91%;
  max-width: 605px;
  height: 348px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #B7B7B7
  background: white;
`

//ListView.js
export const ListViewWrapper = styled.div`
  background: #db926e;
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	max-width: 665px;
`
export const NotesViewWrapper = styled.div`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 50px;
`
export const NotesListTitle = styled.h2`
	color: #414242;
`
export const NoteCardTitle = styled.h3`
	color: #2c2829;
`

export const NoteCardText = styled.p`
	font-size: 12px;
	font-weight: bold;
	color: #807b78;
`
export const NoteCardList = styled.div`
	width: 665px;
	display: flex;
	flex-wrap: wrap;
`
export const NoteCardLink = styled(Link)`
	text-decoration: none;
`
export const NoteCard = styled.div`
	margin-right: 7.5px;
	margin-left: 7.5px;
	margin-top: 12.5px;
	margin-bottom: 12.5px;
	background: white;
	width: 192px;
	height: 200px;
	padding: 5px;
	overflow-y: scroll;
	overflow-wrap: break-word;
	border: 2px solid #c5c5c5;
	color: black;
	cursor: pointer;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`

//NoteView.js
export const NoteViewWrapper = styled.div`
	width: 100%;
	max-width: 665px;
	background: #db926e;
`
export const NoteWrapper = styled.div`
	margin: 4%;
`
export const ModifyNoteWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
export const EditLink = styled(Link)`
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;
	transition: background-color 0.8s;
	text-align: center;
	:hover {
		color: white;
		text-decoration: none;
		background-color: palevioletred;
	}
`
export const Delete = styled.button`
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;
	transition: background-color 0.8s;
	:hover {
		background-color: palevioletred;
	}
`
export const SingleNoteTitle = styled.h3``

export const SingleNoteText = styled.p`
	text-decoration: none;
	overflow-wrap: break-word;
`
