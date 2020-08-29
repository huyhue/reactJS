import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    }
  }

  componentWillMount() {  //trước khi render hiển thị ra dữ liệu
    noteData.on('value', (notes) => { //Lấy dữ liệu
      var arrayData = []; //tạo mảng vì firebase kiểu đối tượng
      notes.forEach(element => {
        const key = element.key;
        const noteTitle = element.val().noteTitle;
        const noteContent = element.val().noteContent;
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })
      });
      this.setState({
        dataFirebase: arrayData //đẩy vào state để sử dụng vì arrayData (nó ở bên trong)
      });
    })
  }

  getData = () => {
    if (this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <NoteItem
            key={key}
            i={key}
            note={value}
            noteTitle={value.noteTitle}
            noteContent={value.noteContent}
          />
        )
      })
    }
  }

  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>
    );
  }
}

export default NoteList;