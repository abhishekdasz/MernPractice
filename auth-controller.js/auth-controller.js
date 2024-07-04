const Register = async (req, res) => {
    try
    {
        // const {email, password, username, phone} = req.body;

        res.status(200).json({ msg: req.body });
    }
    catch(error)
    {
        console.log(error);
    }   
}

module.exports = { Register };