import React from 'react';
import QRCode from 'qrcode.react';

export default function WhatsAppQRCode({ phoneNumber }) {
  const whatsappLink = https://wa.me/ ;
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>?? Escaneie para Contatar</h3>
      <QRCode value={whatsappLink} size={200} />
      <p>C�digo gerado com base no n�mero: {phoneNumber}</p>
    </div>
  );
}
