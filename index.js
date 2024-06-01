import express from "express";
import axios from "axios";

const app=express();
const port = 3000;
const apiUrl="https://secrets-api.appbrewery.com";

app.use(express.static('public'));

app.get("/",async (req, res) => {
    try{
        const result = await axios.get(apiUrl+"/random");
        let someSecret=result.data;
        let user=someSecret.username;
        let secret=someSecret.secret;
        res.render("index.ejs",{user: user, secret:secret});
    } catch (error){
        res.status(404).send(error.message);
    }
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
