/* eslint react/prop-types: 0 */

import PropTypes from 'prop-types';
import {
  Collapse,
  List,
  ListItem as MuiListItem, ListItemIcon, ListItemText, makeStyles,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/securityActions';

const actionStyle = (theme) => ({
  // backgroundColor: theme.palette.customWhite.shade50,
  color: theme.palette.secondary.dark,
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: theme.palette.text.secondary,
    fontWeight: 'medium',
    justifyContent: 'flex-start',
    letterSpacing: 0,
    textTransform: 'none',
    width: '100%',
    '&:hover, &:hover .MuiListItemIcon-root': actionStyle(theme),
    '& .MuiListItemIcon-root': {
      marginRight: 1,
      minWidth: 30
    }
  },
  subMenu: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    '& .MuiListItem-root': {
      paddingLeft: theme.spacing(1.5),
      paddingTop: theme.spacing(0.4),
      paddingBottom: theme.spacing(0.4),
    }
  },
  active: {
    ...actionStyle(theme),
    '& .MuiListItemIcon-root': actionStyle(theme),
  }
}));

const SideBarMenuItem = (props) => {
  const { menuItem } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const showSubNav = () => {
    setOpen(!open);
  };

  const isActive = (listItem) => (location.pathname === listItem.href && classes.active);
  // const handleClick = (listItem) => (
  //   listItem.subNav ? showSubNav : () => navigate(listItem.href)
  // );
  const handleClick = (listItem) => (
    listItem.subNav ? showSubNav
      : () => {
        if (listItem.href) { navigate(listItem.href); }
        if (listItem.action === 'logout') { props.logout(); window.location.href = '/user/login'; }
        if (listItem.name) { navigate(`/categories/${listItem.name}`); }
      }
  );

  const ListItem = ({ itemObj, children, ...other }) => (
    <MuiListItem
      button
      onClick={handleClick(itemObj)}
      className={`${classes.root} ${isActive(itemObj)}`}
      {...other}
    >
      <ListItemIcon>
        {itemObj.icon && (
          <menuItem.icon size="20" />
        )}
      </ListItemIcon>
      <ListItemText primary={itemObj.title || itemObj.name} />
      {children}
    </MuiListItem>
  );

  return (
    <>
      <ListItem itemObj={menuItem}>
        {menuItem.subNav && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {
        menuItem.subNav && menuItem.subNav.map((item) => (
          <Collapse in={open} timeout="auto" unmountOnExit key={item.id}>
            <List component="div" disablePadding className={classes.subMenu}>
              <ListItem itemObj={item} />
            </List>
          </Collapse>
        ))
      }
    </>
  );
};

SideBarMenuItem.propTypes = {
  menuItem: PropTypes.any,
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(SideBarMenuItem);
