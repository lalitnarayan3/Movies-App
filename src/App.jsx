import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageRoute } from "./routes/PageRoute";
import ThemeProvider from "./context/ThemeContext/ThemeContext";
import AuthProvider from "./context/AuthContext/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <PageRoute />
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
