import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 1087px;
  height: 527px;
  gap:40px;
`;

export const ProcessLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 524px;
  height: 396px;
  margin-left:auto;
  `;

export const ProcessRight = styled.div`
  width: 432px;
  height: 527px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:30px;
`;
export const HeadingH2 = styled.h2`
font-family: Manrope;
font-size: 58px;
font-weight: 800;
line-height: 76px;
letter-spacing: -0.03em;
text-align: left;
`
export const Paragraph = styled.p`
font-family: Manrope;
font-size: 16px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #939191;

`
export const Button = styled.button`
width: 177px;
height: 64px;
padding: 16px 40px 16px 40px;
border-radius: 12px;
gap: 10px;
background:#FF6433;
color:white;
border:none;
cursor:pointer;
`

export const Processs = styled.div`
height:700px;
display:flex;
`
export const DivStyles = styled.div`
display:flex;
align-items:start;
`
export const SpanColumnStyles = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
margin-top:10px;
`
export const Caption = styled.div`
font-family: Manrope;
font-size: 32px;
font-weight: 700;
line-height: 48px;
letter-spacing: -0.03em;
text-align: left;
`
export const SecondCaption = styled.div`
font-family: Manrope;
font-size: 18px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #939191;
`

export const Circle = styled.div`
position:relative;
width: 130px;
height: 72px;
border-radius:50%;
background:#661CE7;
display:flex;
justify-content:center;
align-items:center;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #FFFFFF3D;
    bottom: -17px;
  }
`
export const Text01 = styled.h5`
font-size: 32px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
color:white;
`
