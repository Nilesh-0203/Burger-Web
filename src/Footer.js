import styled from "styled-components";
import Meat from "./images/meat.jpg";
import Cheese from "./images/cheese.jpg";
import Bun from "./images/bottom.jpg";
import Tomato  from "./images/tomato.jpg";
import top from "./images/top.jpg";
import lettuce from "./images/lettuse.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [amount, setAmount] = useState(40);
  const [burgerImages, setBurgerImages] = useState([]);

  const items = [
    {
      name:'Meat',
      amount:40,
      img:Meat
    },
    {
      name:'Tomato',
      amount:10,
      img:Tomato
    },
    
    {
      name:'Lettuce',
      amount:20,
      img:lettuce,
    },
    {
      name:'Cheese',
      amount:15,
      img:Cheese,
    },

   
  ]

  const addItems = (imgAddress) => {
   
    const newArr = burgerImages;
    console.log(newArr);
    newArr.push(imgAddress);
    setBurgerImages(newArr);
  }


  const addRemoveAmount = (action, value) => {
    if (action == "add") {
      setAmount(amount + value);
    } 
    else if (action == "remove") {
      setAmount(amount - value);
      if (amount - value < 0) {
        setAmount(0);
      }
    }
  };
  return (
    <Wrapper>
      <div className="container">    
        <div className="burger_ingredients">
          <div >
            <img src={top} alt="top" className="top_size" />
          </div>

          {burgerImages.map((ingredient, index) => (
            <img key={index} src={ingredient} alt={ingredient}  className="item_size"/>
          ))}
           
           <div > 
            <img src={Bun} alt="Patty" className="bottom_size" />
          </div>

        </div>
        <div className="ingredients">
          <h3>Choose What Goes into your Burger</h3>
          <div className="addIngredients">
            {items.map((item,index)=>{
              return(
                  <button
                  onClick={() => {
                    addRemoveAmount("add", item.amount);
                    addItems(item.img);
                  }}
                  >
                {item.name}
                 </button>
              )
            })}

        
          </div>
        

          <div className="removeIngredients">
            <button onClick={() => addRemoveAmount("remove", 40)}>

             Meat
            </button>
            <button onClick={() => addRemoveAmount("remove", 10)}>

              Tomato
            </button>
            <button onClick={() => addRemoveAmount("remove", 20)}>

              Patty
            </button>
            <button onClick={() => addRemoveAmount("remove", 15)}>

              Lettuce
            </button>
            <button onClick={() => addRemoveAmount("remove", 20)}>

              Cheese
            </button>
            <button onClick={() => addRemoveAmount("remove", 20)}>

              Top
            </button>
          </div>
        </div>
        <div className="amount">
          <div className="amount_box">
            <div className="amount_details">
              <h3>Total Amount</h3>
              <h2>$ {amount}</h2>
              <h3>To Pay </h3>
            </div>

            <div className="button">
              <button><NavLink to="/burger">Pay and Receive order</NavLink></button>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .container {
    height: 20rem;
    display: flex;
    justify-content: space-around;
    background-color: grey;
  }

  .ingredients {
    width: 40rem;
    height: 10rem;
    background-color: white;
  }

  .removeIngredients {
    margin-top: 2rem;
  }
  .addIngredients {
    margin-top: 0.4rem;
  }

  .amount {
    width: 30rem;
    height: 10rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .amount_box {
    width: 28rem;
    height: 9rem;
    background-color: black;
    display: flex;
    justify-content: space-between;
  }

  .amount_details {
    color: white;
  }

  .button {
    position: relative;
    bottom: -100px;
  }
  button {
    background-color: red;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin-right: 1rem;
  }

  h2,
  h3 {
    margin: 0;
  }

  .green {
    background-color: green;
  }
  
  .burger_ingredients{
    position:absolute;
    top:20rem;
    left:20rem;
    
    overflow:hidden;
    display:flex;
    flex-direction:column;

  }

  .top_size{
    height:5rem;
    width:15rem;
  }
  .bottom_size{
    height:3rem;
    width:15rem;
  }

  .item_size{
    height:1rem;
    width:15rem;

  }




`;
export default Footer;

