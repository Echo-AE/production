import { ComponentType, lazy } from 'react';

export const asyncPageGenerator = (factory: () => Promise<{ default: ComponentType<any> }>) => {
const Page = lazy(factory);

return () => <Page />;
}

/*
так использовать:

export default asyncPageGenerator(() => import('./about-page'))
*/