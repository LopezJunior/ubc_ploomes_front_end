import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./style.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Config() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={"container"}>
      <button onClick={openModal}> Click </button>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel={"Tela De Configuração"}
          className={"modal"}
          overlayClassName={"overlay"}
          >

          <div className={"title"}> <h2>UBC</h2> </div>

          <div className={'content'}> 
            <div className={'content-img'}>
              <img 
                src="https://m.media-amazon.com/images/I/91GfFQ8gubL._AC_SX425_.jpg" 
                width={"100%"} 
                height={"100%"} 
                object-fit="cover" 
              />
            </div>
            <div className={'content-data'}>
              <div className={'content-data-group'}>
                <label>Número de Cartelas</label>
                <input></input>
              </div>
              <div className={'content-data-group'}>
                <label>Tempo para Próxima Bola</label>
                <input></input>
              </div>
              <div className={'content-data-group'}>
                <label>Limite Sorteios</label>
                <input></input>
              </div>
            </div>
          </div>

          <div className={'footer'}>
            <button onClick={closeModal}>Compartilhar</button>
            <button>Iniciar Jogo</button>
          </div>
      </Modal>
    </div>
  );
}

export default Config;