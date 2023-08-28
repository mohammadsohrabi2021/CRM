import HomePage from "@/components/template/HomePage";
import Customer from "@/models/Customer";
import coonectDB from "@/utils/coonectDB";

export default function Home({customers}) {
  return <HomePage customers={customers}/>;
}
export async function getServerSideProps() {
  try {
    await coonectDB();
    const customers = await Customer.find()
    return{
      props:{
        customers:JSON.parse(JSON.stringify(customers))
      }
    }

  } catch (err) {
    return {
      notFound: true,
    };
  }
}
