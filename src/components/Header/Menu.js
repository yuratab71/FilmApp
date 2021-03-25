import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import style from "./Header.module.css";
import {Link} from "react-router-dom";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    props.changeCategorie(e.target.id);
    
  };

  return (
    <div>
      <div className={style.header_button}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <span>Categories</span>
      </Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/"><MenuItem id={"Movies"} onClick={handleClose}>Movies</MenuItem></Link>
        <Link to="/"><MenuItem id={"TVSeries"} onClick={handleClose}>TVSeries</MenuItem></Link>
        
      </Menu>
    </div>
  );
}