const Register = (req, res) => {
    try
    {
        res.status(200).send("Hello World from auth-controller.");
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = { Register };