import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@app/layout';
import { path } from '@utils/constants/constants';
import * as Pages from '@pages/index';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: path.home,
        element: <Pages.HomePage />,
      },
      {
        path: path.notFound,
        element: <Pages.NotFound />,
      },
      {
        path: path.about,
        element: <Pages.AboutPage />,
      },
      {
        path: path.player,
        element: <Pages.PlayerPage />,
      },
    ],
  },
]);
