import React, { useRef, useState } from 'react';

export default function CameraCapture({ onImageCaptured }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    setIsCameraActive(true);
  };

  const capturePhoto = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, 400, 300);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    onImageCaptured(dataUrl);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {!isCameraActive ? (
        <button onClick={startCamera}>📷 Abrir Câmera</button>
      ) : (
        <>
          <video ref={videoRef} autoPlay width="400" height="300"></video>
          <br />
          <button onClick={capturePhoto}>📸 Tirar Foto</button>
        </>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
    </div>
  );
}
