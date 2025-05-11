import React, { useState } from 'react';

export default function CaptionGenerator({ productType }) {
  const [caption, setCaption] = useState('');

  const generate = () => {
    const captions = {
      camiseta: "Aproveite nossa nova coleção 😍 #moda #promoção",
      eletronicos: "🔥 Novos produtos na área – frete grátis!",
      ofertas: "🎉 Oferta especial do dia – compre agora!"
    };

    setCaption(captions[productType] || "Nova oferta imperdível 🎁");
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>✍️ Gere uma legenda</h3>
      <button onClick={generate}>Gerar Legenda</button>
      {caption && <p>{caption}</p>}
    </div>
  );
}
