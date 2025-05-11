import React from 'react';

export default function TemplateSelector({ onSelect }) {
  const templates = [
    { id: 'ig-feed', name: 'Instagram Feed' },
    { id: 'ig-stories', name: 'Instagram Stories' },
    { id: 'ml-banner', name: 'Mercado Livre Banner' }
  ];

  const handleSelect = (template) => {
    onSelect(template);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>🧩 Escolha um Template</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {templates.map((template) => (
          <div key={template.id} onClick={() => handleSelect(template)}>
            <img src={`https://picsum.photos/200/300?random= ${Math.random()}`} alt={template.name} width="150" />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
