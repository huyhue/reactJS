import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'' ,
            userObj:{}
        }
    }
    //props.getUserEditInfoApp
    
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info 
        });
        this.props.getUserEditInfoApp(info) ; 
    
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject= {this.props.userEditObject}
            changeEditUserStatus = {() => this.props.changeEditUserStatus()}
             />
        }
        
    }

    isChange = (event) => {
        console.log(event.target.value);//lấy giá trị nhập vào tìm kiếm
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);//nhập từ tìm kiếm là nó hiển thị ra tức thời
    }
        //giao tiếp giữa Search và AddUser thông qua components cha App (sử dụng state)
    hienThiNut = () => {
        if(this.props.hienThiForm === true){
          return   <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()}  > Đóng lại </div>

        }else 
        {
            return <div className="btn btn-block btn-outline-info"   onClick={()=>this.props.ketNoi()} > Thêm mới </div>
        }
    }
    render() {
       
        return (
            <div className="col-12">
                {/* Form khi click edit hiện lên */}
                 {this.isShowEditForm()}
                <div className="form-group">
                <div className="btn-group btn-block">
                    <input type="text" className="form-control" onChange={(event) => this.isChange(event) }   placeholder="Nhập tên cần tìm   "
                    />
                    <div className="btn btn-info"
                     onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm</div>
                      {/* đẩy giá trị tìm kiếm qua app vì csdl bên app (có thể truyền tham só qua lại với nhau)*/}
                </div>
                </div>

                <div className="form-group">
                 <div className="btn-group1">
                     {this.hienThiNut()}
                
                </div>
                </div>
                <hr/>
            </div>
          
        );
    }
}

export default Search;