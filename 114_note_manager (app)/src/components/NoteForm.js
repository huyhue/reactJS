import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }
//nếu không sửa gì thì cũng phải lấy được dữ liệu cần sửa
  componentWillMount() { //trước khi render
    if (this.props.editItem) {  // edit case ,phải tồn tại
      this.setState({
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent,
        id: this.props.editItem.id
      });
    }
  }

  isChange = (event) => { //Lấy giá trị từ form
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  addData = (title, content) => {
    if (this.state.id) { //edit case 
      var editObject = {}; //gom dữ liệu vào biến editObject
      editObject.id = this.state.id;
      editObject.noteContent = this.state.noteContent;
      editObject.noteTitle = this.state.noteTitle;

      this.props.editDataStore(editObject);
      this.props.changeEditStatus(); // tắt form 
      this.props.alertOn("Sửa thành công","success");
    }
    else {  //Tạo mới ghi chú
      var item = {}; 
      item.noteTitle = title;
      item.noteContent = content;
      this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
      this.props.alertOn("Thêm mới thành công","success");
    }
  }
  printTitle = () => {
    if(this.props.isAdd){
      //true 
      return <h4>Thêm mới ghi chú </h4>
    }else{
      return <h4>Sửa ghi chú </h4>
    }
  }
  render() {
    return (
      <div className="col-4">
        {this.printTitle()}
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tiêu đề note</label>
            <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
            <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Nội dung note</label>
            <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle"
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
          </div>
          <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
        </form>
      </div>

    );
  }
}
// props.editItem
//nhận được dữ liệu từ form và đặt vào ô trống
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    isAdd: state.isAdd
  }
}
// this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem })
    },
    editDataStore: (getItem) => {
      dispatch({ type: "EDIT", getItem })
    },
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    },
    alertOn: (alertContent,alertType) => {
      dispatch({
        type: "ALERT_ON", alertContent,alertType
      })
    },
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      })
    }
  }
}
// this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);