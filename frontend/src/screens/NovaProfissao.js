import React from 'react';
import {connect} from 'react-redux';
import{criarProfissao} from '../redux/thunk/profissoesThunk';
import FormProfissao from '../components/Froms/FormProfissao';
import './ScreensFormat.css'

function NovaProfissao({onCriarNovaProfissao, isSaved}) {

    return (
        <div className= "screen-position">
            <FormProfissao onCriarNovaProfissao={onCriarNovaProfissao} isSaved={isSaved}/>
        </div>
    )
}

const mapStateToProps = state =>({
    isSaved: state.editarOuCriarProfissao
})

const mapDispatchToProps = dispatch =>({
    onCriarNovaProfissao: (data) =>dispatch(criarProfissao(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(NovaProfissao)
