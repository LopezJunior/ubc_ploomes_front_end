import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from 'router';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Router />
				</QueryClientProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
