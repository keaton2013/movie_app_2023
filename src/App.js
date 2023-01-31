import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  //console.log(props);
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="200" height="200" />
    </div>
  )
}

const foodILike = [
  { id: 1,
    name: 'Kimchi',
    image: 'https://images.says.com/uploads/story_source/source_image/759203/6528.jpg',
    rating: 5,
  },
  { id: 2,
    name: 'Samgyeopsal',
    image: 'http://1.bp.blogspot.com/-zuRxdhrf8wg/VbG3fjsOEuI/AAAAAAAAS_Q/529_VUJYnlY/s640/samgyeopsal.jpg',
    rating: 4.8,
  },
  { id: 3,
    name: 'Bibimbap',
    image: 'https://www.dopenkitchen.com.sg/wp-content/uploads/2020/06/korean-bibimbap.jpg',
    rating: 4.8,
  },
  { id: 4,
    name: 'Donkasu',
    image: 'https://i.ytimg.com/vi/soHfKt4qTUI/maxresdefault.jpg',
    rating: 3.8,
  },
  { id: 5,
    name: 'Kimbap',
    image: 'http://seonkyounglongest.com/wp-content/uploads/2016/05/IMG_8375-copy.jpg',
    rating: 4.2,
  },

];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />
// }

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} />


function App() {
  //return <div className="App"/>;
  console.log(foodILike.map(renderFood));

  return (
    <div>
      <h1>Hello! 안녕! こんにちは！</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
