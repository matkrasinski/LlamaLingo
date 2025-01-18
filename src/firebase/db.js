import { doc, getDoc, collection, getDocs } from "firebase/firestore"; 
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

export async function getCourses() {
    try {
        const coursesCollectionRef = collection(db, "lessons");
        const querySnapshot = await getDocs(coursesCollectionRef);
        
        const courses = [];
        querySnapshot.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() });
        });

        console.log("Courses data:", courses);
        return courses;
    } catch (error) {
        console.error("Error getting courses:", error);
        return [];
    }
}
