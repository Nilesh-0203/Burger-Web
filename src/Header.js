import styled from "styled-components";
//import Burger from "./images/bur.png"

const Header = () => {
  return (
    <Wrapper>
      {/* 1st row */}

      {/* 2nd row  */}
     <div className="container">
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
      </div>

     

    </Wrapper>
  );
};

const Wrapper = styled.header`

  
  .container{
    width:auto;
    height:7rem;
    
    display:flex;        
    flex-direction: initial; 
    justify-content:center;
    position:relative;
  }

  .items{
    display:flex;
    width:15rem;
    height:auto;
    background-color:#E4B21A;
    margin-right:3rem;
  

  }

`;

export default Header;

// align-content:center;
// height:1rem;
// width:1rem;
// border-radius:50%;
// border: 1 rem solid black;
// display:flex;
// background-color:red;
// margin-right:1rem;
