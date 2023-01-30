import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Login = () => {
 
  const { user, isAuthenticated, isLoading,logout,loginWithRedirect  } = useAuth0();
  return (
    <Wrapper>
      <div className="top_head">
        <div className="heading">
          <h1>
            Burger <span>Mania</span>
          </h1>
        </div>

        <div>
            {
                isAuthenticated&&
                <p>{user.name}</p>
            }
            {
          
          isAuthenticated?<button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>:<button onClick={() => loginWithRedirect()}>Login</button>
            }
          <button><NavLink to="/login" >Products</NavLink></button>
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .top_head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    height: 4rem;
    background:white;
    color:black;
  }

  button {
    margin-right: 2rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }

  .heading {
    font-size: 1.5rem;
    margin-left: 2rem;
  }

  span {
    color: purple;
  }
`;

export default Login;
