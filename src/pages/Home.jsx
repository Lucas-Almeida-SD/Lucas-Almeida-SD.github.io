import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import programming from '../imgs/programming.svg';
import './home.css';
const text = 'Desenvolvedor Web';

function Home() {
  const [textToType, setToType] = useState('');

  const typeText = () => {
    text.split('').forEach((e, index) => {
      setTimeout(() => {
        setToType((prev) => prev + e);
      }, 100 * index);
    });
  }

  const deleteText = () => {
    const textToDelete = textToType.split('');
    setTimeout(() => {
      textToDelete.forEach((_e, index) => {
        setTimeout(() => {
          textToDelete.splice(-1, 1);
          setToType(textToDelete.join(''));
        }, 100 * index);
      });
    }, 800)
    
  }

  useEffect(() => {
    const typeOrDeleteText = () => {
      if (textToType === '') {
        typeText();
      }
      if (textToType === text) {
        deleteText();
      }
    };
    typeOrDeleteText();
  });

  return (
    <>
      <Header pageSelected="HOME" />
      <main>
        <section className="home-section">
          <div className="introduce-div">
            <div>
              <h3>
                Lucas Almeida
              </h3>
              <h2>
                <span>{textToType}</span>
                <span>|</span>
              </h2>
            </div>
          </div>
          <div className="programming-image-div">
            <img src={ programming } alt="programming" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
