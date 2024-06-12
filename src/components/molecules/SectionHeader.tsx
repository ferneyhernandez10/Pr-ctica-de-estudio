import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  colorSubTitle?: string;
  colorTitle?: string;
};
function SectionHeader({
  title,
  subtitle,
  colorSubTitle,
  colorTitle,
}: SectionHeaderProps) {
  return (
    <>
      <Title title={title} color={colorTitle} />
      <Subtitle subtitle={subtitle} color={colorSubTitle} />
    </>
  );
}

export default SectionHeader;
