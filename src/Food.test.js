import React from 'react';
import PropTypes from "prop-types";
// npm i prop-types : 전달받은 props가 내가 원하는 props인지 확인
function Food({name, picture, rating}){
  return(
    <div>
      <h1>I Love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : 
    "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
    rating : 5.0
  },
  {
    id : 2,
    name : "samgiopsal",
    image : 
    "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating : 4.7
  },
  {
    id : 3,
    name : "donkatu",
    image : 
    "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9907F84D5C558B9429",
    rating : 4.2
  },
  {
    id : 4,
    name : "ramen",
    image : 
    "https://lh3.googleusercontent.com/proxy/G4a-S6u9Cu5lLNpQr6lUjYw7kvmBCG71_ng5_4e68XU5dvBA4aGAkFNb1fFRIyOwhJ_hbTE7CLx2saAxauPHBdKH3VXw9BmAsO_YLA",
    rating : 3.6
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key ={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  )
}

export default App;
