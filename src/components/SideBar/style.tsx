import styled from "styled-components";

export const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .vault {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #F4F4F5;
    box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  }
`
export const SideBarTab =styled.header`
  width: 40px;
  height: 80px;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  background: #F4F4F5;
  padding: 10px;
  margin: 63px 0 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`

export const Line = styled.div`
  width: 20px;
  height: 1px;
  border-top: 1px solid #E5E5E5;
  box-shadow: 0 2px 1px 0 #FFFFFF;
`
