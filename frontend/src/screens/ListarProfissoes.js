/* eslint-disable react/prop-types */
    import React, {useEffect} from 'react';
    import {connect} from 'react-redux';
    import{loadProfissoes} from '../redux/thunk/profissoesThunk';
    import TableProfissoes from '../components/Tables/TableProfissoes';
    import './ScreensFormat.css';

    
    function ListarProfissoes({profissoes,isLoading, onGetProfissoes}) {

        useEffect(()=>{
            onGetProfissoes()
            
        },[])

        const pageContent = (
            <div className ="screen-position">
            <TableProfissoes profissoes ={profissoes}/>
        </div>
        );
        
        const laodMessage = <div>Carregando...</div>

        return isLoading ? laodMessage : pageContent // se os dados estiver carregando irá display Carregando
    }
    
    const mapStateToProps = state =>({
        profissoes: state.getProfissoes,
        isLoading: state.isProfissoesLoading,
    })

    const mapDispatchToProps = dispatch =>({
        onGetProfissoes: () => dispatch(loadProfissoes())
    })

  
    export default connect(mapStateToProps, mapDispatchToProps)(ListarProfissoes)
    
    