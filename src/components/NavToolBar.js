import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Hidden,
  List,
  Toolbar
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { getCategories } from 'src/actions/categoryAction';
import { useEffect } from 'react';
import Logo from './Logo';
import Controls from './controls/Controls';
import { itemsList } from './NavListItems';
import NavTopMenuItem from './HeaderMenu';
import categoryNavList from './categoryNavList';

function NavToolBar(props) {
  const {
    children, isLoggedIn, categories
  } = props;

  useEffect(() => {
    (async () => {
      await props.getCategories();
      categoryNavList[0].subNav = categories;
    })();
  }, [categories.length]);

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const showLoginAndSignupBtn = () => (
    <Box>
      <Controls.Buttons.LoginButton
        color="secondary"
        variant="outlined"
        size="small"
        padding={0.4}
        sx={{
          color: 'white',
          mx: 1
        }}
      />
      <Controls.Buttons.SignUpButton
        color="secondary"
        size="small"
        padding={0.5}
        sx={{
          mx: 1
        }}
      />
    </Box>
  );

  return (
    <Toolbar>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden mdDown>
        <List sx={{ display: 'flex' }}>
          {
          itemsList.mainNav.map((item) => (
            <NavTopMenuItem key={item.title} menuItem={item} />
          ))
        }
          {
          categoryNavList && categoryNavList.map((item) => (
            <NavTopMenuItem key={item.title} menuItem={item} />
          ))
        }
        </List>

        {/* displasys button if user is not logged in */}
        {
           !isLoggedIn ? showLoginAndSignupBtn() : ' '
        }

        {/* use the below code to handle the display of the profile icon when loggedIn */}
        {/* {
          isLoggedIn && (
            <IconButton color="inherit" component={RouterLink} to="/app/account">
              <AccountCircle />
            </IconButton>
          )
        } */}
        {/* <IconButton color="inherit" component={RouterLink} to="/app/account">
          <AccountCircle />
        </IconButton> */}
        {
        isLoggedIn && (
          itemsList.accountTopNav.map((item) => (
            <NavTopMenuItem key={item.title} menuItem={item} />
          ))
        )
        }
      </Hidden>
      {children}
    </Toolbar>
  );
}

NavToolBar.propTypes = {
  children: PropTypes.any,
  isLoggedIn: PropTypes.bool,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  categories: state.category.categories
});

export default connect(mapStateToProps, { getCategories })(NavToolBar);
