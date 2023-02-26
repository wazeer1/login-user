import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/Store";
import LogoImg from "../assets/images/logo.png";
import Avatar from "react-avatar";
import DownImg from "../assets/images/down-arrow.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {
        state: { userData },dispatch
    } = useContext(Context);
    const [active,setActive]=useState(false)
    const navigate = useNavigate()
    const handleLogOut = ()=>{
        dispatch({
            type:"UPDATE_USER_DATA",
            payload:{
                isVerified:false,
                access:""
            }
        })
        navigate("/")
    }
    return (
        <Cover>
            <Container className="wrapper">
                <Logo>
                    <img src={LogoImg} />
                </Logo>
                <Right>
                    <Avatar name={userData.name} round={true} size="70" />
                    <h4>{userData.name}</h4>
                    <Down onClick={()=>setActive((prev)=>!prev)}>
                        <img src={DownImg} />
                    </Down>
                    <LogContainer active={active}>
                        <Button onClick={()=>handleLogOut()}>Log out</Button>
                    </LogContainer>
                </Right>
            </Container>
        </Cover>
    );
};

export default Header;
const Cover = styled.div`
    padding: 20px 0px;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;
    h4 {
        font-size: 34px;
    }
`;
const Logo = styled.div`
    width: 150px;
    img {
        width: 100%;
    }
`;
const Down = styled.div`
    width: 30px;
    cursor: pointer;
    img {
        width: 100%;
    }
`;
const LogContainer = styled.div`
    position: absolute;
    width:250px;
    height: 80px;
    transform: ${({active})=>active?'scale(1)':'scale(0)'};
    transition: .4s ease;
    transform-origin: top right;
    right: 0;
    /* background-color: aqua; */
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #000;
`;
const Button = styled.div`
    width:70%;
    height:35px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
`;