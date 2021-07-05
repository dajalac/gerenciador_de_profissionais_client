/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

/* eslint-disable react/no-string-refs */
/* eslint-disable prefer-const */
import React, {useState, useRef} from 'react';
import { useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './Forms.css'


const situacoes = [
    {
      value: true,
      label: 'Ativo',
    },
    {
      value: false,
      label: 'Inativo',
    },
  ];

  // Para display as error msg em vermelho
  const styles = {
    helper: {
         color: 'red'
    }
}

  // para aplicar style no form
  const useStyles = makeStyles((theme) => ({
    root: {
    
      margin: theme.spacing(3),
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '25ch',
      },
    },
  }));


function FormEditarProfissao({onEditarProfissao, isSaved, profissaoToEditar}) {
  const classes = useStyles();
  const [situacao, setSituacao]= useState(profissaoToEditar.situacao);
  const [descricaoError, setDescricaoError] = useState(' ');
  const [situacaoError, setSituacaoError] = useState(' ');
  const textFieldRef = useRef('');
  let descricao = '';
  const profissaoId = profissaoToEditar.id;
  let history = useHistory();



  const handleSituacao = (event) => {
    setSituacao(event.target.value);
  };


const inputValidation =()=>{

    
  // check situacao
  if (situacao === '') {
    setSituacaoError('Escolha uma situação')
  } else {
    setSituacaoError(' ')
  };

  // check profissao
  if (!descricao) {
    setDescricaoError('O título da profissão é obrigatório')
  } 
   else  {
    setDescricaoError(' ')
  };
  
 };


const salvarDatas = () => {

  descricao =textFieldRef.current.value;

  setDescricaoError(' ')
  setSituacaoError(' ')

  
  if(situacao === '' || descricao ===''){
    inputValidation()
  }else{

    onEditarProfissao({descricao, situacao, profissaoId});

    if(isSaved){
        alert('Profissão cadastrada com sucesso')
        history.push('/')
      }

  } 
};
  return (
    <div className="forms-container">
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField
           id="standard-required"
            label="Titulo"
            defaultValue ={profissaoToEditar.descricao}
            inputRef={textFieldRef}
            helperText= {descricaoError}
            FormHelperTextProps={{ style: styles.helper }}/>

        </div>
        <div style= {{margin:'30px'}}/> 

        <div>

        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Situacao"
          value={situacao}
          onChange={handleSituacao}
          helperText= {situacaoError} 
          
          FormHelperTextProps={{ style: styles.helper }}>
          {situacoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div style= {{margin:'50px'}}/> 

        <div>
          <Button variant="contained" fullWidth
          onClick ={()=>{history.push('/')}}>Cancelar</Button>
        </div>
        <div style= {{margin:'5px'}}/> 
        <div>
        <Button variant="contained"
                 color="primary" 
                 fullWidth
                 onClick={salvarDatas}>Salvar</Button>
        </div>

      </form>
    </div>
  );
}

export default FormEditarProfissao;
