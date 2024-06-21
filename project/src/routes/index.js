// Layout
import { headerOnly } from '@/components/Layout';

// Page
import Following from '@/pages/Following';
import Profile from '@/pages/Home';
import Home from '@/pages/Home';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: headerOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
