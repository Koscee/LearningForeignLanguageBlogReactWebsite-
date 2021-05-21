/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export default function NavTopMenuItem({ menuItem }) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClick = (listItem) => (
    listItem.subNav ? handleOpenMenu : () => { navigate(listItem.href); handleCloseMenu(); }
  );

  return (

    <div>
      <MenuItem
        // component={RouterLink}
        // to={menuItem.href}
        aria-controls={open ? menuItem.title : null}
        aria-haspopup="true"
        onClick={handleClick(menuItem)}
      >
        {menuItem.isIconButton ? <menuItem.icon /> : menuItem.title}
        {!menuItem.isIconButton ? (menuItem.subNav && (open ? <ExpandLess /> : <ExpandMore />)) : null}
      </MenuItem>
      {menuItem.subNav && (
      <Menu
        id={menuItem.title}
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleCloseMenu}
      >
        {menuItem.subNav.map((subMenu) => (
          <MenuItem key={subMenu.title} onClick={handleClick(subMenu)}>{subMenu.title}</MenuItem>
        ))}
      </Menu>
      )}
    </div>

  );
}
