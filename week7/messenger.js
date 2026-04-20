let users = [
	{id: 1 , name : "demetre"}, 
	{id: 2 , name : "giorgi"}, 
	{id: 3 , name : "ani"}
]

let messages = [
	{id : 1, from : 1, to : 3, text : "hi"},
	{id : 2, from : 1, to : 3, text : "how ru"},
	{id : 3, from : 3, to : 1, text : "good"},
]

function addMessage(fromId, toId, text){
    messages.push(
        {
            id :  messages[messages.length - 1].id + 1, 
            from : fromId,
            to : toId,
            text : text
        }
    )
}

function editMessage(messageId, newText){
    let messageToEdit = messages.find(x => x.id == messageId)
    messageToEdit.text = newText
}

function deleteMessage(messageId){
    messages.splice(
        messages.findIndex(x => x.id == messageId),
        1
    )
}

function loadConversation(ID1, ID2){
    let thisConvo = messages.filter(
        x => (x.from == ID1 && x.to == ID2) || (x.from == ID2 && x.to == ID1)
    )
    let nameOne = users.find(x => x.id == ID1).name
    let nameTwo = users.find(x => x.id == ID2).name
    for(let i = 0; i < thisConvo.length; i++){
        if(thisConvo[i].from == ID1){
            console.log("                 " + nameOne + " : " + thisConvo[i].text)
        }
        if(thisConvo[i].to == ID1){
            console.log(nameTwo + " : " + thisConvo[i].text)
        }
    }
}

function loadContacts(userUd){
    let contactId = []
    for(let i = 0; i < messages.length; i++){
        if(messages[i].from == userUd && contactId.findIndex(x => x == messages[i].to) == -1){
            contactId.push(messages[i].to)
        }
        if(messages[i].to == userUd && contactId.findIndex(x => x == messages[i].from) == -1){
            contactId.push(messages[i].from)
        }
    }
    return contactId.map(x => users.find(inner => inner.id == x).name)
}
