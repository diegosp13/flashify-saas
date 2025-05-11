import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const handleLogin = () => alert(Entrando como );
  
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>?? Login - Flashify</h1>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
