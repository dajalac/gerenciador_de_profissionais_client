/* eslint-disable prefer-const */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
import React, { useState,useRef } from "react";
import PropTypes from "prop-types";
import { useHistory} from 'react-router-dom';
import MaskedInput from "react-text-mask";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import "./Forms.css";


// para validar o formato do telefone
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}


TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

// Para display as error msg em vermelho
  const styles = {
    helper: {
         color: 'red'
    }
}

// form styles
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
       
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

function FormProfissional({profissoes, onCriarNovoProfissional, isSaved}) {
  const classes = useStyles();
  const [situacao, setSituacao] = useState('');
  const [profissao, setProfissao] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [situacaoError, setSituacaoError] = useState('');
  const [profissaoError, setProfissaoError] = useState('');
  const nomeFieldRef = useRef('');
  const emailFieldRef = useRef('');
  const phoneFieldRef = useRef('');
  let nome = '';
  let email = '';
  let telefone = '';
  let history = useHistory();

  const [values, setValues] = useState({
    textmask: "(55)    -    ",
  });

  // dropdown menu para situacao
const situacoes = [
  {
    value: true,
    label: "Ativo",
  },
  {
    value: false,
    label: "Inativo",
  },
];


// dropdown menu para profissoes

const listDeProfissoes =(
    profissoes.map((item)=>({
    value: item.id.toString(),
    label: item.descricao
    })))


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSituation = (event) => {
    setSituacao(event.target.value);
  };

  const handleChangeProfissao = (event) => {
    setProfissao(event.target.value);
  };

  const inputValidation =()=>{
    // check situacao
    if (situacao === '') {
      setSituacaoError('Escolha uma situação')
    } else {
      setSituacaoError('')
    }
  
    if (profissao === '') {
      setProfissaoError('Escolha uma profissão')
    } else {
      setProfissaoError('')
    }
    // check profissao
    if (!nome) {
      setNomeError('Nome é obrigatório')
    } else {
      setNomeError('')
    } 
   };

   const salvarDados = () => {
    nome = nomeFieldRef.current.value;
    email = emailFieldRef.current.value;
    telefone = phoneFieldRef.current.value;

    setNomeError('')
    setSituacaoError('')
    setProfissaoError('')
  
    if(situacao === '' || !nome || profissao ===''){
      inputValidation()
    }else{
      onCriarNovoProfissional({nome, situacao,email, telefone,profissao})
      
      if(isSaved){
        alert('Profissional cadastrado com sucesso')
        history.push('/')
      }
    
  
    }
  
}




  return (
    <div className="form-with-columns-container">
      <div className="form-with-columns">
        {/** **  Form do lado direito *** */}

        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic"
              label="Nome*"
              helperText= {nomeError} 
              inputRef={nomeFieldRef}
              FormHelperTextProps={{ style: styles.helper }} />
          </div>

          <div style={{ margin: "10px" }} />

          <div>
            <TextField id="standard-basic" label="E-mail" inputRef={emailFieldRef} />
          </div>

          <div style={{ margin: "10px" }} />

          <div>
            <FormControl style={{paddingRight:'30px'}} className={classes.root}>
              <InputLabel  htmlFor="formatted-text-mask-input">Telefone</InputLabel>
              <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                inputRef={phoneFieldRef}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </div>
        </form>

        {/** **  Form do lado esquerdo *** */}
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              defaultValue="Normal"
              id="standard-select-currency"
              select
              label="Profissao*"
              value={profissao}
              helperText ={profissaoError}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={handleChangeProfissao}
            >
              {listDeProfissoes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <TextField
              defaultValue="Normal"
              id="standard-select-currency"
              select
              label="Situacao*"
              value={situacao}
              helperText= {situacaoError} 
              FormHelperTextProps={{ style: styles.helper }}
              onChange={handleChangeSituation}
            >
              {situacoes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
      </div>

      {/** **  Buttons area*** */}

      <div className="btn-container">
        <Button variant="contained" onClick ={()=>{history.push('/')}}>Cancelar</Button>
        <Button variant="contained" color="primary" onClick={salvarDados}>
          Salvar
        </Button>
      </div>
    </div>
  );
}

export default FormProfissional;

/**
 * <div className="forms-container">
       
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField id="standard-basic" label="Nome*"/>
        </div>

        <div style= {{margin:'10px'}}/> 

        <div >
          <TextField id="standard-basic" label="E-mail"/>
        </div>

        <div style= {{margin:'10px'}}/>

        <div >
          <TextField id="standard-basic" label="Telefone"/>
        </div>
        <div>
        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Profissao"
          value={situacao}
          onChange={handleChange}
        >
          {situacoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        
        <div>
        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Situacao"
          value={situacao}
          onChange={handleChange}
        >
          {situacoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div style= {{margin:'50px'}}/> 

        <div>
          <Button variant="contained" fullWidth>Cancelar</Button>
        </div>
        <div style= {{margin:'5px'}}/> 
        <div>
        <Button variant="contained" color="primary" fullWidth>Salvar</Button>
        </div>

      </form>
    </div>
 */
