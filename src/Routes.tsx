import { ElementType, lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';
import { useRoutes } from 'react-router';

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

export const pathNames = {
  home: '/',
} as const;

const lazyRoutes: RouteObject[] = [
  {
    path: '*',
    element: <HomePage />,
  },
];

const LazyRoutes = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default LazyRoutes;
