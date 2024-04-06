import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { AppContext } from "../layout";
import { Link, useNavigate } from "react-router-dom";

export const WDashboard = () => {

  const { store, actions } = useContext(Context);
  const { currentUser, myProperties, setMyProperties, setCurrentUser, token, setToken, role, setRole } = useContext(AppContext);

  const navigate = useNavigate();
  const [listingNote, setListingNote] = useState('');
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  useEffect(() => {

    fetch(process.env.BACKEND_URL + "api/worker/listing/all2")
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => {

        console.log(response)
        // let newArray = [...response];
        // let finalProperty = [];       


      })

      .catch(error => console.log(error));

  }, []);





  function accept_gig_function(id) {
    let new_schedule = { listing_id: listingId, worker_id: 1 };
    fetch(process.env.BACKEND_URL + "/api/worker/schedule/new",
      {
        method: 'POST',
        body: JSON.stringify(new_schedule),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) console.log(res.statusText);
        return res.json();
      })
      .then(response => {
        console.log(response)

      })

      .catch(error => console.log(error));

  }


  // const handleOneClick = () => {
  //   if (rating < 1) {
  //     setRating(1)
  //   }
  //   if (rating >= 1) {
  //     setRating(0)
  //   }
  // }

  // const handleTwoClick = () => {
  //   if (rating < 2) {
  //     setRating(2)
  //   }
  //   if (rating >= 2) {
  //     setRating(1)
  //   }
  // }

  // const handleThreeClick = () => {
  //   if (rating < 3) {
  //     setRating(3)
  //   }
  //   if (rating >= 3) {
  //     setRating(2)
  //   }
  // }

  // const handleFourClick = () => {
  //   if (rating < 4) {
  //     setRating(4)
  //   }
  //   if (rating >= 4) {
  //     setRating(3)
  //   }
  // }




  return (
    <div className="block">
      <div className="add_property_class_div">
        <button class="button-24" role="button" onClick={() => navigate("/")}>See my schedule</button>
      </div>


      <div class="row style-alt">
        <div class="col-sm-6 col-md-4">
          <div class="widget">
            <div class="widget-simple">
              <a href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" class="widget-image img-circle pull-left animation-fadeIn" />
              </a>
              <h3 className="text-center">
                {currentUser.full_name}<br />
                <span className="text-left fs-5">
                  Rating<span className="">
                    <i className="fa-solid fa-star ps-2 fs-4 starRating"
                      style={rating < 1 && hover < 1 ? { display: "inline" } :
                        { display: "none" }}
                      onClick={() => setRating(1)}
                      onMouseEnter={() => setHover(1)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 star"
                      style={
                        rating >= 1 || hover >= 1 ? { display: "inline" } :
                          { display: "none" }}
                      onClick={() => setRating(1)}
                      onMouseEnter={() => setHover(1)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 starRating"
                      style={rating < 2 && hover < 2 ? { display: "inline" } :
                        { display: "none" }}
                      onClick={() => setRating(2)}
                      onMouseEnter={() => setHover(2)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 star"
                      style={
                        rating >= 2 || hover >= 2 ? { display: "inline" } :
                          { display: "none" }}
                      onClick={() => setRating(2)}
                      onMouseEnter={() => setHover(2)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 starRating"
                      style={rating < 3 && hover < 3 ? { display: "inline" } :
                        { display: "none" }}
                      onClick={() => setRating(3)}
                      onMouseEnter={() => setHover(3)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 star"
                      style={
                        rating >= 3 || hover >= 3 ? { display: "inline" } :
                          { display: "none" }}
                      onClick={() => setRating(3)}
                      onMouseEnter={() => setHover(3)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 starRating"
                      style={rating < 4 && hover < 4 ? { display: "inline" } :
                        { display: "none" }}
                      onClick={() => setRating(4)}
                      onMouseEnter={() => setHover(4)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 star"
                      style={
                        rating >= 4 || hover >= 4 ? { display: "inline" } :
                          { display: "none" }}
                      onClick={() => setRating(4)}
                      onMouseEnter={() => setHover(4)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 starRating"
                      style={rating < 5 && hover < 5 ? { display: "inline" } :
                        { display: "none" }}
                      onClick={() => setRating(5)}
                      onMouseEnter={() => setHover(5)}
                      onMouseLeave={() => setHover(0)}
                    ></i>
                    <i className="fa-solid fa-star ps-2 fs-4 star"
                      style={
                        rating >= 5 || hover >= 5 ? { display: "inline" } :
                          { display: "none" }}
                      onClick={() => setRating(5)}
                      onMouseEnter={() => setHover(5)}
                      onMouseLeave={() => setHover(0)}
                    ></i>

                    {rating}
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};









