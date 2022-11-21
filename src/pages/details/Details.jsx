import React from "react";
import { useLocation } from "react-router-dom";
import {
  CupcakeContainer,
	DetailContainer,
	DetailPart,
	HeaderContainer,
	HeaderDetails,
	HeaderLabel,
	ImgContainer,
	Ingredients,
	IngredientsInfo,
	OtherPart,
  OtherPartInfo,
  OtherPartLabel,
  RecipeContainer,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";
import { GiCupcake } from "react-icons/gi";

const Details = () => {
	const {
		state: { recipe },
	} = useLocation();
	return (
		<DetailContainer>
			<HeaderContainer>
				<div>
					<HeaderLabel>{recipe.label}</HeaderLabel>
					<HeaderDetails>
						Calories : {Math.round(recipe.calories)}
						<br />
						Cuisine Type : {recipe.cuisineType}
            <br />
            Dish Type : {recipe.dishType}
            <br />
            Servings : {recipe.yield}
					</HeaderDetails>
				</div>
				<CupcakeContainer>
          <GiCupcake style={{color: 'white', fontSize: '10rem'}}/>
        </CupcakeContainer>
			</HeaderContainer>
			<DetailPart>

        <RecipeContainer style={{width: '100%'}}>
          <ImgContainer style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 0 auto'}}>
            <img  src={recipe.image} alt={recipe.label} />
          </ImgContainer>



          <Ingredients>
            <h2>Ingredients :</h2>
            <br/>
              { recipe.ingredientLines.map((line, index) => {
                return(
                  <IngredientsInfo>
                    <p>{index+1} </p>
                    <p>{line}</p>
                  </IngredientsInfo>
              )})}
          </Ingredients>



        </RecipeContainer>


				<OtherPart>
        <h3>Amount per Serving</h3>
        <br/>
        <h4>Nutrients :</h4>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.CHOCDF.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
						  {recipe.totalNutrients.CHOCDF.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.PROCNT.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
						  {recipe.totalNutrients.PROCNT.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.CHOLE.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
						  {recipe.totalNutrients.CHOLE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.ENERC_KCAL.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
						  {recipe.totalNutrients.ENERC_KCAL.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FAMS.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FAMS.quantity)}{" "}
						  {recipe.totalNutrients.FAMS.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FAPU.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FAPU.quantity)}{" "}
						  {recipe.totalNutrients.FAPU.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FASAT.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FASAT.quantity)}{" "}
						  {recipe.totalNutrients.FASAT.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FAT.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
						  {recipe.totalNutrients.FAT.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FATRN.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FATRN.quantity)}{" "}
						  {recipe.totalNutrients.FATRN.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.SUGAR.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.SUGAR.quantity)}{" "}
						  {recipe.totalNutrients.SUGAR.unit}
            </p>
          </OtherPartInfo>
          <br/>
					<h4>Vitamins & Minerals</h4>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.NA.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
						  {recipe.totalNutrients.NA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.CA.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.CA.quantity)}{" "}
						  {recipe.totalNutrients.CA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.MG.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.MG.quantity)}{" "}
						  {recipe.totalNutrients.MG.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.K.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.K.quantity)}{" "}
						  {recipe.totalNutrients.K.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FE.label} :
            </p>
            <p>
              {recipe.totalNutrients.FE.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.FE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.ZN.label} :
            </p>
            <p>
            {recipe.totalNutrients.ZN.quantity.toFixed(3)}{" "}						  {recipe.totalNutrients.ZN.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.P.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.P.quantity)}{" "}
						  {recipe.totalNutrients.P.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITA_RAE.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.VITA_RAE.quantity)}{" "}
						  {recipe.totalNutrients.VITA_RAE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITC.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.VITC.quantity)}{" "}
						  {recipe.totalNutrients.VITC.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.THIA.label} :
            </p>
            <p>
            {recipe.totalNutrients.THIA.quantity.toFixed(3)}{" "}
            {recipe.totalNutrients.THIA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.RIBF.label} :
            </p>
            <p>
            {recipe.totalNutrients.RIBF.quantity.toFixed(3)}{" "}						  
            {recipe.totalNutrients.RIBF.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.NIA.label} :
            </p>
            <p>
            {recipe.totalNutrients.NIA.quantity.toFixed(3)}{" "}						  
            {recipe.totalNutrients.NIA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITB6A.label} :
            </p>
            <p>
              {recipe.totalNutrients.VITB6A.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.VITB6A.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FOLDFE.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.FOLDFE.quantity)}{" "}
						  {recipe.totalNutrients.FOLDFE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.FOLAC.label} :
            </p>
            <p>
              {recipe.totalNutrients.FOLAC.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.FOLAC.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITB12.label} :
            </p>
            <p>
              {recipe.totalNutrients.VITB12.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.VITB12.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITD.label} :
            </p>
            <p>
              {recipe.totalNutrients.VITD.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.VITD.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.TOCPHA.label} :
            </p>
            <p>
              {recipe.totalNutrients.TOCPHA.quantity.toFixed(3)}{" "}
						  {recipe.totalNutrients.TOCPHA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.VITK1.label} :
            </p>
            <p>
            {recipe.totalNutrients.VITK1.quantity.toFixed(3)}{" "}
            {recipe.totalNutrients.VITK1.unit}
            </p>
          </OtherPartInfo>

					<OtherPartInfo>
            <p>
						  {recipe.totalNutrients.WATER.label} :
            </p>
            <p>
              {Math.round(recipe.totalNutrients.WATER.quantity)}{" "}
						  {recipe.totalNutrients.WATER.unit}
            </p>
          </OtherPartInfo>
				</OtherPart>
      















	
				
        
        <OtherPart>
        <h3>Percent Daily Intake</h3>
        <br/>
        <h4>Nutrients :</h4>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.CHOCDF.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.CHOCDF.quantity)}{" "}
						  {recipe.totalDaily.CHOCDF.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.CHOLE.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.CHOLE.quantity)}{" "}
						  {recipe.totalDaily.CHOLE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.ENERC_KCAL.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.ENERC_KCAL.quantity)}{" "}
						  {recipe.totalDaily.ENERC_KCAL.unit}
            </p>
          </OtherPartInfo>
	
					
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.FASAT.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.FASAT.quantity)}{" "}
						  {recipe.totalDaily.FASAT.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.FAT.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.FAT.quantity)}{" "}
						  {recipe.totalDaily.FAT.unit}
            </p>
          </OtherPartInfo>
					
          <br/>
					<h4>Vitamins & Minerals</h4>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.NA.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.NA.quantity)}{" "}
						  {recipe.totalDaily.NA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.CA.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.CA.quantity)}{" "}
						  {recipe.totalDaily.CA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.MG.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.MG.quantity)}{" "}
						  {recipe.totalDaily.MG.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.K.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.K.quantity)}{" "}
						  {recipe.totalDaily.K.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.FE.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.FE.quantity)}{" "}
						  {recipe.totalDaily.FE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.ZN.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.ZN.quantity)}{" "}
						  {recipe.totalDaily.ZN.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.P.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.P.quantity)}{" "}
						  {recipe.totalDaily.P.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITA_RAE.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.VITA_RAE.quantity)}{" "}
						  {recipe.totalDaily.VITA_RAE.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITC.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.VITC.quantity)}{" "}
						  {recipe.totalDaily.VITC.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.THIA.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.THIA.quantity)}{" "}
						  {recipe.totalDaily.THIA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.RIBF.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.RIBF.quantity)}{" "}
						  {recipe.totalDaily.RIBF.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.NIA.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.NIA.quantity)}{" "}
						  {recipe.totalDaily.NIA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITB6A.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.VITB6A.quantity)}{" "}
						  {recipe.totalDaily.VITB6A.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.FOLDFE.label} :
            </p>
            <p>
              {Math.round(recipe.totalDaily.FOLDFE.quantity)}{" "}
						  {recipe.totalDaily.FOLDFE.unit}
            </p>
          </OtherPartInfo>
					
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITB12.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.VITB12.quantity)}{" "}
						  {recipe.totalDaily.VITB12.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITD.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.VITD.quantity)}{" "}
						  {recipe.totalDaily.VITD.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.TOCPHA.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.TOCPHA.quantity)}{" "}
						  {recipe.totalDaily.TOCPHA.unit}
            </p>
          </OtherPartInfo>
					<OtherPartInfo>
            <p>
						  {recipe.totalDaily.VITK1.label} :
            </p>
            <p>
            {Math.round(recipe.totalDaily.VITK1.quantity)}{" "}
						  {recipe.totalDaily.VITC.unit}
            </p>
          </OtherPartInfo>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
				</OtherPart>







        



			</DetailPart>
		</DetailContainer>
	);
};

export default Details;
