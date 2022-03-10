const express = require('express');
const router = express.Router();

router.use(express.json());

//Home
router.get("/home", async (req, res) => {

    /*fetch all movies from most popular to least popular*/

    /*Show them*/
})

//Search Engine
router.get("/search/:filter", async (req, res) => {
    const filter = req.params.filter;

    /* fetch the movies based on the filter that the user passes*/

    /*Show said movies */

})

//User Page
router.get("/user/:username", async (req, res) => {
    const username = req.params.username;

    /*Obtain info from user = username*/
    
    /*Show said info */
})

//Movie Page
router.get("/movies/:title", async (req, res) => {
    const nameMovie = req.params.title;

    /*Obtain movie data for movie of title = nameMovie*/

    /*Show movie data */
})

//Comments
router.post("/newComment", async (req, res) => {
    const {username} = req.body.username;
    const {date} = req.body.date;
    const {comment} = req.body.comment;

    /*Append comment to database */
})

module.exports = router;