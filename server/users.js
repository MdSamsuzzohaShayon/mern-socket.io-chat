const users = [];

const addUser = ({
    id,
    name,
    room
}) => {
    // CHANGING LOWER CASE AND MAKE ONE WORD EXAMPLE BELOW
    // Md Shayon = mdshayon

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser) {
        return {
            error: "Username is taken already"
        };
    }
    const user = {
        id,
        name,
        room
    };
    users.push(user);
    return {
        user
    };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        // REMOVE USERS FROM THE ARRAY
        return users.splice(index, 1)[0];
    }
}

// IF THE USER IS EXIST IT WILL RETURN THE USER
const getUser = (id) => users.find((user) => user.id === id);


// GETTING USER IN THE ROOM
const getUsersInRoom = (room) => users.filter((user) => user.room === room);





// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}