import { Suspense } from 'react'
import Service  from './service'
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
