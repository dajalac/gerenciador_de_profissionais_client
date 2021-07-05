/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import{profissaoEditar} from '../redux/thunk/profissoesThunk';
import FormEditarProfissao from '../components/Froms/FormEditarProfissao';
import './ScreensFormat.css'

function EditarProfissao({onEditarProfissao, isSaved}) {
    
    const profissaoToEditar= useLocation(); // to get the props
    console.log(profissaoToEditar.state)
    return (
        <div className= "screen-position">
            <FormEditarProfissao onEditarProfissao={onEditarProfissao} 
            isSaved={isSaved}
            profissaoToEditar ={profissaoToEditar.state}
            />
        </div>
    )
}

const mapStateToProps = state =>({
    isSaved: state.editarOuCriarProfissao
})

const mapDispatchToProps = dispatch =>({
    onEditarProfissao: (data) =>dispatch(profissaoEditar(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditarProfissao)