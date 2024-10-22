import React from 'react';
import './Template.css';
import GeneralTemplateImg from '../assets/generaltemplate.png';


function GeneralTemplate ({ imagePath }) {
  
  return (
    <div className='masterDiv'>
      <img className='templateImg' src={GeneralTemplateImg} alt="General Template" />
      <img className='exAlunoImg' src={require(`../assets/Ex-Alunos/${imagePath}`)} alt="ExAluno" />
    </div>
  );
};

export default GeneralTemplate;