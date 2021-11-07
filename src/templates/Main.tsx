import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 container mx-auto w-960">
    {props.meta}
    {props.children}
  </div>
);

export { Main };
