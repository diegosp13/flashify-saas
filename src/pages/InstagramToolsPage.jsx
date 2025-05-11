import React, { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import WhatsAppQRCode from '../components/WhatsAppQRCode';
import CaptionGenerator from '../components/CaptionGenerator';
import TemplateSelector from '../components/TemplateSelector';
import AdEditor from '../components/AdEditor';

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
          <AdEditor imageUrl={capturedImage} />
          <TemplateSelector onSelect={(template) => console.log('Template selecionado:', template)} />
          <CaptionGenerator productType="produtos aleatórios" />
          <WhatsAppQRCode phoneNumber="5511999999999" />
        </>
      )}
    </div>
  );
}
