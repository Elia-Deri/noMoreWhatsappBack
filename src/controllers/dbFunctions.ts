import { doc, setDoc } from "firebase/firestore";
import { Req, Res } from "../utils/types.js";
import { firestoreDb } from "../dbConnection.js";

const DummyData = {
  collectionName: "Munies",
  docId: "out",
  data: {
    cause: "שכירות",
    effect: -2450,
  },
};

export function createNewDoc(
  req: Req,
  res: Res /* props: {
  name: string;
  docId: string;
  data: any; 
}*/
) {
  try {
    const document = doc(
      firestoreDb,
      DummyData.collectionName,
      DummyData.docId
    );
    const newDoc = setDoc(document, DummyData.data);
    return res.status(200).json(newDoc);
  } catch (error) {
    return res.status(500);
  }
}
