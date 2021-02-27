import '../styles/Dossier.scss';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        <SortIcon className="deplacer">Déplacer</SortIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info" style={{backgroundColor:couleur}}>
        <h2>{titre}</h2>
        <p>{dateModif}</p>
        <IconButton className="pts">
            <MoreVertIcon/>
        </IconButton>
      </div>
    </article>
  );
}