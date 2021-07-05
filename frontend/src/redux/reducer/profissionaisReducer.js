/* eslint-disable import/prefer-default-export */

import {CREATE_PROFISSIONAL,
        CREATE_PROFISSIONAL_FAILURE,
        LISTAR_PROFISSIONAIS,
        LISTAR_PROFISSIONAIS_FAILURE,
        EDITAR_PROFISSIONAL,
        EDITAR_PROFISSIONAL_FAILURE,
        LOAD_PROFISSIONAIS_FAILURE,
        LOAD_PROFISSIONAIS_IN_PROGRESS} from '../actions/profissionalAction';

export const isProfissionaisLoading = (state=false, action)=>{
    const{type} = action;

    switch(type){
        case LOAD_PROFISSIONAIS_IN_PROGRESS:{
            return true
        }
        case LISTAR_PROFISSIONAIS: // se conseguir pegar os dados do server
        case LOAD_PROFISSIONAIS_FAILURE:
            return false
        default:
            return state
    }

}

export const getProfissionais = (state =[], action)=>{
    const {type, payload} = action;
    
    switch(type){
        case LISTAR_PROFISSIONAIS: {
            const profissionais = payload
            console.log(`primeiro ${profissionais}`)
            return profissionais
        }
        case LISTAR_PROFISSIONAIS_FAILURE:{
            return state
        }
        default:
            return state
    }
}

export const editarOuCriarProfissional = (state = false, action) =>{
    const{type} =action;

    switch(type){
        case CREATE_PROFISSIONAL:{
            return true
        }
        case CREATE_PROFISSIONAL_FAILURE:{
            return false 
        }
        case EDITAR_PROFISSIONAL:{
            return true
        }
        case EDITAR_PROFISSIONAL_FAILURE:{
            return false
        }
        default:
            return state
    }
}