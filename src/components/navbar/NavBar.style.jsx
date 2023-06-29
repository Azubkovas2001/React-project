import styled from 'styled-components';

export const NavStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    padding:0 50px;
`
export const DivStyles = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    a{
        margin-right: 10px;
        text-decoration:none;
        color: #1E1B1B;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
    }
    `
export const SecondaryDivStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    width:40px;
    height:40px;
    margin-right: 5px;
    border-radius:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00D289;
    color: white;
  }
`;
export const SpanColumnStyles = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:10px;
`
export const SpanStyles = styled.span`
 content: "";
    margin: 0 30px 0 15px;
    width: 1px;
    height: 40px;
    background-color: gray;
`

export const Caption = styled.span`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
color: #939191;
`
export const SecondCaption = styled.span`
font-family: Manrope;
font-size: 18px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
`