// import { useState, useEffect } from "react";
// import useFirebase from "./useFirebase";

// const firebase = useFirebase();

// const getData = (collection) => {
//   const [data, setData] = useState([]);

//   const get = async () => {
//     try {
//       await firebase
//         .database()
//         .ref(collection)
//         .on("value", (documents) => {
//           let fetchedUsers = [];
//           documents.forEach((child) => {
//             fetchedUsers.push({ ...child.val() });
//           });
//           setData(fetchedUsers);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     get();
//   }, []);
//   return data;
// };

// const putData = (collection, data) => {
//   firebase
//     .database()
//     .ref(collection + "/" + data.id)
//     .set(data);
// };

// export { getData, putData };
