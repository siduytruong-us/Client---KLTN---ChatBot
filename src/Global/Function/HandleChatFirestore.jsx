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

const HandleChatFirestore = {
    addChatToConversation
}

export default HandleChatFirestore