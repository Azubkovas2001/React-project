import React from 'react';
import { StyledSection, ProcessLeft, ProcessRight, HeadingH2, Paragraph, Button, Processs, DivStyles, Caption, SecondCaption, SpanColumnStyles, Circle, Text01} from './Process.style';



export default function Process() {
  return (
    <Processs>
      <StyledSection>
        <ProcessLeft>
          <HeadingH2>We follow a clear process to help you out.</HeadingH2>
          <Paragraph>
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
          </Paragraph>
          <Button>Learn more</Button>
        </ProcessLeft>
        <ProcessRight>
          <DivStyles>
            <Circle>
              <Text01>01</Text01>
            </Circle>
            <SpanColumnStyles>
              <Caption>Get a Quote</Caption>
              <SecondCaption>Through True Rich Attended does no end it his mother since real had half every.</SecondCaption>
            </SpanColumnStyles>
          </DivStyles>
          <DivStyles>
            <Circle>
              <Text01>02</Text01>
            </Circle>
            <SpanColumnStyles>
              <Caption>Book an Appointment</Caption>
              <SecondCaption>Through True Rich Attended does no end it his mother since real had half every.</SecondCaption>
            </SpanColumnStyles>
          </DivStyles>
          <DivStyles>
            <Circle>
              <Text01>03</Text01>
            </Circle>
            <SpanColumnStyles>
              <Caption>Get your Service Done</Caption>
              <SecondCaption>Through True Rich Attended does no end it his mother since real had half every.</SecondCaption>
            </SpanColumnStyles>
          </DivStyles>
        </ProcessRight>
      </StyledSection>
    </Processs>
  );
}
