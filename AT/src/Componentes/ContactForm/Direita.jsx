function Direita() {
    return (
      <>
      <form action="post">
        <div>
          <h2>Nome:</h2>
          <input type="text" />
        </div>
        <div>
          <h2>E-mail:</h2>
          <input type="text" />
        </div>
        <div className="mensagem">
          <h2>Mensagem:</h2>
          <input type="text" />
        </div>
        <button>Enviar</button>
      </form>
      </>
    );
  }
  
  export default Direita;