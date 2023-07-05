import React from 'react'
import { StylesH1, StyledHeader, StyledImg, StyledSpansDiv, StyledDiv, StyledFontAwesomeIcon, Caption, SecondCaption, StyledService, StyledO2, StyledCircle, StyledSpanFirstText,StyledSpanSecondText, StyledImageDiv, StyledRating, StyledStarDiv, StyledRatingText, StyledRatingSpan, StyledRatingSecondSpan, StylStarFontAwesomeIcon } from './Header.style'
import { faClock, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import headerImage from '../../../assets/headerimage.jpg'
import Button from '../../../components/button/Button'
export default function Header() {
  return (
    <StyledHeader>
        <div>
        <StylesH1>Get your vehicle service done online at one place</StylesH1>
        <Button buttonText="Book a service"/>
        <StyledDiv>
           <StyledFontAwesomeIcon icon={faClock} />
           <StyledSpansDiv>
            <Caption>We are open </Caption>
            <SecondCaption>Monday to Friday 9:00 AM to  10:00  AM</SecondCaption>
           </StyledSpansDiv>
        </StyledDiv>
        </div>
        <StyledImageDiv>
            <StyledImg src={headerImage} alt="" />
            <StyledService>
                <StyledO2>
                <StyledCircle>
                    <StyledSpanFirstText>24</StyledSpanFirstText>
                    <StyledSpanSecondText>hr</StyledSpanSecondText>
                </StyledCircle>
                Quick Service
                </StyledO2>
            </StyledService>
            <StyledRating>
                <StyledStarDiv>
                    <StyledRatingText>
                    <StyledRatingSpan>4.5/5</StyledRatingSpan>
                    <StyledRatingSecondSpan>Rating</StyledRatingSecondSpan>
                </StyledRatingText>
                    <StylStarFontAwesomeIcon icon={faStar} />
                    <StylStarFontAwesomeIcon icon={faStar} />
                    <StylStarFontAwesomeIcon icon={faStar} />
                    <StylStarFontAwesomeIcon icon={faStar} />
                    <StylStarFontAwesomeIcon icon={faStarHalfStroke}/>
                </StyledStarDiv>
            </StyledRating>
        </StyledImageDiv>
        
    </StyledHeader>
  )
}
