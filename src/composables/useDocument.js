import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
    const error = ref(null)
    const isPending = ref(false)

    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        isPending.value = true
        error.value = null
        
        try{
            const res = await docRef.delete()
            isPending.value = false
            return res
        } catch(err){
            isPending.value = false
            error.value = 'could not delete the document'
        }
    }

    return {error, isPending, deleteDoc}
}

export default useDocument











