import React, { useState } from 'react';
import {Link} from 'react-router'

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  label: {
    textAlign: 'left',
    display: 'block'
  }
};

function Login() {
    const [login, setLogin] = useState('Сулейман');
    const [password, setPassword] = useState('Топ');
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Проверка на заполненность полей (пример)
      if (!login || !password) {
        setError('Пожалуйста, заполните все поля.');
        return;
      }
  
      // Здесь можно добавить логику отправки данных на сервер для аутентификации
      // (замените эту строку реальным кодом)
      console.log('Login:', login, 'Password:', password);
      setError('Успешный вход!'); // Заменить на реальный код проверки
    };
  
    return (
      <div style={styles.container}>
        <h2>Вход в аккаунт</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
  
          <label style={styles.label}>Логин:</label>
          <input
            type="text"
            style={styles.input}
            value={login}
            onChange={(e) => {setLogin(e.target.value); setError('')}}
            placeholder="Введите логин"
          />
  
          <label style={styles.label}>Пароль:</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => {setPassword(e.target.value); setError('')}}
            placeholder="Введите пароль"
          />
  
          <Link to="/" style={styles.button} type="submit">
            Войти
          </Link>
        </form>
      </div>
    );
  }
  
  export default Login;
  
  