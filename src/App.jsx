import GeneralProvider from "./contexts/MainContext";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <GeneralProvider>
        <RoutesMain />
      </GeneralProvider>
    </>
  );
}

export default App;
