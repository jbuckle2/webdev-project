import axios from "axios";

// this is the live server that i am viewing my webpage on
const url = "http://127.0.0.1:5500";

// CRUD

// Create user service - we do not have a sign up page, but still a good service to have
export const createUser = (email, firstName, lastName, passwordHash, neighborhood) => {
    return axios({
        method: "post", 
        url: `${url}/users.json`,
        data: {
            email,
            firstName,
            lastName,
            email,
            passwordHash
        },
        headers: {
        "Content-Type": "application/json"
        },
        json: true
    })
        .then((response) => {
            console.log("POST successful. Response: ", response);
        })
        .catch((err) => {
            console.log("POST unsuccessful. Error: ", err);
        });
};

// get all users service
export const getUsers = () => {
    return axios
        .get(`${url}/users.json`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
};

// get one user service - useful for auth and login process
export const getUser = (email) => {
    return axios
        .get(`${url}/users.json`, {
            params: {
                email: email
            }
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
}; 

export const deleteUser = (id) => {
    return axios
        .delete(`${url}/users.json`, {
            params: {
                id: id
            }
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
}; 