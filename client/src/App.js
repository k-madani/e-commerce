import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { lightTheme } from './utils/Themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
  width:100%; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  return <ThemeProvider theme = { lightTheme }>
    <BrowserRouter>
    <Container>
      <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>} />
        </Routes>
    </Container>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
