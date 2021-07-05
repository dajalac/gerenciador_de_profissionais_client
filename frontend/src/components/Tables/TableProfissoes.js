/* eslint-disable prefer-const */

/* eslint-disable object-shorthand */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit';
import './Tables.css'


// table style
const useRowStyles = makeStyles (()=>({
  root: {
    '& > *': {
      borderBottom: 'set',
    },    
 
  },
}));


function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root} >
        <TableCell  component="th" scope="row" align="center">{row.descricao}</TableCell>
        {row.situacao ? 
        <TableCell  align="center"> ATIVO </TableCell>
        :
        <TableCell  align="center"> INATIVO </TableCell>}
        <TableCell align="center">
                      <Link to = {{pathname:'/editarProfissao', state: row }}>
                        <Edit color="primary"
                         style={{fontSize: '25px'}}
                         /> 
                      </Link>
                      </TableCell>
      </TableRow>
    </>
  );
}

// check se a estrutura do props esta certa 
Row.propTypes = {
    row: PropTypes.shape({
      descricao: PropTypes.string.isRequired,
      situacao: PropTypes.bool.isRequired,
    }).isRequired,
  }; 
  
 
export default function TableProfissoes({profissoes}) {
 
  
  return (
    <TableContainer component={Paper} style={{width: '80%'}}>
      <Table aria-label="collapsible table">
        <TableHead className = "table-header">
          <TableRow >
            <TableCell align="center">Profissão</TableCell>
            <TableCell align="center">Situação</TableCell>
            <TableCell align="center" className="table-status-column"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profissoes.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


