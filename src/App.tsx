import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <GlobalStyles />
      <h1 className="text-4xl text-blue-600">HelloWorld!</h1>
      <p className="text-lg">Paragraph</p>
    </div>
  );
}

export default App;
