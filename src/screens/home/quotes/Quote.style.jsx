import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledSection = styled.section`
width:100%;
height:894px;
background:#E2E6E9;
display:flex;
justify-content:space-evenly;
align-items:center;
`
export const FirstQuote = styled.div`
width:584px;
height: 638px;
gap:20px;
display:flex;
flex-direction:column;
align-items:center;
padding:0 20px;
`
export const SecondQuote = styled.div`
width: 50%;
`
export const HeadingH2 = styled.h2`
width:583px;
font-family: Manrope;
font-size: 64px;
font-weight: 800;
line-height: 76px;
letter-spacing: -0.03em;
text-align: left;
text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const StyledText = styled.div`
display:flex;
gap:10px;
flex-direction:row;
align-items:start;
`
export const StyledO2 = styled.h2`
font-family: Manrope;
font-size: 24px;
font-weight: 600;
line-height: 36px;
letter-spacing: -0.03em;
text-align: left;

`
export const StyledDescription = styled.p`
font-family: Manrope;
font-size: 16px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #939191;
display:flex;
align-items:center;
`

export const StyledIcon = styled(FontAwesomeIcon)`
width:25px;
height:25px;

`;
export const StyledIconContainer = styled.div`
padding:10px;
  border-radius: 50px;
  background: white;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:10px;
`
export const StyledFeature = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:385px;
height:105px;
`
export const StyledAnchor = styled.a`
font-family: Manrope;
font-size: 18px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
text-decoration:none;
`
export const HeadingH3 = styled.h3`
font-family: Manrope;
font-size: 48px;
font-weight: 700;
line-height: 67px;
letter-spacing: -0.03em;
text-align: left;

`
export const StyledInputDiv = styled.div`
display:flex;
flex-direction:column;
gap:5px;
margin-bottom: 30px
`
export const StyledInput = styled.input`
width: 624px;
height: 72px;
border:none;
  &::placeholder {
    padding:20px;
  }
`