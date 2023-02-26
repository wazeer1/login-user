import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/Store";
import Back from "../assets/images/flat-mountains.svg";
import Logo from "../assets/images/logo.png";
import { axiosConfig } from "../general/axiosConfig";

const Login = () => {
    const [active, setActive] = useState("");
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error ,setError]=useState("")
    const {state,dispatch}=useContext(Context)
    const navigate = useNavigate()
    const handleSignup = () =>{
        axiosConfig.post('login-password/',{
            username : username,
            password : password,
        }).then(function(res){
            if (res.data.StatusCode == 6000){
                dispatch({
                    type:"UPDATE_USER_DATA",
                    payload:{
                        isVerified:true,
                        access:res.data.data.response.access
                    }
                })
            }else{
                setError(res.data.data.message)
                setTimeout(() => {
                    setError("")
                }, 3000);
            }
        })
    }
    console.log(active);
    return (
        <Cover>
            <Left Back={Back}>
                <Wrapper className="wrapper">
                    <Top>
                        <h1>
                            <LogoContainer>
                                <img src={Logo} />
                            </LogoContainer>
                        </h1>
                    </Top>
                    <Center>
                        <h3>WELCOME</h3>
                        <h4>blog posts</h4>
                    </Center>
                    <Bottom>
                        <h4>signin to explore</h4>
                    </Bottom>
                </Wrapper>
            </Left>
            <Right>
                <FormContainer className="wrapper">
                    <FormTop>
                        <h3>LogIn</h3>
                    </FormTop>
                    <FormCover>
                        <InputCover
                            className={active == "username" ? "active" : null}
                        >
                            <input
                                type="text"
                                placeholder="Enter Your Username"
                                onFocus={() => setActive("username")}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </InputCover>
                        <InputCover
                            className={active == "password" ? "active" : null}
                        >
                            <input
                                type="text"
                                placeholder="Enter Your Password"
                                className={
                                    active == "password" ? "active" : null
                                }
                                onFocus={() => setActive("password")}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </InputCover>
                    </FormCover>
                    <FormBottom>
                    <Button onClick={()=>handleSignup()}>Sign up</Button>
                    <p>Dont have account? <Link to="/">signin</Link></p>
                    <p className="error_message">{error?error:null}</p>
                    </FormBottom>
                </FormContainer>
            </Right>
        </Cover>
    );
};

export default Login;
const Cover = styled.div`
    height: 100vh;
    background-color: #141414;
    display: flex;
`;
const Left = styled.div`
    width: 50%;
    height: 100%;
    /* padding-top: 40px; */
    background-image: url(${({ Back }) => Back});
    background-repeat: no-repeat;
    background-size: cover;
`;
const Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: #fff;
`;
const Top = styled.div``;
const LogoContainer = styled.div`
    width: 250px;
    img {
        width: 100%;
    }
`;
const Center = styled.div`
    h3 {
        text-align: center;
        font-size: 55px;
        color: #fff;
    }
    h4 {
        text-align: center;
        color: #fff;
        font-size: 34px;
    }
`;
const Bottom = styled.div`
    color: #fff;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
const FormContainer = styled.div`
    padding: 80px 0px;
`;
const FormTop = styled.div`
    h3 {
        font-size: 44px;
    }
`;
const FormCover = styled.div`
    padding: 60px 0px;
`;
const InputCover = styled.div`
    height: 45px;
    /* border-bottom: 4px solid red; */
    margin-bottom: 20px;
    position: relative;
    transition:.4s ease;
    &.active {
        &:after {
        height: 4px;

            background-image: linear-gradient(
            to left,
            #667eea,
            #764ba2,
            #6b8dd6,
            #8e37d7
        );
            transition:0.4s ;
        }
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-image: linear-gradient(
            to right,
            #667eea,
            #764ba2,
            #6b8dd6,
            #8e37d7
        );
        box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
        transition: .4s ease;
    }
    input {
        width: 100%;
        height: 100%;
        font-size: 24px;
        padding: 0px 10px;
        &::-webkit-input-placeholder {
            font-size: 24px;
        }
    }
    /* background-color: green; */
`;
const FormBottom = styled.div`
    p{
        text-align: center;
        margin-top: 10px;
        &.error_message{
            color:red;
        }
    }
`;
const Button = styled.div`
    height:45px;
    background-color: #141414;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
`;