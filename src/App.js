import { toPng } from 'html-to-image';
import GeneralTemplate from './pages/Template'; // Certifique-se que o caminho esteja correto
import './App.css';
import React, { useState, useRef } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('2- 4 Rodas.jpg');
  const hiddenRef = useRef(null); // Referência para o elemento oculto

  const options = [
    '1- Carabina.jpg',
    '2- 4 Rodas.jpg',
    '3- Hipotenusa.jpg',
    '4- Duvidoso.jpg',
    '5- Tororó.jpg',
    '6- Tiú.jpg',
    '7- Pombo.jpg',
    '8- Flint.jpg',
    '9- Manga.jpg',
    '10- Leitão.jpg',
    '11- Xuvisco.jpg',
    '12- Jaburu.jpg',
    '13- Maricón.jpg',
    '14- Jeguinho.jpg',
    '15- Kudizu.jpg',
    '16- Chererê.jpg',
    '17- Boca.jpg',
    '18- Marrukão.jpg',
    '19- Nó Cego.jpg',
    '20- Sacristão.jpg',
    '21- Boyzinho.jpg',
    '22- Peidim.jpg',
    '23- Prex.jpg',
    '24- Fonha.jpg',
    '25- Mandiokão.jpg',
    '26- Mamão.jpg',
    '27- Behuga.jpg',
    '28- Sapatão.jpg',
    '29- Pi-ranha.jpg',
    '30- Marola.jpg',
    '31- Zebrão.jpg',
    '32- Piu Piu.jpg',
    '33- Furadin.jpg',
    '34- Tripa.jpg',
    '35- Borrão.jpg',
    '36- Xernobil.jpg',
    '37- Luiz Galinha.jpg',
    '38- Tuvira.jpg',
    '39- Pimpolho.jpg',
    '40- Anjinho.jpg',
    '41- Tuiuiú.jpg',
    '42- Paiakan.jpg',
    '43- Gota.jpg',
    '44- Tonha.jpg',
    '45- Franjinha.jpg',
    '46- Aza.jpg',
    '47- Magal.jpg',
    '48- Morcego.jpg',
    '49- Ma-k-rrão.jpg',
    '50- Meio Kilo.jpg',
    '51- Tiririca.jpg',
    '52- 040.jpg',
    '53- Bikudin.jpg',
    '54- Kokóta.jpg',
    '55- Gyngybry.jpg',
    '56- Xurisco.jpg',
    '57- Guará.jpg',
    '58- Guapo.jpg',
    '59- Boysônsu.jpg',
    '60- Ballantines.jpg',
    '61- Matuto.jpg',
    '62- Insulina.jpg',
    '63- Yglu.jpg',
    '64- 1-Berto.jpg',
    '65- Xorão.jpg',
    '66- Kd-rudo.jpg',
    '67- Sufridu.jpg',
    '68- Na-Trave.jpg',
    '69- Pastor.jpg',
    '70- Tékynão.jpg',
    '71- Frágil.jpg',
    '72- Hypólyto.jpg',
    '73- Cinderela.JPG',
    '74- K-rioka malditú.JPG'
  ];

  const handleDownload = () => {
    if (hiddenRef.current === null) {
      return;
    }

    // Capturando o conteúdo renderizado de GeneralTemplate
    toPng(hiddenRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'minha-imagem.png';
        link.click();
      })
      .catch((err) => {
        console.log('Erro ao capturar a imagem:', err);
      });
  };

  return (
    <div className='initPage'>
      <div className='inputSection'> 
          <h1>Gerador de Parabéns da TX</h1>
          <h3>Escolha um Exaluno</h3>
          <select className='select' onChange={(e) => setInputValue(e.target.value)} value={inputValue}>
          <option value="" disabled>
            Escolha um Exaluno
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className='BotaoDowload' onClick={handleDownload}>Baixar Template</button>
      </div>
      {/* Container oculto para renderizar o template sem exibi-lo */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <div ref={hiddenRef}>
          <GeneralTemplate imagePath={inputValue} />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
