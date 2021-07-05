/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {createProfissao,
    createProfissaoFailure,
    listarProfissoes,
    listarProfissoesFailue,
    editarProfissao,
    editarProfissaoFailure,
    profissionalAssociadoFalse,
    profissionalAssociadoTrue,
    loadProfissaoInProgress,
    loadProfissaofailure} from  '../actions/profissaoActions'

export const loadProfissoes = () => async (dispatch)=>{
    
    try{
        dispatch(loadProfissaoInProgress())
        const response = await axios.get('https://aqueous-brook-21441.herokuapp.com/api/profissao/');
 
        if (response.data.error){
            dispatch(listarProfissoesFailue())
        
        }
        else{
            dispatch(listarProfissoes(response.data.data))
            
        }  
    }
    catch{
        dispatch(loadProfissaofailure())
    }
   
};

export const criarProfissao = (novaProfissao) =>async(dispatch)=>{
    const response = await axios.post('https://aqueous-brook-21441.herokuapp.com/api/profissao/novaProfissao',{
        descricao: novaProfissao.descricao,
        situacao: novaProfissao.situacao
    });

    if(response.data.error){
        dispatch(createProfissaoFailure())
    }
    else{
        dispatch(createProfissao())
    }

}

export const profissaoEditar = (profissaoEditada) => async(dispatch)=>{
    const response = await axios.put('https://aqueous-brook-21441.herokuapp.com/api/profissao/editarProfissao',{
        id: profissaoEditada.profissaoId,
        descricao: profissaoEditada.descricao,
        situacao: profissaoEditada.situacao
    });

    
        if(response.data.error){
            dispatch(editarProfissaoFailure())
        }
        else{
            dispatch(editarProfissao())
        }
    

    
};

export const checkAssociacao = (profissaoId) => (dispatch)=>{
    axios.post('https://aqueous-brook-21441.herokuapp.com/api/profissao/profissionalLinked',{
        id:profissaoId
    })
    .then((response)=>{
        if(response.data.error){
            dispatch(profissionalAssociadoFalse())
        }
        else{
            dispatch(profissionalAssociadoTrue(response.data.data))
        }
    })
}

