import React, { Component } from "react";
import "../App.css";
function Square(props) {
  return (
    <div>
      <h2> Hai sob!!</h2>
      <p>
        Nama : {props.nama} <br></br>
        NIM {props.nim}
        <br></br>
        Email : {props.email}
      </p>
      <button href={props.link}>
        <a href={props.link}>Click here</a>
      </button>
    </div>
  );
}
export default class CompAndProps extends Component {
  render() {
    const bgColor = [
      {
        backgroundColor: this.props.bgColor1,
        margin: "10px",
        "box-shadow": "3px 3px 5px rgb(14, 41, 84,0.6)",
        "text-shadow": "2px 1px 1px rgba(0,0,0,0.2)",
      },
      {
        backgroundColor: this.props.bgColor2,
        margin: "10px",
        "box-shadow": "3px 3px 5px rgb(31, 110, 140,0.6)",
        "text-shadow": "2px 1px 1px rgba(0,0,0,0.2)",
      },
      {
        backgroundColor: this.props.bgColor3,
        margin: "10px",
        "box-shadow": "3px 3px 5px rgb(46, 138, 153,0.6)",
        "text-shadow": "2px 1px 1px rgba(0,0,0,0.2)",
      },
      {
        backgroundColor: this.props.bgColor4,
        margin: "10px",
        "box-shadow": "3px 3px 5px rgb(132, 167, 161,0.6)",
        "text-shadow": "2px 1px 1px rgba(0,0,0,0.2)",
      },
    ];
    return (
      <div className="wrapper">
        <div className="User-info" style={bgColor[0]}>
          <Square
            nama="Setyawan Adhi Nugroho"
            nim="21120120130068"
            email="setyawanadhi@students.undip.ac.id"
            link="/setyawan"
          />
        </div>
        <div className="User-info" style={bgColor[1]}>
          <Square
            nama="M. Irmawan"
            nim="21120120130125"
            email="irmawan@students.undip.ac.id"
            link="/iwan"
          />
        </div>
        <div className="User-info" style={bgColor[2]}>
          <Square
            nama="Kakung Bangkit Pakarti"
            nim="21120120140130"
            email="bkakung71@students.undip.ac.id"
            link="/kakung"
          />
        </div>
        <div className="User-info" style={bgColor[3]}>
          <Square
            nama="Muhammad Sulthon Auliya"
            nim="21120120130047"
            email="msulthonauliya@students.undip.ac.id"
            link="/sulthon"
          />
        </div>
      </div>
    );
  }
}
