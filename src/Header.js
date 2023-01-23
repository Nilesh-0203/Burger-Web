import styled from "styled-components";
import Burger from "./images/bur.png"

const Header = () => {
  return (
    <Wrapper>
      {/* 1st row */}

      <div className="signals">
        <span className="dot red"></span>
        <span className="dot"></span>
        <span className="dot green"></span>
      </div>

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
  .signals {
    background-color: #e6e6e6;
    width: auto;
    height: 2rem;
    display: flex;
    flex-direction: initial;
    align-items:center;
  }
  .dot {
    display: flex;

    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 0.1rem solid black;
    background-color: #e6e6e6;
    margin-left: 1rem;
   
  }

  .red{
    background-color: red;
  }
  .green{
    background-color: green;
  }
  
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
