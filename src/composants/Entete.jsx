import '../styles/Entete.scss';
import avatar from '../images/avatar.png';
import { Avatar } from '@material-ui/core';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan <Avatar src={avatar} alt="Camille Semaan" className="pic"/></div>
    </header>
  );
}