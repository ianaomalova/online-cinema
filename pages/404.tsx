import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/heading/Heading';
import {NextPage} from 'next';

const Error404: NextPage = ()=> {
  return (
    <Meta title={'Page not found'}>
      <Heading title={'404 - Page not found'} />
    </Meta>
  )
}

export default Error404;
