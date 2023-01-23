import styled from "styled-components";
import Meat from "./images/meat.png";
import Onions from "./images/onions.png";
import HamBurger from "./images/hamburger.png";
import { useState } from "react";

const Footer = () => {
  const [amount, setAmount] = useState(40);
  const [burger, setBurger] = useState([]);
  const ingredients = {
    Onion: Onions,
    Meat: Meat,

  };

  const handleAddIngredient = (ingredient) => {
    console.log(ingredient);
    console.log(burger);
    var arr=[ingredient];
    setBurger(arr);
    console.log(burger);
  };

  const addRemoveAmount = (action, value) => {
    if (action == "add") {
      setAmount(amount + value);
    } else if (action == "remove") {
      setAmount(amount - value);
      if (amount - value < 0) {
        setAmount(0);
      }
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="ingredients">
          <h3>Choose What Goes into your Burger</h3>
          <div className="addIngredients">
            <button
              onClick={() => {
                addRemoveAmount("add", 20);
                handleAddIngredient("Onions");
              }}
            >
            
              Cheese
            </button>
            <button
              onClick={() => {
                addRemoveAmount("add", 15);
                handleAddIngredient("Meat");
              }}
            >
            
              Lettuce
            </button>
            <button
              onClick={() => {
                addRemoveAmount("add", 10);
                handleAddIngredient("Onions");
              }}
            >
            
              Tomato
            </button>
            <button
              onClick={() => {
                addRemoveAmount("add", 25);
                handleAddIngredient("Onions");
              }}
            >
            
              Onion
            </button>
            <button
              onClick={() => {
                addRemoveAmount("add", 20);
                handleAddIngredient("Onions");
              }}
            >
            
              Patty
            </button>
          </div>

          <div className="removeIngredients">
            <button onClick={() => addRemoveAmount("remove", 20)}>
            
              Cheese
            </button>
            <button onClick={() => addRemoveAmount("remove", 15)}>
            
              Lettuce
            </button>
            <button onClick={() => addRemoveAmount("remove", 10)}>
            
              Tomato
            </button>
            <button onClick={() => addRemoveAmount("remove", 25)}>
            
              Onion
            </button>
            <button onClick={() => addRemoveAmount("remove", 20)}>
            
              Patty
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
              <button>Pay and Receive order</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {burger.map((ingredient, index) => (
          <img key={index} src={ingredients[ingredient]} alt={ingredient} />
        ))}
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
`;
export default Footer;
