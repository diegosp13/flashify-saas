import React from 'react';
import WhatsAppQRCode from '../components/WhatsAppQRCode';

export default function Dashboard() {
  return (
    <div>
      <h2>?? Bem-vindo ao Painel</h2>
      <WhatsAppQRCode phoneNumber="5511999999999" />
    </div>
  );
}
