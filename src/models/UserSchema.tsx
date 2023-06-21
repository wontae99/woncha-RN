// import { BSON } from "realm";

// type Content = {
//   id: string;
//   type: "movie" | "tv";
// };

// export class User extends Realm.Object<User> {
//   _id!: BSON.ObjectId;
//   name!: string;
//   email!: string;
//   password!: string;
//   image?: string;
//   registerDate!: string;
//   wishList?: Content[];

//   static schema: Realm.ObjectSchema = {
//     name: "User",
//     primaryKey: "_id",
//     properties: {
//       // This allows us to automatically generate a unique _id for each Item
//       _id: { type: "objectId", default: () => new BSON.ObjectID() },
//       name: "string",
//       email: "string",
//       password: "string",
//       registerDate: "string",
//       image: "string?",
//       wishList: "array?",
//     },
//   };
// }
