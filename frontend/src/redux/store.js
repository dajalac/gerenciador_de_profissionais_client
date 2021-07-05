/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProfissoes, editarOuCriarProfissao,getProfissionalAssociado,isProfissoesLoading } from '../redux/reducer/profissaoReducer';
import {getProfissionais, editarOuCriarProfissional,isProfissionaisLoading} from '../redux/reducer/profissionaisReducer';




const reducer ={
    // profissao
    getProfissoes,
    editarOuCriarProfissao,
    getProfissionalAssociado,
    isProfissoesLoading,

    // profissionais
    getProfissionais,
    editarOuCriarProfissional,
    isProfissionaisLoading

};

const persistConfig= {
    key:'root',
    storage,
    stateReconciller: autoMergeLevel2
}

const rootReducer = combineReducers(reducer);
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore=()=>createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk))); 

