import React,{Fragment} from 'react';
import './App.css';


// function App() {
//   const name ="리액트"
//   return (
//     <>
//     {name==="리액트"?(
//       <h1>리액트입니다.</h1>
//     ) : (
//       <h2>리액트가 아닙니다.</h2>
//     )}
//     </>
//   )
// }

// function App() {
//   const name ="리액트"
//   return <div>{name==='리액트'? <h1>리액트입니다.</h1> : null}</div>;
// }

// function App() {
//   const name ="리액트";
//   const number=0;
//   return <div>{name==='리액트' && <h1>리액트입니다.</h1>}</div>;
//   // return number && <div>내용</div> false인데도 0이란 return 값을 반환.조심!
// }

// function App(){
//   const name=undefined;
//   // return name || '값이 undefined입니다.'  //를 통해 rendering error 방지해야함
//   // return <div>{name}</div>  //이건 괜찮음
//   return <div>{name || '리액트'}</div>  //undefined일 때 보여주고 싶은 값이 있다면!
// }

// function App(){
//   const name='리액트';
//   const style={
//     backgroundColor : 'black',  //-없애고 대문자로 쓰는 카멜 표기법!
//     color : 'aqua',
//     fontSize : '48px',
//     fontWeight : 'bold',
//     padding : 16
//   };
//   return <div style={style}>{name}</div>
// }

function App(){
  const name='리액트';  //react 내 모든 태그는 반드시 열고 닫고 해줘야함. 근데 input /처럼 self closing가능한 태그도 있음
  return (<>
  {/* 주석처리 이렇게 해야함...괄호도 써야 하나봄 */}
  <div 
  className="react" //여기도 주석 가능 태그를 대신 여러줄 써야 함.
  >
  {name}</div>
  <input /> 
  </>
  );
}
export default App;
