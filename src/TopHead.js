import styled from "styled-components";

const TopHead = () => {
  return (
    <Wrapper>
      <div className="signals">
        <span className="dot red"></span>
        <span className="dot"></span>
        <span className="dot green"></span>
      </div>
    </Wrapper>
  );
};
export default TopHead;
const Wrapper=styled.section`

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
`



