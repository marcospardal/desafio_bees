import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Instructions = styled.p`
  ${({ theme }) => theme.typography.p};
`

export const Input = styled.input`
  border: 1px solid #D4D4D8;
  width: 300px;
  max-height: 43px;
  border-radius: 4px;
  margin: 16px 0;
  padding: 10px 12px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

interface SubmitBtn {
  isDisabled: boolean
}

export const Submit = styled.button<SubmitBtn>`
  ${({ theme }) => theme.typography.p};
  width: 75px;
  height: 40px;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  background: ${({ theme }) => theme.palette.grey['600']};
  color: ${({ theme, isDisabled }) => !isDisabled ? theme.palette.white : theme.palette.grey['500']};
  margin: 30px 0;
  cursor: ${({ isDisabled }) => !isDisabled ? 'pointer' : ''};
`

export const Bee = styled.img`
  position: absolute;
  left: 29px;
  bottom: 15px;
`