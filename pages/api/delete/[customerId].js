import Customer from "@/models/Customer";
import coonectDB from "@/utils/coonectDB";

export default async function handler(req, res) {
  try {
    await coonectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({status:'faild',massege:"Error in connecting to dataBase"})
    return;
  }
  if (req.method==="DELETE") {
    const id= req.query.customerId
    try {
        await Customer.deleteOne({ _id: id });
        res.status(200).json({ status: "success", message: "Data deleted" });
      } catch (err) {
        console.log(err.message);
        res.status(500).json({
          status: "failed",
          message: "Error in deleting data from database",
        });
      }
  }
}
