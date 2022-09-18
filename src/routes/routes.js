import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Messages from '~/pages/Messages';
import Feedback from '~/pages/Feedback';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
    { path: config.routes.messages, component: Messages, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
