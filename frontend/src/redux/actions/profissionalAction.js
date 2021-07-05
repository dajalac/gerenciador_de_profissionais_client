/* eslint-disable import/prefer-default-export */
export const LOAD_PROFISSIONAIS_IN_PROGRESS = 'LOAD_PROFISSIONAIS_IN_PROGRESS';
export const loadProfissionaisInProgress =()=>({
    type: LOAD_PROFISSIONAIS_IN_PROGRESS
});

export const LOAD_PROFISSIONAIS_FAILURE = 'LOAD_PROFISSIONAIS_FAILURE';
export const loadProfissionaiFailure =()=>({
    type: LOAD_PROFISSIONAIS_FAILURE
});

export const CREATE_PROFISSIONAL = 'CREATE_PROFISSIONAL';
export const createProfissional = novoProfissional  =>({
    type: CREATE_PROFISSIONAL,
    payload: {novoProfissional  }
});

export const CREATE_PROFISSIONAL_FAILURE = 'CREATE_PROFISSIONAL_FAILURE';
export const createProfissionalFailure = ()=>({
    type: CREATE_PROFISSIONAL_FAILURE
});


export const LISTAR_PROFISSIONAIS = 'LISTAR_PROFISSIONAIS';
export const listarProfissionais = (data)=>({
    type:LISTAR_PROFISSIONAIS,
    payload:data
});

export const LISTAR_PROFISSIONAIS_FAILURE = 'LISTAR_PROFISSIONAIS_FAILURE';
export const listarProfissionaisFailure = ()=>({
    type:LISTAR_PROFISSIONAIS_FAILURE 
});


export const EDITAR_PROFISSIONAL = 'EDITAR_PROFISSIONAL';
export const editarProfissional =() =>({
    type: EDITAR_PROFISSIONAL,
});

export const EDITAR_PROFISSIONAL_FAILURE = 'EDITAR_PROFISSIONAL_FAILURE';
export const editarProfissionalFailure = profissionalEditado =>({
    type: EDITAR_PROFISSIONAL_FAILURE,
    payload: profissionalEditado
});