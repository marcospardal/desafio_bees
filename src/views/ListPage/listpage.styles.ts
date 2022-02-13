import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.secondary};
`

export const Content = styled.div`  
  padding: 100px;
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100vw;

  @media (max-width: 1600px) {
    grid-template-columns: auto auto;
    padding: 50px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: auto;
    padding: 30px;
  }
`

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.palette.primary};
  padding: 17px 19px;
  display: flex;
  justify-content: space-between;
  max-height: 72px;
  min-width: 100%
`

export const GoBackIcon = styled.img`
  height: 38px;
  width: 38px;
  cursor: pointer;
`

export const PageTitle = styled.h1`
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.palette.black};
  margin-left: 21px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: auto;
  border: 20px solid #EAF0F6;
  border-radius: 50%;
  border-top: 20px solid ${({ theme }) => theme.palette.primary};
  width: 200px;
  height: 200px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
`