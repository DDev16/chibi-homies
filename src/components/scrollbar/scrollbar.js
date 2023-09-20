import React from 'react';
import styled from 'styled-components';

// Define a custom scrollbar using styled-components
const CustomScrollbarWrapper = styled.div`
  /* Your custom styles for the scrollbar wrapper */
  width: 300px;
  height: 300px;
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #333 #ccc; /* Scrollbar color (thumb and track) */
`;

const CustomScrollbar = ({ children }) => {
  return <CustomScrollbarWrapper>{children}</CustomScrollbarWrapper>;
};

export default CustomScrollbar;
