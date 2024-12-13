import { doc, getDoc } from "firebase/firestore"; 
import { db } from "./firebase"

export async function getLevel(level_id) {
    try {
        const docRef = doc(db, "levels", level_id);
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
