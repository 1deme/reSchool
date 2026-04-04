let users = [
	{id: 1 , name : "demetre"}, 
	{id: 2 , name : "giorgi"}, 
	{id: 3 , name : "ani"}
]

let messages = [
	{id : 1, from : 1, to : 3, text : "hi"},
	{id : 2, from : 1, to : 3, text : "how ru"},
	{id : 3, from : 3, to : 1, text : "good"},
	{id : 4, from : 2, to : 1, text : "someth"},
]

//loadConversation(ID1, ID2)
//allContacts(userId)
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
    let thisConvo = messages.filter(x => (x.from = ID1 && x.to == ID2) || (x.from == ID2 && x.to == ID1))
    let nameOne = users.find(x => x.id == ID1).name
    let nameTwo = users.find(x => x.id == ID2).name
    for(let i = 0; i < thisConvo.length; i++){
        if(thisConvo[i].id == ID1){
            console.log(nameOne + " : " + thisConvo[i].text)
        }
        else{
            console.log(nameTwo + " : " + thisConvo[i].text)
        }
    }
}
console.log("Running")
loadConversation(2, 1)