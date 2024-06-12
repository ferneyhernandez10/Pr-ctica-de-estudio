import SectionHeader from './components/molecules/SectionHeader';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <GlobalStyles />
      <SectionHeader
        title="HelloWorld!"
        subtitle="This is a subtitle"
        colorSubTitle="red"
      />
    </div>
  );
}

export default App;
