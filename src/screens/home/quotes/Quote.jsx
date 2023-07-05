import React from 'react'
import { StyledSection, FirstQuote, SecondQuote, HeadingH2, StyledText, StyledO2, StyledDescription, StyledIcon, StyledIconContainer, StyledFeature, StyledAnchor, HeadingH3, StyledInputDiv, StyledInput } from './Quote.style'
import { faWrench, faUserNurse, faDollarSign, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/button/Button'
export default function Quote() {
  return (
    <>
    <StyledSection>
        <FirstQuote>
             <HeadingH2>We are taking car servicing seriously</HeadingH2>
             <StyledFeature>
                
                <StyledText>
                    <StyledIconContainer><StyledIcon icon={faWrench} /></StyledIconContainer>
                    <div>
                    <StyledO2>Convenient service</StyledO2>
                    <StyledDescription>
                    Through True Rich Attended does no end it his mother since real had half every him.
                    </StyledDescription>
                    </div>
                </StyledText>
            </StyledFeature>
             <StyledFeature>
                <StyledText>
                    <StyledIconContainer><StyledIcon icon={faUserNurse} /></StyledIconContainer>
                    <div>
                    <StyledO2>Expert mechanics</StyledO2>
                    <StyledDescription>
                    Through True Rich Attended does no end it his mother since real had half every him.
                    </StyledDescription>
                    </div>
                </StyledText>
            </StyledFeature>
             <StyledFeature>
                <StyledText>
                    <StyledIconContainer><StyledIcon icon={faDollarSign} /></StyledIconContainer>
                    <div>
                    <StyledO2>Transparent pricing</StyledO2>
                    <StyledDescription>
                    Through True Rich Attended does no end it his mother since real had half every him.
                    </StyledDescription>
                    <StyledDescription>
                    <StyledAnchor href="/">Know more about us <FontAwesomeIcon icon={faArrowRightLong} /></StyledAnchor>
                    </StyledDescription>
                    </div>
                </StyledText>
            </StyledFeature>
        </FirstQuote>
        <SecondQuote>
            <HeadingH3>Get a quote for the car service</HeadingH3>
            <StyledInputDiv>
                <StyledInput type="text" placeholder='Enter your location' />
                <StyledInput type="text" placeholder='Enter your location' />
                <StyledInput type="text" placeholder='Enter your location' />
                <StyledInput type="text" placeholder='Enter your location' />
            </StyledInputDiv>
            <Button buttonText="Get your qoute" />
        </SecondQuote>
    </StyledSection>
    </>
  )
}
