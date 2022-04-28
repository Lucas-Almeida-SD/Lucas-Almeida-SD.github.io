import Tilt from 'react-vanilla-tilt';
import Header from '../components/Header';
import lucasAlmeida from '../imgs/LucasAlmeida.png'
import pinkBlob from '../imgs/blob_pink.png';
import yellowBlob from '../imgs/blob_yellow.png';
import blueBlob from '../imgs/blob_blue.png';
import './about.css';

function Sobre() {
  return (
    <>
      <Header pageSelected="ABOUT" />
      <main>
        <section className="about-section">
          <div className="about-image-div">
            <Tilt id="vanilla-tilt-about-div">
              <img id="lucasAlmeida" src={ lucasAlmeida } alt="Lucas Almeida" />
            </Tilt>
            <div className="blob-div">
              <img className="blob" id="pinkBlob" src={ pinkBlob } alt="Blob Rosa" />
              <img className="blob" id="yellowBlob" src={ yellowBlob } alt="Blob Amarelo" />
              <img className="blob" id="blueBlob" src={ blueBlob } alt="Blob Azul" />
            </div>
          </div>
          <div className="about-text-div">
            <p>
              Olá, meu nome é Lucas Almeida e tenho 25 anos! Sou graduado em 
              engenharia elétrica e, durante minha formação, tive meu primeiro 
              contato com a área de programação e acabei me apaixonando por essa 
              incrível área, então decidi mudar de carreira para me tornar Desenvolvedor 
              Web Full Stack.
            </p>
            <p>
              Atualmente sou estudante na escola Trybe, finalizadno o módulo 
              de Front End para então iniciar o módulo de Back End e assim tornar-me 
              o tão desejado Desenvolvedor Full Stack.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Sobre;
