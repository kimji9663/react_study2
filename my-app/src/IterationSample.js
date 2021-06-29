import React from 'react';

/** map 함수 알기
 * 기존 배열로 새로운 배열을 만드는 역할

 ** ES5 문법
    var numbers = [1, 2, 3, 4, 5];
    var result = numbers.map(function(num){
      return num * num;
      console.log(result);
    });

 ** ES6 문법
    const numbers = [1, 2, 3, 4, 5];
    const result = number.map(num => num * num);
    console.log(result);
 */

const IterationSample = () => {
    // return (
    //     <ul>
    //         <li>눈사람</li>
    //         <li>얼음</li>
    //         <li>눈</li>
    //         <li>바람</li>
    //     </ul>
    // )

    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
};

export default IterationSample;