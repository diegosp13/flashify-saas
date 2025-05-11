import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('Erro ao fazer login');
      return;
    }

    localStorage.setItem('user', JSON.stringify(data.user));
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>🔐 Entrar</h1>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
