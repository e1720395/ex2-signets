import '../styles/Bouton.scss'
//import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';


export default function BtnAjoutRessource() {
  return (

    <Fab size="medium" color="primary" aria-label="add" className="BtnAjoutRessource">
          <AddIcon />
    </Fab>

  );
}