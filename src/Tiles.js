// Tiles.js
import React from 'react';
import styled from 'styled-components';
import Background from './images/bg.png';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook from react-router-dom

const Tiles = () => {
  const history = useNavigate(); // Initialize useHistory

  const handleTileClick = (tile) => {
    if (tile === 'user-details') {
      history('/user-details'); // Navigate to the Attendance component
    }
  };

  return (
    <TilesContainer>
      <Tile>
        <TileLabel onClick={() => handleTileClick('user-details')}>User Details</TileLabel>
      </Tile>
      <Tile>
        <TileLabel>User Tasks</TileLabel>
      </Tile>
    </TilesContainer>
  );
};

export default Tiles;

const TilesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  overflow: hidden;
  align-content: center;
  align-items: center;
`;

const Tile = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  :hover {
  transform: scale(1.25);
}
`;

const TileLabel = styled.h3`
  font-size: 1.5em;
  color: #333;
`;
