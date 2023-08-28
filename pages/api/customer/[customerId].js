import Customer from "@/models/Customer";
import coonectDB from "@/utils/coonectDB";

export default async function handler(req, res) {
    try {
        await coonectDB();
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "Error in connecting to database" });
      return;
    }
  
    if (req.method === "GET") {
      const id = req.query.customerId;
      try {
        const customer = await Customer.findOne({ _id: id });
        res.status(200).json({ status: "success", data: customer });
      } catch (err) {
        console.log(err.message);
        res.status(500).json({
          status: "failed",
          message: "Error in retrieving data from database",
        });
      }
    }
  }
  