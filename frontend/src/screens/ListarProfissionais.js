
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadProfissionais} from  '../redux/thunk/profissionaisThunk';
import TableProfissionais from '../components/Tables/TableProfissionais';
import './ScreensFormat.css'


function ListarProfissionais({profissionais, isLoading, onGetProfissionais}) {

    useEffect(()=>{
        onGetProfissionais()
        
    },[])

    const laodMessage = <div>Carregando...</div> // tela para enquanto espera carrecar os dados

    return isLoading ? laodMessage : ( <div className ="screen-position">
    {console.log(`segundo ${profissionais}`)}
                <TableProfissionais profissionais={profissionais}/>
                </div>)

}

const mapStateToProps = (state) =>({
    
    profissionais: state.getProfissionais,
    isLoading: state.isProfissionaisLoading
    
})

const mapDispatchToProps = dispatch =>({
    onGetProfissionais: ()=>dispatch(loadProfissionais())
    
    })

export default connect(mapStateToProps, mapDispatchToProps)(ListarProfissionais)
