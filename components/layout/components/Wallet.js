import styled from "styled-components"; // Import styled-components for styling
import { ethers } from "ethers"; // Import ethers for Ethereum interactions
import { useState } from "react"; // Import useState hook for state management

// Ethereum network configurations for Polygon Testnet
const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

// Wallet component for connecting to an Ethereum wallet
const Wallet = () => {
  const [address, setAddress] = useState(""); // State for storing the wallet address
  const [balance, setBalance] = useState(""); // State for storing the wallet balance

  // Function to connect the wallet
  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" }); // Request user to connect their wallet
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any"); // Initialize a Web3 provider

    // Check if the network is Polygon Testnet and add it if not
    if (provider.network !== "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
    }

    // Get the account signer and retrieve the address and balance
    const account = provider.getSigner();
    const Address = await account.getAddress();
    setAddress(Address);
    const Balance = ethers.utils.formatEther(await account.getBalance());
    setBalance(Balance);
  };

  return (
    // Wrapper for the wallet component
    <ConnectWalletWrapper onClick={connectWallet}>
      {/* Display wallet balance if available, otherwise display empty */}
      {balance == "" ? (
        <Balance></Balance>
      ) : (
        <Balance>{balance.slice(0, 4)} Matic</Balance>
      )}
      {/* Display wallet address if available, otherwise display "Connect Wallet" */}
      {address == "" ? (
        <Address>Connect Wallet</Address>
      ) : (
        <Address>
          {address.slice(0, 6)}...{address.slice(39)}
        </Address>
      )}
    </ConnectWalletWrapper>
  );
};

// Styled component for the wrapper of the wallet component
const ConnectWalletWrapper = styled.div`
  display: flex; // Display children in a row
  align-items: center; // Center children vertically
  justify-content: space-between; // Distribute space between children
  background-color: ${(props) =>
    props.theme.bgDiv}; // Set background color from theme
  padding: 5px 9px; // Add padding
  height: 100%; // Set height to 100%
  color: ${(props) => props.theme.color}; // Set text color from theme
  border-radius: 10px; // Round the corners
  margin-right: 15px; // Add right margin
  font-family: "Roboto"; // Set font family to Roboto
  font-weight: bold; // Set font weight to bold
  font-size: small; // Set font size to small
  cursor: pointer; // Change cursor to pointer on hover
`;

// Styled component for the wallet address
const Address = styled.h2`
  background-color: ${(props) =>
    props.theme.bgSubDiv}; // Set background color from theme
  height: 100%; // Set height to 100%
  display: flex; // Display children in a row
  align-items: center; // Center children vertically
  justify-content: center; // Center children horizontally
  padding: 0 5px; // Add padding
  border-radius: 10px; // Round the corners
`;

// Styled component for the wallet balance
const Balance = styled.h2`
  display: flex; // Display children in a row
  height: 100%; // Set height to 100%
  align-items: center; // Center children vertically
  justify-content: center; // Center children horizontally
  margin-right: 5px; // Add right margin
`;

export default Wallet; // Export Wallet component as default
