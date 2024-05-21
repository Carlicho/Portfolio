import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`

  max-width: 400px;
  margin: 9.375rem auto 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.2em; /* Tamaño de fuente al doble */
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;

      label {
        font-weight: bold;
        margin-bottom: 50px;
        
      }
      

      input,
      textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    h2 {
      font-size: 3em; /* Tamaño de fuente aumentado aún más */
    }
    label{
      font-size: 2em;
    }
  }
`;

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a donde desees, como a una API o por correo electrónico
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Mensaje:', message);
    // Limpia los campos después de enviar el formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FormContainer>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </FormContainer>
  );
};

export default SimpleForm;