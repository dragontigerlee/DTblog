/* eslint-disable */
import { map } from 'async';
import React, { useState } from 'react';
import './App.css'

function App(){
  let [글제목, 글제목변경] = useState( ['남자 코트 추천', '강남 우동 맛집', '파이썬독학'] );
  let [따봉, 따봉변경] = useState( [0,0,0] );
  let [num, chgNum] = useState(0);

  let [modal, modal변경] = useState(false);

  function 반복된UI(){
    var 어레이 = [];
    for (var i=0; i<3; i++) {
      어레이.push(<div> 안녕</div>);
    }

    return 어레이
  }
  function chgModal(v) {
    var newModal = modal;
    (modal === true ) ? newModal=false : newModal=true;
    modal변경(newModal);
    
    var newNum = num;
    newNum = v;
    chgNum(newNum);
  }

  function chg따봉(idx) {
    var new따봉 = [...따봉];
    new따봉[idx]++;
    따봉변경(new따봉);
  }

  let posts = '강남 고기 맛집';

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코드 추천';
  //   글제목변경( newArray );
  // }
  // function 순서바꾸기() {
  //   var newArray = [...글제목];
  //   var temp = newArray[0];
  //   newArray[0] = newArray[1];
  //   newArray[1] = temp;
  //   글제목변경( newArray );
  // }

  // function 모달체크() {
  //   // var newModal = [...modal]; <-이거는 에러
  //   var newModal = modal;
  //   // console.log(newModal);
  //   (newModal === true ) ? newModal = false : newModal = true ;
  //   modal변경( newModal );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick= { 제목바꾸기 } >버튼</button> */}
      {/* <button onClick= { 순서바꾸기 } >버튼</button> */}
      {/* <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { modal변경(true) } } >{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div> */}
      
      {/* { 반복된UI() } */}

      {

        글제목.map(function(글,idx){
          return (
                <div className="list">
                  <h3 onClick = { ()=>{chgModal(idx)} }>{ 글 } <span onClick={ () => { chg따봉(idx) } }>👍</span> {따봉[idx]}</h3>
                  <p>2월 18일 발행</p>
                  <hr/>
                </div>
          )
        })

      }
      {/* <button onClick = { () =>modal변경(!modal) } >버튼</button> */}

      {
        modal === true
        ? <Modal 상위제목={글제목} num = {num}></Modal>
        : null
      }
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{ props.상위제목[props.num] }</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;