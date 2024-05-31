import styled from "styled-components";

// HeaderLogo component renders the logo of the application
const HeaderLogo = () => {
  return (
    <Logo>WisdomWallet</Logo> // Display the logo text
  );
};

// Styled component for the logo
const Logo = styled.h1`
  font-weight: normal; // Set the font weight to normal
  font-size: 40px; // Set the font size to 40px
  margin-left: 11px; // Add a left margin of 11px
  font-family: "Agency FB", sans-serif; // Set the font family
  letter-spacing: 3px; // Increase the letter spacing
  cursor: pointer; // Change cursor to pointer on hover
`;

export default HeaderLogo; // Export the HeaderLogo component as default
