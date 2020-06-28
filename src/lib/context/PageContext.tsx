/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

type PageContexType = {
  revalidate: () => void;
  revalidateWithData: (data) => void;
};

const PageContext = React.createContext<PageContexType>({
  revalidate: () => {},
  revalidateWithData: () => {},
});

export default PageContext;
