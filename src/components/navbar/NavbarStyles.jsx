import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    padding: 0 1rem ;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #eaddf1;
    height: 75px;
    font-size: 2rem;
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0rem ;
    padding-left: 1rem;
    color: #3f0762;
    text-decoration: none;
    font-weight: 800;
    font-size: 3rem;
    i{
        font-family: 'Dancing Script', cursive;
    }
    span{
        font-family: 'Dancing Script', cursive;
    }
    font-weight: 400;
    
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 4px;
        width: 25px;
        background-color: #47025e;

        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px){
        display: flex;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1000;
    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height .7s;
    }
`;

export const MenuLink = styled(NavLink)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #47025e;
    transition: all 0.8s ease-in-out;
    font-size: 2rem;
    font-family: 'Dancing Script', cursive;
    &:hover{
        color: #8e00b5;
        font-weight: bolder;
    }

    &.active{
        color: #8e00b5;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        background-color: #f1ddee;
        border: 1px solid #9400b5;
        border-radius: 10px;
        width: 100%;
    }

`