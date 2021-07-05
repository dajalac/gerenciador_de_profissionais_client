import React from 'react';
import {connect} from 'react-redux';
import {criarProfissional} from '../redux/thunk/profissionaisThunk'
import FormProfissional from '../components/Froms/FormProfissional'
import './ScreensFormat.css'

function NovoProfissional({onCriarNovoProfissional, isSaved, profissoes}) {
    return (
        <div className="tall-forms-position">
            <FormProfissional onCriarNovoProfissional={onCriarNovoProfissional} 
                                isSaved={isSaved}
                                profissoes={profissoes} />
        </div>
    )
}

const mapStateToProps = state =>({
    isSaved: state.editarOuCriarProfissional,
    profissoes: state.getProfissoes,
})

const mapDispatchToProps = dispatch =>({
    onCriarNovoProfissional: (data) =>dispatch(criarProfissional(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(NovoProfissional)

