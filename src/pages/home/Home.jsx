import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCardComponent from "./RecipeCard";
import homeSvg from '../../assets/home.svg';
import {GiCupcake} from 'react-icons/gi';

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
	const [query, setQuery] = useState("");
	const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
	const [recipes, setRecipes] = useState([]);
	console.log(recipes);
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

	const getData = async (e) => {
        e.preventDefault()
		const result = await axios.get(url);
		setRecipes(result.data.hits);
		setQuery("");
	};


	return (
		<div style={{perspective: '1000px'}}>
			<Header
				meal={meal}
				setMeal={setMeal}
				query={query}
				setQuery={setQuery}
				mealTypes={mealTypes}
				getData={getData}
			/>

			{recipes.length > 0 ?( 
				<MainContainer>
					{ recipes.map((recipe, index) => {
						console.log(recipe.recipe)
					return(<RecipeCardComponent key={index.toString()} recipe={recipe.recipe}/>)})}
				</MainContainer>
			) : (
				<ImgDiv>
					<GiCupcake style={{fontSize: '20rem', color: 'white'}} />
				</ImgDiv>
			)
		}
		</div>
	);
};

export default Home;
