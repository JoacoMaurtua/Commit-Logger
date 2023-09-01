import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const Animation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/fqf7kwan-k7Nug2F/scene.splinecode');
  }, []);

  return <canvas id="canvas3d" ref={canvasRef} className="hidden sm:block w-64 h-64 md:w-96 md:h-96"></canvas>;

};

export default Animation;