const messages = [];
let id = 0;

module.exports = {
    createM: (req, res) => {
        const {text, time} = req.body;
        // let newMessage = {
        //     id,
        //     text,
        //     time
        // }
        //Why didn't we have to destructure id? Is it because it's declared as a variable on the global scope?
        messages.push({id, text, time});
        id++
        res.status(200).send(messages)
    },
    readM: (req, res) => {
        res.status(200).send(messages)
    },
    updateM: (req, res) => {
        const {text} = req.body;
        //When client makes request - it creates req object (with a lot of meta data). Params, query, and body objects exist in every request. If you're doing the query 
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };    
        res.status(200).send(messages)
    },
    
    deleteM: (req, res) => {
        let indexToDelete = messages.findIndex(elem => elem.id === +req.params.id)
        if(indexToDelete === -1) {
            res.status(404).send("Quit looking for things that don't exist!")
        } else {
            messages.splice(indexToDelete, 1)
            res.status(200).send(messages)
        }
    }
    // Solution code:

    // deleteM: (req, res) => {
    //     const deleteID = req.params.id;
    //     messageIndex = messages.findIndex(message => message.id == deleteID);
    //     messages.splice(messageIndex, 1);
    //     res.status(200).send(messages)
    // }
    
}

