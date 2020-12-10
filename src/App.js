import './App.css';
import React, { useState, Fragment } from 'react';
import CreateHotDogForm from './components/CreateHotDogForm';
import Modal from 'react-modal';
import RemoteSubmitButton from './components/RemoteSubmitButton';
import HotDogList from './components/HotDogList';
import { store } from './redux/store';
import { getHotDogs } from './redux/actions';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
  },
};

Modal.setAppElement('#root');
export default function App() {
  const createHotDog = (values) => {
    fetch('http://127.0.0.1:5000/add-hotdog', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: values.name, description: values.description, title: values.title, image: values.image }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setModalIsOpenToFalse();
        store.dispatch(getHotDogs());
      });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='App'>
      <div className='topnav'>
        <ul>
          <ul onClick={setModalIsOpenToTrue}>Add hotdog</ul>
        </ul>
      </div>
      <HotDogList />
      <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
        <div>
          <Fragment>
            <CreateHotDogForm onSubmit={createHotDog} />
          </Fragment>
          <div className='flexcenter'>
            <button onClick={setModalIsOpenToFalse} className='modalbtn'>
              No thanks
            </button>
            <RemoteSubmitButton />
          </div>
        </div>
      </Modal>
    </div>
  );
}
