import { doc, setDoc } from "firebase/firestore";
import { initializeFirebase } from "../dbConnection";

const DummyData = {
  name: "out",
  docId: "out",
  data: {
    cause: "שכירות",
    effect: -2450,
  },
};

export function createNewDoc(/* props: {
  name: string;
  docId: string;
  data: any; 
}*/) {
  const { app, db } = initializeFirebase();

  if (!app || !db) {
    console.log("error connecting to the server");
    return;
  }

  const document = doc(db, DummyData.name, DummyData.docId);
  const newDoc = setDoc(document, DummyData.data);
  return newDoc;
}
