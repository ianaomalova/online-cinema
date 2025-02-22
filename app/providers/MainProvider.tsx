import {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Layout from '@/components/layout/Layout';
import ReduxToast from './ReduxToast';
import {store} from '@/store/store';
import {Provider} from 'react-redux';
import HeadProvider from './HeadProvider/HeadProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

// @ts-ignore
const MainProvider: FC = ({children}) => {
  return (
    // @ts-ignore
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <Layout>
            {children}
          </Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};

export default MainProvider;
