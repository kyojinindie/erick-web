import * as THREE from 'three';
import React, {Suspense, useEffect, useState, useRef, useCallback, useLayoutEffect} from 'react';
import {Canvas, useThree, useLoader, useFrame} from '@react-three/fiber';
import { Flex, Box, useFlexSize} from '@react-three/flex';
import {Loader, Line, useAspect} from '@react-three/drei';
import Effects from './components/Effects';
import Text from './components/Text';
import Geo from './components/Geo';
import state from './state';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
