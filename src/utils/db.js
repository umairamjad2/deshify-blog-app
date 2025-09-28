// import mongoose from "mongoose";

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//   } catch (error) {
//     throw new Error("Connection Failed!");
//   }
// };

// export default connect;

import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connections[0].readyState) return; // avoid multiple connections
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Connection Failed!", error);
    throw new Error("Connection Failed!");
  }
};

export default connect;

// NEXTAUTH_URL=http://localhost:3000
