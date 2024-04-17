import Index1 from "../Componentes/Home2/index1.jsx"
import Index2 from "../Componentes/Home2/index2.jsx"

function Home() {
  return (
    <main>
      <div className="index1">
        <div className="index1_2">
          <Index1/>
        </div>
        <div>
          <img src="/public/img/img1.png" alt="png"/>
        </div>
      </div>
      <div className="index2">
        <Index2/>
      </div>
    </main>
  );
}

export default Home;