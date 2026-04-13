import './App.css'; // O CSS já está ligado aqui!

function App() {
  // Dados simulando uma resposta da Base de Dados
  const usuarios = [
    { id: 101, nome: "Alice Fonseca", online: true, nivel: "Admin" },
    { id: 102, nome: "Bruno Costa", online: false, nivel: "Usuário" },
    { id: 103, nome: "Carla Mendes", online: true, nivel: "Usuário" },
    { id: 104, nome: "Diego Souza", online: false, nivel: "Admin" }
  ];
  
  return (
    <div className="painel-container">
      <h1 className="titulo-painel">Painel de Administração</h1>

      <div className="grid-usuarios">



      {usuarios.map(usuarios =>(
    
        <div className='user-card' key={usuarios.id}>

          <h2 className={usuarios.nivel === "Admin" ? 'user-nome user-nome-admin' : 'user-nome user-nome-comum'}>
            {usuarios.nome}
          </h2>
          <p className='user-nivel'>{usuarios.nivel}</p>

          <div className='status-bagde'>{usuarios.online ? "🟢 Online" : "🔴 Offline"}</div>

        </div>
      
    ))}


      </div>
    </div>

  
);
}

export default App;