import axios from 'axios';
import {
  createProfissional,
  createProfissionalFailure,
  listarProfissionais,
  listarProfissionaisFailure,
  editarProfissional,
  editarProfissionalFailure,
  loadProfissionaiFailure,
  loadProfissionaisInProgress,
} from '../actions/profissionalAction';

export const loadProfissionais = () => async (dispatch) => {
  try {
    //
    dispatch(loadProfissionaisInProgress());
    const response = await axios.get('https://aqueous-brook-21441.herokuapp.com/api/profissional/');
    

    if (response.data.error) {
        
      dispatch(listarProfissionaisFailure());
      
    } else {
      dispatch(listarProfissionais(response.data.data));
    }
  } catch {
    dispatch(loadProfissionaiFailure());
  }
};

export const criarProfissional = (novoProfissional) => async (dispatch) => {
  const response = await axios.post('https://aqueous-brook-21441.herokuapp.com/api/profissional/novoProfissional', {
    nome: novoProfissional.nome,
    situacao: novoProfissional.situacao,
    profissaoId: novoProfissional.profissao,
    email: novoProfissional.email,
    telefone: novoProfissional.telefone,
  });


  if (response.data.error) {
    dispatch(createProfissionalFailure());
  } else {
    dispatch(createProfissional());
  }
};

export const profissionalEditar = (profissionalEditado) => async (dispatch) => {
 

  const response = await axios.put('https://aqueous-brook-21441.herokuapp.com/api/profissional/editarProfissional', {
    id:profissionalEditado.profissionalId,
    nome: profissionalEditado.nome,
    situacao: profissionalEditado.situacao,
    profissaoId: profissionalEditado.profissao,
    email: profissionalEditado.email,
    telefone: profissionalEditado.telefone,
  });


  if (response.data.error) {
    dispatch(editarProfissionalFailure());
  } else {
    dispatch(editarProfissional());
  }
};
