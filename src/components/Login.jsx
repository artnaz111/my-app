import React, { useState, useEffect } from 'react';

export default function Login({ onSwitch, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(/\S+@\S+\.\S+/.test(email) && password.length >= 6);
  }, [email, password]);

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <label>Email
        <input 
          type="email" 
          placeholder="you@example.com"
          value={email} 
          onChange={e => setEmail(e.target.value)} />
      </label>
      <label>Пароль
        <input 
          type="password" 
          placeholder="Введите пароль"
          value={password} 
          onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" disabled={!valid}>Войти</button>
      <p>
        Нет аккаунта?{' '}
        <span className="link" onClick={onSwitch}>Зарегистрироваться</span>
      </p>
    </form>
  );
}