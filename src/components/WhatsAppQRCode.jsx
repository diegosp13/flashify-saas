import React from 'react';
import QRCode from 'qrcode.react';

export default function WhatsAppQRCode({ phoneNumber }) {
  const whatsappLink = `https://wa.me/ ${phoneNumber.replace(/\D/g, '')}`;
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>📱 Escaneie para entrar em contato</h3>
      <QRCode value={whatsappLink} size={200} />
      <p>Código gerado automaticamente</p>
    </div>
  );
}
