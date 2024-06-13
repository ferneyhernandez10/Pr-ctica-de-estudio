import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph';
import SectionHeader from './SectionHeader';

const Container = styled.section`
  background-color: rgb(85, 105, 220, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;
  gap: 20px;
`;

type SectionAboutMeProps = {
  title: string;
  subtitle: string;
  paragraph: string;
  colorSubTitle?: string;
  colorTitle?: string;
  colorParagraph?: string;
};

function SectionAboutMe({
  title,
  subtitle,
  paragraph,
  colorTitle,
  colorSubTitle,
  colorParagraph,
}: SectionAboutMeProps) {
  return (
    <Container>
      <SectionHeader
        title={title}
        colorTitle={colorTitle}
        subtitle={subtitle}
        colorSubTitle={colorSubTitle}
      />
      <Paragraph paragraph={paragraph} color={colorParagraph} />
    </Container>
  );
}

export default SectionAboutMe;
