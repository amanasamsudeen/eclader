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
    path: '/dashboard/collectors',
    icon: icon('sync-outlined'),
  },
  {
    title: 'technicians',
    path: '/dashboard/technicians',
    icon: icon('tool-filled'),
  },
  {
    title: 'e-waste',
    path: '/dashboard/ewaste',
    icon: icon('ewaste'),
  },
  {
    title: 'revenue',
    path: '/dashboard/revenue',
    icon: icon('dollar-circle-filled'),
  },
  {
    title: 'shop',
    path: '/dashboard/shop',
    icon: icon('ic_cart'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
