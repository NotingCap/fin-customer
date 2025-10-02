import Customer from "@/models/Customer";
import dbConnect from "@/lib/db";
import Link from "next/link";

export default async function CustomerDetail({ params }) {
  await dbConnect();
  const customer = await Customer.findById(params.id).lean();
  
  // Convert MongoDB document to plain object and format date
  const dateOfBirth = new Date(customer.dateOfBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="max-w-2xl mx-auto m-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <Link
          href="/customer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Back to Customer List
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Customer Details</h1>
      
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="text-sm font-semibold text-gray-600 uppercase">Name</label>
          <p className="text-2xl font-bold text-blue-800 mt-1">{customer.name}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="text-sm font-semibold text-gray-600 uppercase">Date of Birth</label>
          <p className="text-lg text-gray-800 mt-1">{dateOfBirth}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="text-sm font-semibold text-gray-600 uppercase">Member Number</label>
          <p className="text-lg text-gray-800 mt-1">#{customer.memberNumber}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="text-sm font-semibold text-gray-600 uppercase">Interests</label>
          <p className="text-lg text-gray-800 mt-1">{customer.interests}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="text-sm font-semibold text-gray-600 uppercase">Customer ID</label>
          <p className="text-sm text-gray-600 mt-1 font-mono">{customer._id.toString()}</p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t flex gap-4">
        <Link
          href="/customer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}