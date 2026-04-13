export function Cards({ nome, descricao, link }) {
  return (
    <div className="card-projeto" style={{ border: '1px solid #646cff', padding: '15px', borderRadius: '10px', margin: '10px 0' }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer">Ver no GitHub</a>
    </div>
  );
}