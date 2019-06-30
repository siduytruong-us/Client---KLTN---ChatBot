import moment from 'moment'
import firebase from "../../Config/firebaseConfig"
const conversationFirestore = firebase.firestore().collection("Conversation")


const addChatToConversation = (student, message) => {
    return new Promise( (resolve, reject) => { 


        conversationFirestore.doc(student.toString()).update({
            history: firebase.firestore.FieldValue.arrayUnion(message),
            lastMessage: new Date(),
          })
          .then(() => {
              resolve(null)
          }).catch(err => {
            reject(err.toString())
          })
    })
}

const createNewFirebaseConversation = (idConversation) => { 
    return new Promise((resolve,reject) =>  {
        conversationFirestore.doc(idConversation).set({
            createdTime: new Date(),
            id: idConversation,
            history:[],
            user: "user",
            respondent: "bot",
            lastMessage: new Date(),
        })
        .then(data => {
            var msg =  { 
                status: "success",
                message:"Create conversation success",
                type: "firebase conversation"
            }
            resolve(msg) 
        })
        .catch( err => { 
            var msg =  { 
                status: "error",
                message: err,
                type:"firebase conversation"
            }
            reject(msg)
        })
    })
}

const HandleChatFirestore = {
    addChatToConversation,
    createNewFirebaseConversation
}

export default HandleChatFirestore