import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from 'router';
import theme from 'assets/styles/theme';
import { ModalProvider } from "styled-react-modal";
import * as S from 'components/StartButton/style';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ModalProvider backgroundComponent={S.FadingBackground}>
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<Router />
						</QueryClientProvider>
					</BrowserRouter>
				</ModalProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
