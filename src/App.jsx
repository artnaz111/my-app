import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  const [page, setPage] = useState('login');
  const [users, setUsers] = useState([]); // здесь можно заранее захардкодить массив пользователей

  const handleRegister = (user) => {
    setUsers([...users, user]);
    alert('Регистрация прошла успешно!');
    setPage('login');
  };

  const handleLogin = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      alert(`Добро пожаловать, ${found.name}!`);
    } else {
      alert('Неверный email или пароль');
    }
  };

  return (
    <div className="container">
      {page === 'login' ? (
        <Login onSwitch={() => setPage('register')} onLogin={handleLogin} />
      ) : (
        <Register onSwitch={() => setPage('login')} onRegister={handleRegister} />
      )}
    </div>
  );
}