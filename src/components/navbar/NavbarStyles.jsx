import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #e1f1dd;
    height: 75px;
    font-size: 2rem;
`;

export const Logo = styled(Link)`
    padding: 1rem 0;
    color: #393e46;
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;
    i{
        font-family: "Girassol", sans-serif;
    }
    span{
        font-family: "Girassol", sans-serif;
    }
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 4px;
        width: 25px;
        background: #00adb5;
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
    color: #02475e;
    transition: all 0.8s ease-in-out;
    font-size: 2rem;
    font-family: 'Girassol', sans-serif;

    &:hover{
        color: #00adb5;
        font-weight: bold;
    }

    &.active{
        color: #00adb5;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        background-color: #e1f1dd;
        border: 1px solid #00adb5;
        border-radius: 10px;
        width: 100%;
    }

`