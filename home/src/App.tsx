import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from './Layout';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout />
  </QueryClientProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
