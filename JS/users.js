const users = [
    {
        fname : "admin",
        lname : "",
        email : "admin@gmail.com",
        password : "admin123",
        role : "admin"
    },{
        fname : "Ahmed",
        lname : "marwan",
        email : "ahmedmarwan200@gmail.com",
        password : "ahmed123",
        role : "user"
    },{
        fname : "Asmaa",
        lname : "mousaa",
        email : "asmaamousa200@gmail.com",
        password : "asmaa123",
        role : "user"
    },{
        fname : "Abelrahman",
        lname : "Necro",
        email : "abdelrahman200@gmail.com",
        password : "Abelrahman123",
        role : "user"
    },{
        fname : "Amira",
        lname : "Mahmoud",
        email : "amiramahmoud200@gmail.com",
        password : "amira123",
        role : "seller"
    },{
        fname : "Mohamed",
        lname : "Hamdy",
        email : "mohamedhamdy200@gmail.com",
        password : "mohamed123",
        role : "seller"
    }
]


localStorage.setItem("users", JSON.stringify(users))