// Theme object for the light theme
const light = {
  color: "#000", // Text color
  bgColor: "#efe7fd", // Background color
  bgImage: "linear-gradient(180deg, #efe7fd 0%, #bdccf7 60%)", // Background image
  bgDiv: "#fff", // Background color for div elements
  bgSubDiv: "#efe7fd", // Background color for sub-div elements
};

// Theme object for the dark theme
const dark = {
  color: "#fff", // Text color
  bgColor: "#923cb5", // Background color
  bgImage: "linear-gradient(180deg, #2f0f3d 5%, #00000000 90%)", // Background image
  bgDiv: "black", // Background color for div elements
  bgSubDiv: "rgb(33, 36, 41)", // Background color for sub-div elements
};

// Object containing both light and dark themes
const themes = {
  light: light, // Light theme
  dark: dark, // Dark theme
};

export default themes; // Export the themes object
