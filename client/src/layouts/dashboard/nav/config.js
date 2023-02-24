// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'customers',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'collectors',
    path: '/404',
    icon: icon('ic_user'),
  },
  {
    title: 'technicians',
    path: '/404',
    icon: icon('ic_user'),
  },
  {
    title: 'e-waste',
    path: '/404',
    icon: icon('ic_user'),
  },
  {
    title: 'revenue',
    path: '/404',
    icon: icon('ic_user'),
  },
  {
    title: 'shop',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
