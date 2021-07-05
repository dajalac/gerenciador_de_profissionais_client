/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


// para dar style no card
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border: '1px ',
      boxShadow: '0  2px 5px rgb(0,0,0,0.4);'

    },
    button: {
        backgroundColor: '#fff',
      color: '#3c52b2',
      
    '&:hover': {
        backgroundColor: '#87bdd8',
    color: '#fff',
    }
    }
});

function card({icon, btnText, onClickBtn}) {
    const classes = useStyles();

    const Icon = icon;
  
    return (
      <Card className={classes.root} >
        <CardContent>
            <Icon color="action" style={{fontSize: '70px'}}/>
        </CardContent>
        <CardActions>
          <Button size="small" 
            fullWidth
            color="primary"
            className={classes.button}
            onClick={onClickBtn}>{btnText}</Button>
        </CardActions>
      </Card>
    );
}

export default card
