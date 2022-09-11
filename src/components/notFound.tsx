import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
  color: white;
`;

export default function NotFound() {
  return (
    <>
      <Wrapper>
        <p>Route not found</p>
        <p>The requested route was not found</p>
      </Wrapper>
    </>
  );
}
