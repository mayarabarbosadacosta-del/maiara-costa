import { Cards } from './Cards'
import './App.css'

function App() {
  // Criando o array de objetos (Requisito de Renderização de Dados)
  const meusProjetos = [
    { id: 1, nome: "Projeto HTML/CSS", desc: "Meu antigo portfólio", link: "https://github.com" },
    { id: 2, nome: "Projeto React", desc: "Este novo portfólio dinâmico", link: "https://github.com" }
  ];

  return (
    <main>
      <h1>Meu Portfólio em React</h1>
      <p>Bem-vindo à migração do meu projeto!</p>

      <section id="projetos">
        <h2>Meus Projetos</h2>
        
        {/* Renderizando os cards dinamicamente */}
        {meusProjetos.map((proj) => (
          <Cards 
            key={proj.id} 
            nome={proj.nome} 
            descricao={proj.desc} 
            link={proj.link} 
          />
        ))}
      </section>
    </main>
  )
}

export default App