import styled from "styled-components"; // Import styled-components for styling
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Import Brightness7Icon for light mode
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Import DarkModeIcon for dark mode
import { App } from "../Layout"; // Import App context from Layout component
import { useContext } from "react"; // Import useContext hook for accessing context
import Wallet from "./Wallet"; // Import Wallet component

// HeaderRight component for the right section of the header
const HeaderRight = () => {
  const ThemeToggler = useContext(App); // Use App context to access theme toggler

  return (
    <HeaderRightWrapper>
      {/* Wallet component */}
      <Wallet />

      {/* Theme toggle button */}
      <ThemeToggle>
        {/* Conditionally render DarkModeIcon or Brightness7Icon based on the current theme */}
        {ThemeToggler.theme === "light" ? (
          <DarkModeIcon onClick={ThemeToggler.changetheme} />
        ) : (
          <Brightness7Icon onClick={ThemeToggler.changetheme} />
        )}
      </ThemeToggle>
    </HeaderRightWrapper>
  );
};

// Styled component for the header right wrapper
const HeaderRightWrapper = styled.div`
  display: flex; // Display children in a row
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  margin-right: 16px; // Add right margin
  height: 50%; // Set height to 50%
`;

// Styled component for the theme toggle button
const ThemeToggle = styled.div`
  display: flex; // Display children in a row
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  background-color: ${(props) =>
    props.theme.bgDiv}; // Set background color from theme
  height: 100%; // Set height to 100%
  padding: 5px; // Add padding
  width: 45px; // Set width to 45px
  border-radius: 12px; // Round the corners
  cursor: pointer; // Change cursor to pointer on hover
`;

export default HeaderRight; // Export HeaderRight component as default
