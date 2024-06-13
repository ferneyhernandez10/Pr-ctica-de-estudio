import styled from 'styled-components';

const StyledParagraph = styled.span`
  color: ${({ color }) => color || 'black'};
  font-size: 21px;
  line-height: 2rem;
`;

type ParagraphProps = {
  paragraph: string;
  color?: string;
};

function Paragraph({ paragraph, color }: ParagraphProps) {
  return <StyledParagraph color={color}> {paragraph} </StyledParagraph>;
}

export default Paragraph;
