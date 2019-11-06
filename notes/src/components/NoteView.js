import React, { Component } from "react";
import axios from "axios";
import DeleteModal from "./DeleteModal";
import {
  NoteViewWrapper,
  NoteWrapper,
  SingleNoteTitle,
  SingleNoteText,
  ModifyNoteWrapper,
  EditLink,
  Delete
} from "./Styled";

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          textBody: res.data.textBody,
          title: res.data.title,
          id: res.data._id
        });
      })
      .catch(err => console.log(err));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <NoteViewWrapper>
        <NoteWrapper>
          <ModifyNoteWrapper>
            <EditLink to={`/note/edit/${this.state.id}`}>edit</EditLink>
            <Delete onClick={this.toggle}>delete</Delete>
          </ModifyNoteWrapper>

          <SingleNoteTitle>{this.state.title}</SingleNoteTitle>
          <SingleNoteText>{this.state.textBody}</SingleNoteText>
        </NoteWrapper>
        <DeleteModal
          modal={this.state.modal}
          toggle={this.toggle}
          id={this.state.id}
        />
      </NoteViewWrapper>
    );
  }
}

export default NoteView;
