import Signup from "./Signup";
import styled from "styled-components";
import Grid from "./images/grid_0.webp";
import Login from "./Login";
import Jumbo from "./images/jumbo_burger.png";
const FirstPage = () => {
  return (
    <Wrapper>
      <Login />
      <div className="firstPage">
        <div className="firstPage-title">
          <h1>Savor the flavor of every bite</h1>
          <h4>
            Burger Mania is a popular fast food chain that offers a variety of
            burgers and sides. They are known for their juicy burgers, fresh
            ingredients, and exceptional customer service. With a menu that
            caters to different tastes and dietary needs, Burger Mania has
            become a favorite among burger lovers.
          </h4>
        </div>
        <div className="firstPage-content">
         <img src={Jumbo} alt="Jumb"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default FirstPage;

const Wrapper = styled.section`
  background: black;
  color: white;
  height:35rem;
  .firstPage {
    display: flex;
    justify-content: space-around;
    align-items:center;
    align-content:center;
  }

  .firstPage-title {
    width: 35rem;
    margin-left: 5rem;
  }

  img {
    
    height: 25rem;
    width: 25rem;
  }
`;
