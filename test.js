let age = 14

// 1. function welcome(age)와 같음 / let age와 다름

let welcome = (age < 18) ?
    (age) => console.log(`${age}살 어리네 ㅎㅋ`) :
    (age) => console.log(`${age}살님 늙었네 ㅋㅋ`)
// 2. 매개변수 age에 let age = 14를 박아줌
welcome(age)