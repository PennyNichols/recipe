import styled from "styled-components";

export const DetailContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	background: #6e108b;
	min-height: calc(100vh-75px);
	padding: 5px;
`;
export const DetailPart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-start;
	margin: 1rem;
	border: 1px solid white;
	border-radius: 5px;
	background-color: #eaddf1;
	position: relative;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const ImgContainer = styled.div`
	border: 1px solid #3f0762;

	padding: 10px;
	border-radius: 3px;
	margin: 2rem;
	display: flex;
	margin: auto;
	img {
		border: 1px solid #3f0762;

		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 250px;
		@media (max-width: 500px) {
			width: 150px;
		}
	}
`;
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 5rem;
	margin: 25px;
	font-size: 3rem;
	perspective: 1000px;
    
`;

export const CupcakeContainer = styled.div`
	background: transparent;
	transform: rotateY(360deg);
	animation: rotateAnimation 8s linear infinite;

	@keyframes rotateAnimation {
		from {
			transform: rotateY(360deg);
		}
		to {
			transform: rotateY(0deg);
		}
	}
	@media (max-width: 500px) {
		display: none;
	}
`;

export const HeaderLabel = styled.div`
	font-size: 3rem;
	font-family: "Dancing Script", cursive;
	color: white;
	margin-bottom: 2rem;
	@media (max-width: 500px) {
		font-size: 2rem;
	}
`;

export const HeaderDetails = styled.div`
	font-size: 1rem;
	text-transform: uppercase;
	color: white;
`;

export const OtherPart = styled.div`
	width: 200px;
	font-size: 0.7rem;
	margin: 2rem;
	text-transform: capitalize;
	text-align: center;
	@media (max-width: 500px){
        width: 250px;
        display: flex;
        flex-direction: column;
        margin: 2rem auto 2rem auto;
}
`;

export const OtherPartInfo = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const RecipeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	padding-top: 4rem;
`;
export const Ingredients = styled.div`
	font-size: 0.7rem;
	margin: 2rem;
	text-transform: capitalize;
	text-align: center;
    @media (max-width: 500px){
        text-align: left;
    }
`;

export const IngredientsInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
`;
