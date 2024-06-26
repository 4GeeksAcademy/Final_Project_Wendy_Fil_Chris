import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";


export const EditProfile = () => {
    const { currentUser, setCurrentUser, token, setToken, role, setRole,
        display, setDisplay

    } = useContext(AppContext);
    const navigate = useNavigate();

    const [tempF, setTempF] = useState('');
    const [tempP, setTempP] = useState('');
    const [tempE, setTempE] = useState('');

    const [tempPA, setTempPA] = useState('');
    const [tempNPA, setTempNPA] = useState('');



    useEffect(() => {
        setTempE(currentUser.email);
        setTempF(currentUser.full_name);
        setTempP(currentUser.phone);

    }, []);



    function get_full_name(val) {

        setTempF(val.target.value);
    }

    function get_phone(val) {
        setTempP(val.target.value);
    }



    function get_email(val) {
        setTempE(val.target.value);
    }

    function get_current_password(val) {
        setTempPA(val.target.value);
    }

    function get_new_password(val) {
        setTempNPA(val.target.value);
    }



    function cancel_update_function() {
        setTempE('');
        setTempP('');
        setTempF('');
        setTempPA('');
        setTempNPA('');
        setDisplay("myProfile")
    }

    function save_update_function() {
        let current_role = currentUser.role;


        if (tempF.length > 3 && tempE.length > 3 && tempP.length > 3) {

            let testObj = {
                full_name: tempF,
                email: tempE,
                phone: tempP,
                role: current_role,
                password: tempPA,
                new_password: tempNPA

            }

            // setTempE('');
            // setTempP('');
            // setTempF('');
            setTempPA('');
            setTempNPA('');
            setDisplay("myProfile")


            let url_enpoint = "api/update/profile/" + currentUser.id;

            fetch(process.env.BACKEND_URL + url_enpoint, {
                method: 'PUT',
                body: JSON.stringify(testObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (!res.ok) throw Error(res.statusText);
                    return res.json();
                })
                .then(responseAsJson => {
                    console.log('This is the response from backend :', responseAsJson)
                    setCurrentUser(responseAsJson)
                }
                )
                .catch(error => console.error(error))
        }

        else {
            alert('Something is missing');
        }

    }

    return (


        <div className="card-body">
            <div className="row gx-3 mb-3">

                <div className="col-2 d-flex align-items-center">
                    <label className="medium mb-1" for="inputFirstName">Full Name</label>
                </div>
                <div className="col-10">

                    <input className="form-control" id="inputFirstName" type="text" onChange={(e) => { get_full_name(e) }} placeholder="Enter your first name" value={tempF} />

                </div>


            </div>

            <div className="row mb-3">

                <div className="col-2 d-flex align-items-center">
                    <label className="medium mb-1" for="inputEmailAddress">Email address</label>
                </div>

                <div className="col-10">

                    <input className="form-control" id="inputEmailAddress" type="email" onChange={(e) => { get_email(e) }} placeholder="Enter your email address" value={tempE} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-2 d-flex align-items-center">
                    <label className="medium mb-1" for="inputEmailAddress">Phone</label>
                </div>

                <div className="col-10">

                    <input className="form-control" id="inputphone" type="email" onChange={(e) => { get_phone(e) }} placeholder="Enter your phone " value={tempP} />
                </div>

            </div>


            <div className="row mb-3">

                <div className="col-2 d-flex align-items-center">
                    <label className="medium mb-1" for="inputpassword">Current password</label>
                </div>

                <div className="col-10">

                    <input className="form-control text-lg" type="password" id="inputpassword" onChange={(e) => { get_current_password(e) }} placeholder="Enter your current password " value={tempPA} />
                </div>

            </div>


            <div className="row mb-3">

                <div className="col-2 d-flex align-items-center">
                    <label className="medium mb-1" for="inputNewPassword">New password</label>
                </div>

                <div className="col-10">

                    <input className="form-control" id="inputNewPassword" type="password" onChange={(e) => { get_new_password(e) }} placeholder="Enter your new password " value={tempNPA} />
                </div>

            </div>





            <div className="row">
                <div className="col-4"></div>
                <div className="col"> <button className="btn btn-secondary h-100" type="button" onClick={() => { cancel_update_function() }}>Cancel </button> <button className="button-24" type="button" onClick={() => { save_update_function() }}>Save Changes </button></div>

                <div className="col-4"></div>

            </div>

        </div>






    );
};