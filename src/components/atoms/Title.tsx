import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: ${({ color }) => color || 'black'};
  font-weight: 700;
  font-size: 32px;
`;

type TitleProps = {
  title: string;
  color?: string;
};

function Title({ title, color }: TitleProps) {
  return <StyledTitle color={color}>{title}</StyledTitle>;
}

export default Title;
