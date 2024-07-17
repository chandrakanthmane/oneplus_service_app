// Tiles.js
import React from 'react';
import styled from 'styled-components';
import Background from './images/bg.png';

const Tiles = () => {
  return (
    <TilesContainer>
      <Tile>
        <TileLabel>Top scret</TileLabel>
      </Tile>
    </TilesContainer>
  );
};

export default Tiles;

const TilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  width: 80%;
  height: 80vh;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TileLabel = styled.h3`
  font-size: 1.5em;
  color: #333;
`;
