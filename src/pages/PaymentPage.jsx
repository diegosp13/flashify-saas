import React, { useState } from 'react';
import { generatePixPayment } from '../lib/pixService';

export default function PaymentPage() {
  const [pixData, setPixData] = useState(null);

  const handlePixGeneration = async () => {
    const result = await generatePixPayment('user_123');
    setPixData(result);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>💳 Faça Upgrade para Premium</h2>
      <p>Pague apenas R$ 29,90/mês ou R$ 299,00/ano</p>
      <button onClick={handlePixGeneration}>Gerar Pix</button>
      {pixData && (
        <div>
          <img src={pixData.qr_code_url} alt="QR Code Pix" />
          <p>{pixData.copy_and_paste_code}</p>
        </div>
      )}
    </div>
  );
}
