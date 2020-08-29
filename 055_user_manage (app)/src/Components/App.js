import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
 //Tự tạo id không trùng lập
const uuidv1 = require('uuid/v1');
//Mọi vấn đề xử lý dữ liệu đều thông qua App (cha) xử lý
/*Cấu trúc của bài:
    App (cha): - Search (con)
               - AddUser (con)
               - TableData (con):  - TableDataRow (cháu so với app)*/


class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      hienThiForm:false  , 
      searchText:'',
      data:[],
      editUserStatus:false,
      userEditObject:{},
    }
  }
  
  //Trước khi render xảy ra
  componentWillMount() {
    // Kiểm tra
    if(localStorage.getItem('userData') === null ){
      localStorage.setItem('userData',JSON.stringify(DataUser)); //Tạo localStorage
    }else {
      var temp = JSON.parse(localStorage.getItem('userData')); //Lấy localStorage
      this.setState({
        data:temp
      });
    }
  }
  
  deleteUser = (idUser) => {  
   var  tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });
  // Đẩy dữ liệu vào
  localStorage.setItem('userData',JSON.stringify(tempData));
  }
    //có được dữ liệu đã sửa từ EditUser, gán vào data luôn
  getUserEditInfoApp = (info) => {
     this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name; 
        value.tel = info.tel; 
        value.Permission = info.Permission; 
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
   //lấy dữ liệu đối tượng cần sửa
  editUser = (user) => {
   
    this.setState({
      userEditObject:user
    })
   
  }
    //hiển thị form edit
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  //Hàm để lấy dữ liệu truyền từ AddUser
  getNewUserData = (name,tel,Permission) => {

    var item = {};//đóng gói đối tượng
    item.id = uuidv1();//tự động tăng giảm id
    item.name = name; 
    item.tel = tel; 
    item.Permission = Permission; 
    var items = this.state.data;
    items.push(item); 

    this.setState({
      data:items//set vào state là bảng tự động hiển thị thêm phần tử, nó là biến cập nhật
    });
    localStorage.setItem('userData',JSON.stringify(items));
     
  }
//lấy giá trị tìm kiếm tìm Search qua để tìm kiếm và hiển thị
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });    
  }
//giao tiếp giữa Search và AddUser thông qua components cha App (sử dụng state)
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

   render() {   
      var ketqua = []; //tạo mảng kêt quả
    this.state.data.forEach((item)=>{
       //tìm kiến được thì push vào kết quả
        if(item.name.indexOf(this.state.searchText) !== -1){
          ketqua.push(item);
        }
     }) //phần này để vị trí này vì nó sẽ cập nhât dữ liệu liên tục khi thực hiện các thao tác khác.

 
   
   
    
    //  console.log(ketqua);
    return (
      <div>
       <Header/>
       <div className="searchForm">
          <div  className="container">
          <div  className="row">
              <Search
              getUserEditInfoApp ={(info) => this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject}
              checkConnectProps={(dl)=>this.getTextSearch(dl)}
              ketNoi={()=>this.doiTrangThai()}
               hienThiForm={this.state.hienThiForm}
               editUserStatus={this.state.editUserStatus}
               changeEditUserStatus= {()=>this.changeEditUserStatus()}
               />
              <TableData 
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              changeEditUserStatus= {()=>this.changeEditUserStatus()}
              editFun={(user) => this.editUser(user)} 
              dataUserProps={ketqua}/>
              <AddUser add={(name,tel, Permission) => this.getNewUserData(name,tel, Permission)} hienThiForm={this.state.hienThiForm}/>
          </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
