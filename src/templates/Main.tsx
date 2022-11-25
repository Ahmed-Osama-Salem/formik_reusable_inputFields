import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    {props.children}
  </div>
);

export { Main };
