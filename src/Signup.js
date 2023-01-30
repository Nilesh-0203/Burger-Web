import styled from "styled-components";

const Signup = () => {
  return (
    <Wrapper>
      <div>
        <title>Signup Form</title>
        <div className="heading">
          <h1>Signup Form</h1>
        </div>

        <form action="">
          <label for="name">Name:</label>
          <br />
          <input type="text" name="name" id="name" required />
          <br />

          <label for="email">Email:</label>
          <br />
          <input type="email" name="email" id="email" required />
          <br />

          <label for="password">Password:</label>
          <br />
          <input type="password" name="password" id="password" required />
          <br />

          <div className="submit">
            <input type="submit" value="Sign Up" className="SignIn" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.section`
  float: right;
  margin: 2rem 10rem 0rem 0rem;
  border: 2px solid white;
  border-radius: 5px;
  padding: 2rem;

  .heading {
    display: flex;
    justify-content: center;
  }

  input {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    width: 20rem;
  }

  .submit {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 5rem;
  }


  
`;
