import { AccountCircle } from '@material-ui/icons';
// import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import {
  BarChart as BarChartIcon,
  Edit3 as PencilIcon,
  Users as UsersIcon,
  User as UserIcon,
  Home as HomeIcon,
  LogOut as LogOutIcon
} from 'react-feather';

export const user = {
  avatar: '/static/images/avatars/avatar_1.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

export const itemsList = {
  mainNav: [
    {
      href: '/home',
      icon: HomeIcon,
      title: 'Home'
    },
    // {
    //   href: '/categories',
    //   icon: CollectionsBookmarkOutlinedIcon,
    //   title: 'Categories',
    //   subNav: [
    //     {
    //       id: 1,
    //       href: '/categories', // categories/English
    //       title: 'English'
    //     },
    //     {
    //       id: 2,
    //       href: '/categories', // categories/Chinese
    //       title: 'Chinese'
    //     },
    //     {
    //       id: 3,
    //       href: '/categories', // categories/Russian
    //       title: 'Russian'
    //     },
    //   ]
    // }
  ],
  accountTopNav: [
    {
      href: '',
      icon: AccountCircle,
      isIconButton: true,
      title: 'profileAccount',
      subNav: [
        {
          href: '/app/account',
          icon: UserIcon,
          title: 'Profile'
        },
        {
          // href: '',
          action: 'logout',
          icon: LogOutIcon,
          title: 'Logout'
        }
      ]
    }
  ],
  userNav: {
    user: [
      {
        href: '/app/account',
        icon: UserIcon,
        title: 'Profile'
      },
      {
        // href: '',
        action: 'logout',
        icon: LogOutIcon,
        title: 'Logout'
      }
    ],
    admin: [
      {
        href: '/app/admin/posts/myPosts',
        icon: PencilIcon,
        title: 'My Posts'
      },
    ],
    superAdmin: [
      {
        href: '/app/manage/dashboard',
        icon: BarChartIcon,
        title: 'Dashboard'
      },
      {
        href: '/app/manage',
        icon: UsersIcon,
        title: 'Manage',
        subNav: [
          {
            id: 1,
            href: '/app/manage/users',
            title: 'Users'
          },
          {
            id: 2,
            href: '/app/manage/posts',
            title: 'Posts'
          },
          {
            id: 3,
            href: '/app/manage/categories',
            title: 'Categories'
          }
        ]
      }
    ]
  }
};
