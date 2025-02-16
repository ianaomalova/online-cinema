import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/heading/Heading';

export default function Error500() {
  return (
    <Meta title={'Page not found'}>
      <Heading title={'500 - Server-side error occurred'} />
    </Meta>
  )
}
