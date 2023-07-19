import { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para onde for necessário
    console.log({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
          
    <div className="container">
    <h3 className="mt-5">Formulario de Cadastro</h3>
      <div className="form-group col-4 mt-3">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group col-4 mt-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">Enviar</button>
      
      </div>

    </form>
  );
};

export default Formulario;
