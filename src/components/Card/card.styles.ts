import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  height: 282px;
  width: 382px;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 35px 23px 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const CardTitle = styled.h2`
  ${({ theme }) => theme.typography.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const CardInfo = styled.p`
  ${({ theme }) => theme.typography.p2};
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export const CardItems = styled.span`
  background-color: ${({ theme }) => theme.palette.primary};
  color: #000000;
  display: flex;
  max-height: 32px;
  border-radius: 99px;
  padding: 8px 12px;
  align-items: center;
  margin: 0 16px 28px 0;
`

export const CardIcon = styled.img`
  height: 16px;
  widht: 16px;
  margin-right: 12px;
`

export const AddMoreIcon = styled(CardIcon)`
  cursor: pointer;
`