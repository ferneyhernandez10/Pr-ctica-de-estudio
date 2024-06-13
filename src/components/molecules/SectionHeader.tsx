import styled from 'styled-components';
import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  colorSubTitle?: string;
  colorTitle?: string;
};

function SectionHeader({
  title,
  subtitle,
  colorTitle,
  colorSubTitle,
}: SectionHeaderProps) {
  return (
    <Container>
      <Title title={title} color={colorTitle} />
      <Subtitle subtitle={subtitle} color={colorSubTitle} />
    </Container>
  );
}

export default SectionHeader;
