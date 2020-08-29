import editStatusReducer from './reducers/editStatusReducer';
import numReducer from './reducers/numReducer';
var redux = require('redux');

// var oldState = {
//   num:["man hinh","chuot","ban phim"],
//   editStatus : true
// }
//  var reducer1 = (state=oldState, action) => {
//    switch (action.type) {
//      case "CHANGE_EDIT_STATUS":
//        return {...state,editStatus:!state.editStatus}          
      
//      case "ADD_NEW":
//        return {...state,num:[...state.num,action.newItem]}       

//      case "DELETE":
//        return {...state,num:state.num.filter((value,i) => i !== action.number  )}       
//      default:
//        return state; 
//     }
//  }

 // Tập hợp các reducer lại giúp dễ quản lý hơn
const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})

//Tạo store1
 var store1 = redux.createStore(allReducers); 

 //Theo dõi và kích hoạt mỗi khi mà state được thay đổi
 store1.subscribe(() => {
   console.log(JSON.stringify(store1.getState())); 
 })
 
//gọi đến action trong store
 store1.dispatch({type:"CHANGE_EDIT_STATUS"})
 store1.dispatch({
   type:"ADD_NEW",
   newItem:"Tai Nghe "
 })

 store1.dispatch({
   type:"DELETE",
   number:0
 })

 export default store1; 
 