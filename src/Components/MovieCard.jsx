import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MovieCard({ movie, index }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <div className="box" onClick={()=>setShow(!show)}> */}
      <div className="box" onClick={handleShow}>
        <h1 className="number">{index + 1}</h1>
        <div
          className="image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          }}
        ></div>
      </div>

      {show ? (
        <Modal
          className="bg-transparent rounded-5 "
          show={show}
          onHide={handleClose}
        >
          <div
            className="body rounded-3"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}),linear-gradient(to bottom,#0000001e, #000 80%`,
            }}
          >
            <div className="info text-light ">
              <h6>{movie.release_date.slice(0, 4)}</h6>
              <p>{movie.overview}</p>
              <button
                className="btn px-4 py-2 my-2"
                style={{
                  color: "white",
                  background: "red",
                  borderRadius: "50px",
                }}
              >
                Join now <i class="fa-solid fa-chevron-right"></i>
              </button>
              <p>Create or restart your membership</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieCard;
