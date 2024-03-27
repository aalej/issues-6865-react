import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import * as React from "react";

import firebase from "firebase/compat/app";

import { getStorage, connectStorageEmulator } from "firebase/storage";
const firebaseConfig = {
  apiKey: "fake-api-key",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  appId: "1:012345678911:web:e0d5f4a8391e9475378d82",
};

let firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}
export const storage = getStorage(firebaseApp);

const isDevelopment =
  process.env.NODE_ENV === "development" ||
  process.env.FUNCTIONS_EMULATOR === "true";

connectStorageEmulator(storage, "localhost", 9199);
import CreateTest from "./create";
export const App = () => (
  <Admin>
    <Resource
      name="firebase"
      list={ListGuesser}
      create={CreateTest}
      show={ShowGuesser}
    />
  </Admin>
);
