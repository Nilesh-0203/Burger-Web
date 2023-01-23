import styled from "styled-components";
import HamBurger from "./images/hamburger.png";
import Kitchen from "./images/kitchen.png"

const Main = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="burger_image">
          <img src={HamBurger} alt="Hamburger" className="burger_size" />
        </div>

        <div className="prices">
          <div className="chart">
            <table>
              <tr>
                <th>Prices</th>
              </tr>
              <tr>
                <td>Whole Wheat</td>
                <td>$40</td> 
              </tr>
              <tr>
                <td>Patty</td>
                <td>$20</td> 
              </tr>
              <tr>
                <td>Onions</td>
                <td>$25</td> 
              </tr>
              <tr>
                <td>Tomatoes</td>
                <td>$10</td> 
              </tr>
              <tr>
                <td>Lettuce</td>
                <td>$15</td> 
              </tr>
              <tr>
                <td>Cheese Slice</td>
                <td>$20</td> 
              </tr>
              
             
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .container {
    display: flex;
    justify-content:space-around;
    width: auto;
    height: 25rem;
    background-color: black;
    position: relative;
   
    opacity:0.8;
  }
  .burger_size {
    height: 8rem;
    position: absolute;
    bottom: 0rem;
   
  }

  table{
    border: 9px solid #873e23;
    border-radius: 10px;
    position:absolute;
    top:3rem;
    background-color:black;

    
  }

  

  th,td{
    padding:0rem 1rem;
    font-size:1.2rem;
    color:white;
   
  }
`;

export default Main;

