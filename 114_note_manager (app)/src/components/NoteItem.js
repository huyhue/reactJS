import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
  //khi click vào sửa thì thực hiện hai công việc: hiển thị form và lấy nội dung phần tử
    twoActionButton = () => {
      this.props.changeEditStatus(); // action 1 : hiển thị form lên
      //action 2 :  ham lay noi dung truyen trong store , de store update du lieu
    //  console.log(this.props.note);
      this.props.getEditData(this.props.note) ;
    }
    deleteData= ()=>{
      // console.log(this.props.note.id);
      this.props.getDeleteData(this.props.note.id);
      this.props.alertOn('Xóa ghi chú " ' + this.props.note.noteTitle + ' " Thành công',"danger");
    }

    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                {this.props.noteTitle}
              </a>
              <div className="btn-group float-right">
                    <button className="btn btn-outline-info" onClick={()=>this.twoActionButton()}> Sửa </button>
                    <button className="btn btn-outline-secondary" onClick={()=>this.deleteData()}> Xoá </button>
              </div>
            </h5>
          </div>
          <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                  {this.props.noteContent}
                  </div>
                </div>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {}
}

//kết nối với store
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    getEditData: (editObject) => {
      dispatch({
        type:"GET_EDIT_DATA",
        editObject  //lấy item để đẩy lên store
      })
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type:"DELETE",
        deleteId  
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
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
 