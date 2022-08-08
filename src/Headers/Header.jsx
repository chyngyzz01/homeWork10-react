import React, { useContext} from 'react'
import classes from '../Headers/Header.module.css'
import Switch from '@mui/material/Switch';
import MyContext from '../store/ChangeColor-context';

function Header() {
  const { divColor, setDivColor } = useContext(MyContext)

  const Changehandler = (event) => {
    setDivColor(event.target.checked);
  };

  return (
    <div className={classes.header}>
      <Switch
        checked={divColor}
        onChange={Changehandler}
      />
    </div>
  );
}

export default Header