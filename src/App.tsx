import CustomThemeProvider from "./Providers/CustomThemeProvider";
import WindowTypeProvider from "./Providers/WindowTypeProvider";
import MainPage from "./components/pages/MainPage";
import "./App.css";

function App() {
  return (
    <CustomThemeProvider>
      <WindowTypeProvider>
        <MainPage />
      </WindowTypeProvider>
    </CustomThemeProvider>
  );
}

export default App;
