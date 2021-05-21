import { experimentalStyled } from '@material-ui/core';

const root = (color) => (
  experimentalStyled('div')(
    ({ theme }) => {
      const { background } = theme.palette;
      return ({
        backgroundColor: Object.keys(background).includes(color) ? background[color] : color,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
      });
    }
  )
);

const wrapper = (screenSize = 'lg', { ...cssStyles } = {}) => (
  experimentalStyled('div')(
    ({ theme }) => ({
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      [theme.breakpoints.down('sm')]: { paddingTop: 55 },
      [theme.breakpoints.up(screenSize)]: { ...cssStyles }
    })
  )
);

export const DashboardLayoutRoot = root('default');

export const MainLayoutRoot = root('default');

export const DashboardLayoutWrapper = wrapper('lg', { paddingLeft: 256 });

export const MainLayoutWrapper = wrapper();

export const LayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

export const LayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});
