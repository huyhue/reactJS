import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    
  //Lấy dữ liệu thành viên được thêm mới bằng bằng sự kiện onChange
    isChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        
        this.setState({
            [name]:value//đẩy dữ liệu vào state
        });
        // pakage to item 
        // var item ={};
        // item.id = this.state.id ; 
        // item.name = this.state.name ; 
        // item.tel = this.state.tel ; 
        // item.Permission = this.state.Permission ; 
     //   console.log(item);
    }

      //giao tiếp giữa Search và AddUser thông qua components cha App (sử dụng state)
    kiemTraTrangThai = () =>{
        if(this.props.hienThiForm === true){
            return ( 
              //Tự động co giãn giao diện sử dụng col
            <div className="col">        
            <form method="post"> 
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới user vào hệ thống </div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                  </div>
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)}  name="tel" className="form-control" placeholder="Điện thoại " />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" name="Permission" onChange={(event) => this.isChange(event)}  required>
                      <option value>Chọn Quyền mặc định </option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                                    {/* <input type="reset" : xóa trắng nội dụng sau khi thêm mới */}
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel, Permission)=> this.props.add(this.state.name, this.state.tel, this.state.Permission) } value=" Thêm mới " />
                                   {/* Lấy nội dung gửi lên App và đóng gói đối tượng */}
                  </div>
                </div>
              </div>
              </form>
              </div>
            )
        }
    }

    render() {
      //  console.log(this.state);
        return (
           
            <div >

            
                
              
               {
                   this.kiemTraTrangThai()
               }

             
             
          </div>
          
        );
    }
}

export default AddUser;