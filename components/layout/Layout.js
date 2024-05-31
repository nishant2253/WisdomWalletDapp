import Header from "./Header"; // Import Header component
import themes from "./themes"; // Import themes object
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"; // Import styled-components, ThemeProvider, and createGlobalStyle
import { useState, createContext } from "react"; // Import useState and createContext hooks from React
import { ToastContainer } from "react-toastify"; // Import ToastContainer component from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

// Create a context for the application
const App = createContext();

// Layout component for the overall layout of the application
const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light"); // State for managing the theme

  // Function to toggle between light and dark themes
  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    // Provide the context value for theme and theme change function
    <App.Provider value={{ changeTheme, theme }}>
      {/* Provide the theme to styled-components */}
      <ThemeProvider theme={themes[theme]}>
        {/* ToastContainer for displaying notifications */}
        <ToastContainer />
        {/* Wrapper for the layout */}
        <LayoutWrapper>
          {/* Global styles */}
          <GlobalStyle />
          {/* Header component */}
          <Header />
          {/* Render children components */}
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    </App.Provider>
  );
};

// Global styles for the application
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

// Styled component for the layout wrapper
const LayoutWrapper = styled.div`
  min-height: 100vh; // Set minimum height to 100vh (viewport height)
  background-color: ${(props) =>
    props.theme.bgColor}; // Set background color from theme
  background-image: ${(props) =>
    props.theme.bgImage}; // Set background image from theme
  color: ${(props) => props.theme.color}; // Set text color from theme
`;

export default Layout; // Export Layout component as default
export { App }; // Export App context
