/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

type PageContexType = {
  revalidate: () => void;
};

const PageContext = React.createContext<PageContexType>({
  revalidate: () => {},
});

export default PageContext;
