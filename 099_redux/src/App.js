import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    //Hoc ve toan tu 3 cham
    //  var a1 = [3,5,8,7];
    //  var a2 = [...a1];
    //  console.log(a1);
    //  a2[0]=100;
    //  console.log(a1);
    //  console.log(a2);

    // var b1 ={
    //   num: [34,55,23],
    //   status:true
    // }
    // var b2={...b1, status: false};
    // console.log(b2);
    // var b3 = {...b1, num:[...b1.num, 100]};
    // console.log(b3);

    var redux = require('redux');  //khai báo thư viện
    var oldState = {
      num: ["man hinh", "chuot", "ban phim"],
      editStatus: true
    }

    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus }

        case "ADD_NEW":
          return { ...state, num: [...state.num, action.newItem] }

        case "DELETE": //xóa phần tử ở vị trí đầu tiên (0)
          return { ...state, num: state.num.filter((value, i) => i !== action.number) }

        default:
          return state;
      }
    }
    var store1 = redux.createStore(reducer1); //hàm khởi tạo
    store1.subscribe(() => {
      console.log(JSON.stringify(store1.getState()));
    })

    store1.dispatch({ type: "CHANGE_EDIT_STATUS" })
    store1.dispatch({
      type: "ADD_NEW",
      newItem: "Tai Nghe"
    })

    store1.dispatch({
      type: "DELETE",
      number: 0
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Learn Redux</h1>
        </header>
        <p className="App-intro" id="tb">
          Những bài học nền tảng đầu tiên về sử dụng redux ấn phím (F12).
        </p>
      </div>
    );
  }
}

export default App;
