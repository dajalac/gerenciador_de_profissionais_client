/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Edit from '@material-ui/icons/Edit';
import './Tables.css'



const useRowStyles = makeStyles (()=>({
  root: {
    '& > *': {
      borderBottom: 'set',
    },    
 
  },
}));

// cria os dados padronizados para serem inseridos na tabela
function createData(tipodeprofissao,id,nome, descricao, situacao, telefone, email) {
  return {
    id,
    nome,
    tipodeprofissao,
    descricao,
     situacao,
    history:
       // eslint-disable-next-line object-shorthand
       [{telefone: telefone, email:email}]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root} >
        <TableCell style={{borderBottom:'none'}}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{borderBottom:'none'}} component="th" scope="row">{row.nome}</TableCell>
        <TableCell style={{borderBottom:'none'}} align="center">{row.descricao}</TableCell>
        {row.situacao ? 
        <TableCell  style={{borderBottom:'none'}} align="center"> ATIVO </TableCell>
        :
        <TableCell  style={{borderBottom:'none'}} align="center"> INATIVO </TableCell>}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow >
                      <TableCell component="th" scope="row" align="center"><b>E-mail: </b> {historyRow.email}</TableCell>
                      <TableCell align="center"><b>Telefone: </b> {historyRow.telefone}</TableCell>
                      <TableCell align="center">
                        <Link to = {{pathname:'/editarProfissional', state: row }}>
                          <Edit color="primary" style={{fontSize: '25px'}}/> 
                        </Link>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// check se a estrutura do props esta certa 
Row.propTypes = {
    row: PropTypes.shape({
      id:PropTypes.number.isRequired,
      tipodeprofissao:PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      situacao: PropTypes.bool.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          telefone: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired
        }),
      )
    }).isRequired,
  }; 
  


export default function TableProfissionais({profissionais}) {

  // criando os dados para serem inseridos na tabela de acordo com o especificado formatacao
  const rows=[]
    profissionais.map((profissional) => (
      rows.push(createData(profissional.tipodeprofissao, profissional.id,profissional.nome, profissional.descricao, 
        profissional.situacao, profissional.telefone,profissional.email))
    ))
  
  
  console.log(rows)
  return (
    <TableContainer component={Paper} style={{width: '90%'}}>
      <Table aria-label="collapsible table">
        <TableHead className = "table-header">
          <TableRow >
            <TableCell />
            <TableCell >Nome</TableCell>
            <TableCell align="center">Profissão</TableCell>
            <TableCell align="center" className="table-status-column">Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.nome} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

