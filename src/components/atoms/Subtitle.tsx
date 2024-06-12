import styled from 'styled-components';

const StyledSubtitle = styled.span`
  color: ${({ color }) => color || 'black'};
  text-transform: uppercase;
  font-size: 16px;
`;

type SubtitleProps = {
  subtitle: string;
  color?: string;
};

function Subtitle({ subtitle, color }: SubtitleProps) {
  return <StyledSubtitle color={color}>{subtitle}</StyledSubtitle>;
}

export default Subtitle;
