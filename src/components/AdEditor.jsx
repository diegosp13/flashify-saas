import React, { useRef, useState } from 'react';

export default function AdEditor({ imageUrl }) {
  const canvasRef = useRef(null);
  const [text, setText] = useState('Oferta Especial!');
  const [price, setPrice] = useState('R$ 99,90');

  const drawCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(img, 0, 0, 500, 500);
      ctx.fillStyle = 'white';
      ctx.font = '30px Poppins';
      ctx.fillText(text, 50, 50);
      ctx.fillText(`Preço: ${price}`, 50, 100);
    };
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'meu-anuncio.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🎨 Edite seu Anúncio</h2>
      <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid #ccc' }}></canvas>
      <br />
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Legenda do anúncio" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" />
      <button onClick={drawCanvas}>Atualizar</button>
      <button onClick={downloadImage}>Baixar Anúncio</button>
    </div>
  );
}
