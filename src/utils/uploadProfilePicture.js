// src/utils/uploadProfilePicture.js
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase"; // 👈 make sure your firebase.js exports storage

/**
 * Uploads an image file to Firebase Storage and returns the public URL
 * @param {File} file - The image file selected by the user
 * @returns {Promise<string>} - The download URL of the uploaded image
 */
export const uploadProfilePicture = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file selected");

    // 👇 Create a storage reference (organized by folder and timestamp)
    const fileRef = ref(storage, `profilePictures/${Date.now()}-${file.name}`);

    // 👇 Use resumable upload to track progress (future-proof)
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optional: You can log upload progress here
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Firebase upload error:", error);
        reject(error);
      },
      async () => {
        try {
          // ✅ Get download URL after upload finishes
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
};
