/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [titles, chgTitle] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬독학']);
  let [date, chgDate] = useState(['2월 18일','2월 19일','2월 20일']);
  let [content, chgContent] = useState(['내용1','내용2','내용3']);
  let [modal, chgModal] = useState([0,0,0]);
  let [likes, chglikes] = useState([0,0,0]);
  let [val, chgVal] = useState(0);

  let [text, chgText]  = useState('');

  function callChglikes(v) {
    let newV = [...likes];
    newV[v] ++;
    chglikes(newV);
  }

  function callChgModal(v) {
    let newModal = [...modal];
    for(let i=0; i<modal.length; i++) {
      if( i===v ){
        (newModal[i]===1) ? newModal[i]=0 : newModal[i] =1;
      }else{
        newModal[i] = 0;
      }
    }
    chgModal(newModal);
    chgVal(v);
  }

  function addArt() {
    let newTitles = [...titles];
    newTitles.unshift(text);
    chgTitle(newTitles);

    let newDate = [...date];
    newDate.unshift('7월 10일');
    chgDate(newDate);

    let newContent = [...content];
    newContent.unshift('내용4');
    chgContent(newContent);
  }

  return (
    <>
    <div className="black-nav">개발 blog</div>
    {
      titles.map(function(v,i){
        return (
          <>
          <div className="subDiv imogi">
            <h2 onClick= { ()=>callChgModal(i) } > {v} </h2>
            <span className="imogi" onClick={ ()=>callChglikes(i) } > 좋아요 👍</span> {likes[i]} 
            <p> { date[i] }</p>
            <hr/>
          </div>
          </>
        )
      })
    }
    <div className="publish">
      <input onChange={ (e)=>{ chgText(e.target.value) } }/>
      <button onClick={ addArt }>저장</button>
    </div>
    {
      modal.map(function(v,i){
        return (
          (modal[i] === 1)
          ? <Modal titles={titles} content={content} val={val} date={date}/>
          : null
        )
      })
    }

    </>
  )


}

function Modal(p) {
  return (
    <>
    <div className="modal">
      <h2> {p.titles[p.val]} </h2>
      <p> {p.content[p.val]} </p>
      <p> {p.date[p.val]} </p>
    </div>
    </>
  )
}

// 옛날리액트
class Profile extends React.Component {
  constructor(){
    super();
    this.state= {name:"Kim", age:30}
  }

  chgName() {
    this.setState({name:'Park'});
  }

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.chgName.bind(this)}></button>
      </div>
    )
  }
}

export default App;