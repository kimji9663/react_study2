import React from 'react'
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (
    <>
      <h2>I Love {name}!</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
  id: 1,
  name: "Kimchi",
  image: "https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
  rating: 5
  },
  {
  id: 2,
  name: "bulgogi",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
  rating: 4
  },
  {
  id: 3,
  name: "kimbap",
  image: "https://static.wtable.co.kr/image-resize/production/service/recipe/689/4x3/edd1e01f-4502-453b-8b61-688941aefb76.jpg",
  rating: 3
  },
  {
  id: 4,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  rating: 2
  }
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
