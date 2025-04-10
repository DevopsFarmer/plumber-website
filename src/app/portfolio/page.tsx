import { Suspense } from 'react'
import Portfolio  from './portfolio'
const Portfolio1 = () => {
  return (
   <>
     <Suspense>
      <Portfolio />
    </Suspense>
   </>
  );
};

export default Portfolio1;
