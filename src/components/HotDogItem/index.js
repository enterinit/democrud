import React, { useState } from 'react';
import { store } from '../../redux/store';
import { getHotDogs } from '../../redux/actions';


function HotDogItem({ hotdog}) {
const [hname, setHname] = useState(hotdog.name)
const [htitle, setHtitle] = useState(hotdog.title)
const [hdescription, setHdescription] = useState(hotdog.description)
const [himage, setHimage] = useState(hotdog.image)
  const [editable, setEditable] = useState(false);
  const updateHotDog = (values) => {
    fetch('http://127.0.0.1:5000/update-hotdog', {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hotdogId: hotdog.hotdog_id, name: hname, description: hdescription, title: htitle, image: himage }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setEditable(!editable)
        store.dispatch(getHotDogs());
      });
  }

  const deleteHotDog = () => {
    fetch('http://127.0.0.1:5000/delete-hotdog', {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hotdogId: hotdog.hotdog_id }),
    }).then((data) => {
      console.log(data);
      store.dispatch(getHotDogs());
    });
  };
  return (
    <div className='hotdog-container'>
      <div className='imager'>
        <img src={hotdog.image} alt="" className='oneimage' />
      </div>
      {editable ? (<div>
        <form onSubmit={updateHotDog}>
        <input
        required
        name='name'
        className='form'
          type="text"
          value={hname}
          onChange={e => setHname(e.target.value)}
        />
                <input
        required
        name='htitle'
        className='form'
          type="number"
          value={htitle}
          onChange={e => setHtitle(e.target.value)}
        />
                        <textarea
        required
        name='hdescription'
        className='form'
        rows='10'
          type='text'
          value={hdescription}
          onChange={e => setHdescription(e.target.value)}
        />
                <input
        required
        name='himage'
        className='form'
          type="text"
          value={himage}
          onChange={e => setHimage(e.target.value)}
        />
    <div className='btns'>
              <button type='sumbit' className='btn'>
                Update
              </button>
            </div>
    </form>

    <div className='btns'>
              <button className='btn' onClick={deleteHotDog}>
                Delete
              </button>
            </div>
          </div>
          ) :(
<div>
          <div className='hotdogname'>
            <p>{hotdog.name}</p>
          </div>
      <div><p>{hotdog.title}$</p></div>
      <div>
 <p>{hotdog.description}</p>
      </div>
      <div className='btns'>
            <button className='btn' onClick={() => setEditable(!editable)}>
              Edit
            </button>
          </div>
          </div>
          
      )}
</div>
  );
}

export default (HotDogItem);
