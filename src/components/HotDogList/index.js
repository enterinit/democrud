import React from 'react';
import HotDogItem from '../HotDogItem';
import { useSelector } from 'react-redux';
function HotDogList() {
  let hotdogs = useSelector((state) => state.reducerget);
  return (
    <div className='cards'>
      {hotdogs.map((hotdog) => {
        return <HotDogItem key={hotdog.hotdog_id} hotdog={hotdog} />;
      })}
    </div>
  );
}

export default (HotDogList);