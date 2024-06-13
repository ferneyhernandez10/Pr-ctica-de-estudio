import SectionAboutMe from './components/molecules/SectionAboutMe';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <GlobalStyles />
      <SectionAboutMe
        title="HelloWorld!"
        subtitle="This is a subtitle"
        paragraph="This is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section this is the paragraph section."
      />
    </div>
  );
}

export default App;
