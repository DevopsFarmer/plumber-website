import { Suspense } from 'react'
import Service  from './portfolio'
const Service1 = () => {
  return (
   <>
     <Suspense>
      <Service />
    </Suspense>
   </>
  );
};

export default Service1;
