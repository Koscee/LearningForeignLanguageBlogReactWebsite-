/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { logout } from 'src/actions/securityActions';

function NavTopMenuItem(props) {
  const { menuItem } = props;
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
    listItem.subNav ? handleOpenMenu
      : () => {
        if (listItem.href) { navigate(listItem.href); }
        if (listItem.action === 'logout') { props.logout(); window.location.href = '/user/login'; }
        if (listItem.name) { navigate(`/categories/${listItem.name}`); }
        handleCloseMenu();
      }
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
          <MenuItem key={subMenu.title || subMenu.name} onClick={handleClick(subMenu)}>{subMenu.title || subMenu.name}</MenuItem>
        ))}
      </Menu>
      )}
    </div>

  );
}

NavTopMenuItem.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(NavTopMenuItem);
