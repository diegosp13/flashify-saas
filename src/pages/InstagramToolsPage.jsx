import React, { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import WhatsAppQRCode from '../components/WhatsAppQRCode';
import CaptionGenerator from '../components/CaptionGenerator';

export default function InstagramToolsPage() {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleImageCaptured = (dataUrl) => {
    setCapturedImage(dataUrl);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📷 Crie seu Anúncio</h2>

      <CameraCapture onImageCaptured={handleImageCaptured} />

      {capturedImage && (
        <>
          <img src={capturedImage} alt="Prévia" width="200" />
          <CaptionGenerator productType="produtos aleatórios" />
          <WhatsAppQRCode phoneNumber="5511999999999" />
        </>
      )}
    </div>
  );
}
