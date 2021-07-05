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
  const useStyles = makeStyles((theme) => ({
    root: {
    
      margin: theme.spacing(3),
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '25ch',
      },
    },
  }));


function FormProfissao({onCriarNovaProfissao, isSaved}) {
  const classes = useStyles();
  const [situacao, setSituacao]= useState('');
  const [descricaoError, setDescricaoError] = useState(' ');
  const [situacaoError, setSituacaoError] = useState(' ');
  const textFieldRef = useRef('');
  let descricao = '';
  let history = useHistory();



/** handlers */
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
    setDescricaoError('O titulo da profissão é obrigatório')
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
    onCriarNovaProfissao({descricao, situacao})
    
    if(isSaved){
      alert('Profissão cadastrada com sucesso')
      history.push('/')
    }
    else{
      alert('Profissão já existe na base de dados')
    }

  } 
};
  return (
    <div className="forms-container">
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField
           iid="standard-basic"
            label="profissao*"
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
          <Button variant="contained" fullWidth onClick ={()=>{history.push('/')}}>Cancelar</Button>
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

export default FormProfissao;
