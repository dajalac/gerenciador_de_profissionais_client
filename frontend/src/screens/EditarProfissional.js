import React from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import{profissionalEditar} from '../redux/thunk/profissionaisThunk';
import FormEditarProfissional from '../components/Froms/FormEditarProfissional';
import './ScreensFormat.css'

function EditarProfissional({onEditarProfissional, isSaved, profissoes}) {
    
    const profissionalToEditar= useLocation(); // to get the props

    return (
        <div className= "screen-position">
            <FormEditarProfissional  onEditarProfissional={onEditarProfissional} 
            isSaved={isSaved}
            profissionalToEditar ={profissionalToEditar.state}
            profissoes={profissoes}
            
            />
        </div>
    )
}

const mapStateToProps = state =>({
    isSaved: state.editarOuCriarProfissional,
    profissoes: state.getProfissoes,
})

const mapDispatchToProps = dispatch =>({
    onEditarProfissional: (data) =>dispatch(profissionalEditar(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditarProfissional)