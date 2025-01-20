import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "./firebase"


export async function getDocFromCollection(object_id, collection_name) {
    try {
        const docRef = doc(db, collection_name, object_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such document!");
            return {};
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
}


export async function getDocsFromCollection(collection_name, q = undefined) {
    if (q == undefined) {
        q = query(collection(db , collection_name))
    }

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("Document data:", querySnapshot.docs);
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No such document!");
            return {};
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
}