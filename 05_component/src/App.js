import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function One() {
  return (
    <div>
      <h2>Cach 1: </h2>
    </div>
  )
}

var Two = function () {
  return (
    <div>
      <h2>Cach so 2: Anonymous function</h2>
    </div>
  )
}

var Three = () => {
  return (
    <div>
      <h2>Cach so 3: Arrow function</h2>
    </div>
  )
}
//cach 1: su dung props function
function NumberOne(props) {
  return (
    <div className="col-4">
      <div className="card">
        <img className="card-img-top" src={props.linkanh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  )

}
//Cach 2: su dung class de dinh nghia va thao tac voi props
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}



class Four extends Component {
  render() {
    return (
      <div>
        <h2>Cach so 4: Dinh nghia bang component bang class</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <One />
        </header>
        <Two />
        <Three />
        <Four />
        <div class="container">
          <div class="row">
            <NumberOne tieude="my ngoc day" linkanh="https://img.thuthuatphanmem.vn/uploads/2018/10/10/anh-dep-hoat-hinh-anime-girl_052251347.jpg" />
            <NumberTwo tieude="giahuyday" linkanh="https://a.wattpad.com/cover/188934607-288-k916793.jpg" />
            <NumberTwo tieude="ca hai nguoi day" linkanh="https://hahoatien.edu.vn/tinhyeu/wp-content/uploads/2016/12/Avatar-dep-hoat-hinh-1.jpg" />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
