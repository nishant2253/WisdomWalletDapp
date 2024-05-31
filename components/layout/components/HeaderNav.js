import Link from "next/link"; // Import Link component from Next.js for client-side navigation
import styled from "styled-components"; // Import styled-components for styling
import { useRouter } from "next/router"; // Import useRouter hook from Next.js to access the router object

// HeaderNav component for the navigation bar
const HeaderNav = () => {
  const Router = useRouter(); // Use useRouter hook to get the current route

  return (
    <HeaderNavWrapper>
      {/* Link to the home page, with active state based on the current route */}
      <Link passHref href={"/"}>
        <HeaderNavLinks active={Router.pathname == "/" ? true : false}>
          Campaigns
        </HeaderNavLinks>
      </Link>

      {/* Link to the create campaign page, with active state based on the current route */}
      <Link passHref href={"/createcampaign"}>
        <HeaderNavLinks
          active={Router.pathname == "/createcampaign" ? true : false}
        >
          Create Campaign
        </HeaderNavLinks>
      </Link>

      {/* Link to the dashboard page, with active state based on the current route */}
      <Link passHref href={"/dashboard"}>
        <HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false}>
          Dashboard
        </HeaderNavLinks>
      </Link>
    </HeaderNavWrapper>
  );
};

// Styled component for the navigation wrapper
const HeaderNavWrapper = styled.div`
  display: flex; // Display children in a row
  align-items: center; // Center children vertically
  justify-content: space-between; // Distribute children evenly with space between
  background-color: ${(props) =>
    props.theme.bgDiv}; // Set background color from theme
  padding: 6px; // Add padding
  height: 50%; // Set height to 50%
  border-radius: 10px; // Round the corners
`;

// Styled component for navigation links
const HeaderNavLinks = styled.div`
  display: flex; // Display children in a row
  align-items: center; // Center children vertically
  justify-content: space-between; // Distribute children evenly with space between
  background-color: ${(props) =>
    props.active
      ? props.theme.bgSubDiv
      : props.theme.bgDiv}; // Set background color based on active state
  height: 100%; // Set height to 100%
  font-family: "Roboto"; // Set font family to Roboto
  margin: 5px; // Add margin
  border-radius: 10px; // Round the corners
  padding: 0 5px; // Add horizontal padding
  cursor: pointer; // Change cursor to pointer on hover
  text-transform: uppercase; // Transform text to uppercase
  font-weight: bold; // Set font weight to bold
  font-size: small; // Set font size to small
`;

export default HeaderNav; // Export HeaderNav component as default
