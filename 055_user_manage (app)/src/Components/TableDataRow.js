import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.Permission === 1){ return "Admin";}
        else if(this.props.Permission === 2){ return "Moderator";}
        else{ return "Normal";}
    }
    //deleteButtonClick
    editClick = () => {
        this.props.editFunClick();//truyển dữ liệu để xử lý
        this.props.changeEditUserStatus(); //hiển thị form edit lên
    }
    deleteButtonClick = (idUser) => {
         this.props.deleteButtonClick(idUser);
    }
    render() {
        // props.editFunClick 
        return (
            <tr>
                        <td>{this.props.stt+1}</td>
                        <td>{this.props.userName}</td>
                        <td>{this.props.tel}</td>
                        <td>{
                             this.permissionShow() 
                            }</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua" 
                            onClick={()=>this.editClick()}> 
                            
                            <i className="fa fa-edit    " /> Sửa </div>
                         {/* Kích vào sửa thì nó truyền thông tin (TableDataRow -> TableData -> App (kết nối với cha, mọi xử lý thông qua cha)-> Search -> EditUser (hiển thị form)) */}
                            <div className="btn btn-danger btn-block xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>
                             <i className="fa fa-delete    " /> Xoá 
                             </div>
                        </div>
                        </td>
                    </tr>
        );
    }
}

export default TableDataRow;