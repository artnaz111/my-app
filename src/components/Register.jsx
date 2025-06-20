import React, { useState, useEffect } from 'react';

export default function Register({ onSwitch, onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const isValid = name.trim() !== '' 
      && /\S+@\S+\.\S+/.test(email) 
      && password.length >= 6 
      && password === confirm;
    setValid(isValid);
  }, [name, email, password, confirm]);

  const handleSubmit = e => {
    e.preventDefault();
    onRegister({ name, email, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <label>Имя
        <input 
          type="text" 
          placeholder="Введите ваше имя" 
          value={name} 
          onChange={e => setName(e.target.value)} />
      </label>
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
          placeholder="Минимум 6 символов"
          value={password} 
          onChange={e => setPassword(e.target.value)} />
      </label>
      <label>Подтверждение пароля
        <input 
          type="password" 
          placeholder="Повторите пароль"
          value={confirm} 
          onChange={e => setConfirm(e.target.value)} />
      </label>
      <button type="submit" disabled={!valid}>Зарегистрироваться</button>
      <p>
        Уже есть аккаунт?{' '}
        <span className="link" onClick={onSwitch}>Войти</span>
      </p>
    </form>
  );
}