import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 4px;
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px;
  font-weight: bolder;
  background-color: #d7d7d8; /* Remove color */
  color: #6c6c6c; /* Remove color */
  width: 150px; /* When GRID will be ready, remove this line */
  &:active  {
    background-color: #5c6269; /* Remove color */
    color: ${props => props.color || "#fff"}; 
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const Icon = styled.div`
  background-color: #5c6269; /* Remove this bg-color */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  color: ${props => props.color || "#fff"}; 
  &:active {
    background-color: #fff; /* Remove color */
    color: #5c6269; /* Remove color */
  }
`

export const Length = styled.div`
  font-size: larger;
`
