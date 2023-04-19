import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import keys from "./key.json";
import { apps } from "firebase-admin";
import admin from "firebase-admin";

if (apps.length) {
  initializeApp({
    credential: cert(keys),
  });
}

const db = getFirestore();
export { admin };
export default db;
