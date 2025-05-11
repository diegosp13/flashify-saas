import React, { useState } from 'react';

export default function CaptionGenerator({ productType }) {
  const [caption, setCaption] = useState('');

  const generate = () => {
    const captions = {
      camiseta: "🎉 Nova coleção chegou! #moda #oferta",
      eletronicos: "🔥 Oferta imperdível – frete grátis!",
      ofertas: "🎁 Confira nossos descontos do dia!"
    };

    setCaption(captions[productType] || "Nova oferta especial!");
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>✍️ Legenda para Instagram</h3>
      <button onClick={generate}>Gerar Legenda</button>
      {caption && <p>{caption}</p>}
    </div>
  );
}
