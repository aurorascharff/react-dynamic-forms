import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';
import type { ElementType } from 'react';
import type { RouteObject } from 'react-router';

const Loadable = (Component: ElementType) => {
  const LazyComponents = (props: any) => {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Component {...props} />
      </Suspense>
    );
  };

  return LazyComponents;
};

const HomePage = Loadable(
  lazy(() => {
    return import('./pages/HomePage');
  }),
);

const FormPage = Loadable(
  lazy(() => {
    return import('./pages/FormPage');
  }),
);

export const pathNames = {
  home: '/',
  form: '/form',
} as const;

const lazyRoutes: RouteObject[] = [
  {
    path: '*',
    element: <HomePage />,
  },
  {
    path: pathNames.form,
    element: <FormPage />,
  },
];

const LazyRoutes = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default LazyRoutes;
