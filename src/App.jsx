import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { IoMdRefresh } from "react-icons/io";
import Footer from "./components/Footer";

import "./App.css";
// import Phone from "./components/Phone";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://phoneworld.onrender.com";

  useEffect(() => {
    axios
      .get(`${API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <IoMdRefresh className="animate-spin text-4xl text-gray-600" />
        </div>
      ) : (
        <div className="justify-center items-center grid gap-4 lg:gap-5 lg:grid-cols-3 m-10 md:grid-cols-3 sm:grid-cols-2">
          {phones.map((phone) => (
            <div
              key={phone._id}
              className="w-full p-10 bg-white border border-white-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              onClick={() => handlePhoneClick(phone)}
            >
              <img
                className="justify-center items-center p-8 lg:w-72 lg:h-72 md:w-50 md:h-50  rounded-full"
                src={`../images/${phone.imageFileName}`}
                alt=""
              />
              <div className="px-5 pb-5 text-white">{phone.name}</div>
              <div className="flex items-center justify-around">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${phone.price}
                </span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handlePhoneClick(phone)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Phone Details"
            className="modal"
            overlayClassName="overlay"
          >
            {selectedPhone && (
              <>
                <h2 className="text-xl font-bold mb-4">{selectedPhone.name}</h2>
                <img
                  className="w-48 h-48 mb-4"
                  src={`../images/${selectedPhone.imageFileName}`}
                  alt=""
                />
                <p className="mb-4">{selectedPhone.description}</p>
                <p className="text-lg font-bold">
                  Price: ${selectedPhone.price}
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </>
            )}
          </Modal>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
