
import * as firebase from 'firebase';
// var config = {
//     apiKey: "AIzaSyA7mA7YMkZWkW_D2brIdl0GWCVIMaMR6SM",
//     authDomain: "notereactfedu.firebaseapp.com",
//     databaseURL: "https://notereactfedu.firebaseio.com",
//     projectId: "notereactfedu",
//     storageBucket: "notereactfedu.appspot.com",
//     messagingSenderId: "590850354788"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyBejUz1Rv4dXIYekuiOxmpX0VtXmLQCQgA",
    authDomain: "note1258741.firebaseapp.com",
    databaseURL: "https://note1258741.firebaseio.com",
    projectId: "note1258741",
    storageBucket: "note1258741.appspot.com",
    messagingSenderId: "861194717828",
    appId: "1:861194717828:web:76500cb288aac2bdfa10d1",
    measurementId: "G-8NQ0MJSMDS"
  };

  export const firebaseConnect =  firebase.initializeApp(firebaseConfig);

  var data = firebase.database().ref('dataForNote/node3' );
//sua du lieu 
data.set({
    id:3,
    title:"Ghi chu 20/12 ",
    content : " Demo content for note huy tong nha huy hue"
})


      data.once('value').then(function(snapshot){
          console.log(snapshot.val());
      })
