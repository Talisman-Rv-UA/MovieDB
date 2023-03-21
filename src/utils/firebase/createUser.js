import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./config.js";

const auth = getAuth(app);

export const createUser = async (email, password, name) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(user, { displayName: name });
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
};
