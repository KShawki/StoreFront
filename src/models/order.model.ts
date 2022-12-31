import Order from "../types/order.type";
import db from "../database";

// ORDER:
// - Current Order by user (args: user id)[token required]
// - [OPTIONAL] Completed Orders by user (args: user id)[token required]

// class OrderModel {
//   async create(userId: string): Promise<Order> {
//     try {
//       // connect with db;
//       const connection = await db.connect();
//       const sql = `INSERT `

//     } catch (error) {
//       throw error;
//     }
//   }
// }
