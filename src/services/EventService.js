// this is the live server that i am viewing my webpage on
const url = "http://127.0.0.1:5500/src/services";

// CRUD

// Create user service - we do not have a sign up page, but still a good service to have
export const createEvent = (id, title, date, neighborhood, description) => {
    const axios = window.axios;
    console.log(id, title, date, neighborhood, description);
    return axios({
        method: "post", 
        url: `${url}/events.json`,
        data: {
            id,
            title,
            date,
            neighborhood,
            description
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
export const getEvents = () => {
    const axios = window.axios;
    return axios
        .get(`${url}/events.json`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
};

// get one user service - useful for auth and login process
export const getEvent = (id) => {
    const axios = window.axios;
    return axios
        .get(`${url}/events.json`, {
            params: {
                id: id
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
}; 

// get one user service - useful for auth and login process
export const deleteEvent = (id) => {
    const axios = window.axios;
    return axios
        .delete(`${url}/events.json`, {
            params: {
                id: id
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log("GET unsuccessful. Error: ", err);
        });
}; 