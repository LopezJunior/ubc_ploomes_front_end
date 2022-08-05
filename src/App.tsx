import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Teste from "pages";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Teste />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
