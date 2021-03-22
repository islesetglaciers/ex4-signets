import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],},
    secondary: {
      main: red[900],},
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.5)
    },
  },
  
}));

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  const margins = useStyles();

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
            colors={['#DBB1BC', '#FF5733', '#48A9A6', '#1CD0B4', '#D01CC7', '#A3D9FF']}
          />
        </DialogContent>
        <DialogActions className={margins.root}>
          <MuiThemeProvider theme={theme} >
            <Button onClick={()=>{setOuvert(false); viderChamps()}} variant="contained" color="secondary">
              Annuler
            </Button>
            <Button onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} variant="contained" color="primary">
              Ajouter
            </Button>
          </MuiThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}