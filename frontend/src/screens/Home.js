/* eslint-disable prefer-const */
/* eslint-disable no-console */

import React from 'react';

import { useHistory} from 'react-router-dom';
import {Work, 
     AddCircle, 
     Person, 
     PersonAdd} from '@material-ui/icons';
import Card from '../components/Cards/card';
import './Home.css'


function Home() {

      
    let history = useHistory();

    const onListarProfissionais=(()=>{
        
        history.push('/listarProfissionais')
    });
    
    const onListarProfissao =(()=>{
        history.push('/listarProfissoes')
    });
    
    const onCadastrarProfissional =(()=>{
        history.push('/novoProfissional')
    });
    
    const onCadastrarProfissao =(()=>{
        history.push('/novaProfissao')
    })
    

  return (
    <div className =" home-screen">
       <div className ="home-screen-items">
        <Card icon={Person} btnText='Listar Profissionais' onClickBtn={onListarProfissionais}/>
        <Card icon={Work} btnText='Listar Profissões'onClickBtn={onListarProfissao}/>
        <Card icon={PersonAdd} btnText='Cadastrar Profissional'onClickBtn={onCadastrarProfissional}/>
        <Card icon ={AddCircle} btnText='Cadastrar Profissões'onClickBtn={onCadastrarProfissao}/>
        </div>
        </div>

    
  );
}




export default Home;
