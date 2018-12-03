import styled from "styled-components";
import { Link } from "react-router-dom";

//App.js
export const AppWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: 885px;
  display: flex;
  border: 1px solid #afafaf;
`;

//SideBar.js
export const SideBarWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  height: 100vh;
  background: #d3d2d3;
  border-right: 2px solid #afafaf;
`;
export const SideBarContentWrapper = styled.div``;
export const SideBarTitle = styled.h1`
  color: #414242;
  margin-left: 15px;
  margin-top: 15px;
`;
export const SideBarLinksWrapper = styled.ul`
list-style-type: none;
width: 100%:
`;
export const ViewLinkWrapper = styled.li``;
export const Btn = styled.button`
  width: 100%;
  max-width: 192px;
  height: 40px;
  border: 1px solid #afb4b5;
  background: #57b5bb;
  color: #f3f7f6;
  font-weight: bold;
  font-size: 16px;
`;
export const CreateLinkWrapper = styled.li``;

//CreateNewView.js
export const CreateViewWrapper = styled.div`
width: 75%
max-width: 665px;
background: #F2F1F2;
`;
export const CreateHeader = styled.h3`
  margin-left: 25px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
export const TitleInput = styled.input`
  width: 54%; 
  max-width: 358px;
  height: 43px;
  border: 2px solid #B7B7B7
  background: white;
`;
export const ContentInput = styled.input`
  width: 91%;
  max-width: 605px;
  height: 348px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #B7B7B7
  background: white;
`;

//ListView.js
export const ListViewWrapper = styled.div`
  background: #f2f1f2;
  width: 100%;
  height: 100vh;
  max-width: 665px;
`;
export const NotesViewWrapper = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 50px;
`;
export const NotesListTitle = styled.h2`
  color: #414242;
  text-decoration: none;
`;
export const NoteCardTitle = styled.h3``;

export const NoteCardText = styled.p`
  text-decoration: none;
`;
export const NoteCardList = styled.div`
  width: 665px;
  display: flex;
  flex-wrap: wrap;
`;
export const NoteCardLink = styled(Link)`
  text-decoration: none;
`;
export const NoteCard = styled.div`
  margin-right: 7.5px;
  margin-left: 7.5px;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  background: white;
  width: 192px;
  height: 200px;
  padding: 5px;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  border: 2px solid #c5c5c5;
  color: black;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;


//NoteView.js
export const NoteViewWrapper = styled.div`
  width: 100%;
  max-width: 665px;
  height: 100vh;
  background: #f2f1f2;
`;
export const NoteWrapper = styled.div`
  margin: 4%;
`;
export const NoteViewLinks = styled.div`
  text-decoration: underline;
  display: flex;
`;
export const EditLink = styled(Link)`
  color: #414242;
  cursor: pointer;
`;
export const DeleteLink = styled(Link)`
  color: #414242;
`;
export const SingleNoteTitle = styled.h3``;

export const SingleNoteText = styled.p`
  text-decoration: none;
`;
