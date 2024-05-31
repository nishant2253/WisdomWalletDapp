import styled from "styled-components"; // Import styled-components for styling
import HeaderLogo from "./components/HeaderLogo"; // Import HeaderLogo component
import HeaderNav from "./components/HeaderNav"; // Import HeaderNav component
import HeaderRight from "./components/HeaderRight"; // Import HeaderRight component

// Header component for the top navigation bar
const Header = () => {
  return (
    <HeaderWrapper>
      {/* Render HeaderLogo component */}
      <HeaderLogo />
      {/* Render HeaderNav component */}
      <HeaderNav />
      {/* Render HeaderRight component */}
      <HeaderRight />
    </HeaderWrapper>
  );
};

// Styled component for the header wrapper
const HeaderWrapper = styled.div`
  width: 100%; // Set width to 100%
  height: 70px; // Set height to 70px
  display: flex; // Display children in a row
  justify-content: space-between; // Distribute space between children
  align-items: center; // Center children vertically
`;

export default Header; // Export Header component as default
