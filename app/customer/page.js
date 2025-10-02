"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Home() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  console.debug("API_BASE", API_BASE);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [customers, setCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  async function fetchCustomers() {
    const data = await fetch(`${API_BASE}/customer`);
    const c = await data.json();
    setCustomers(c);
  }

  const createOrUpdateCustomer = (data) => {
    if (editingId) {
      // Update existing customer
      fetch(`${API_BASE}/customer`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, _id: editingId }),
      }).then(() => {
        fetchCustomers();
        reset();
        setEditingId(null);
      });
    } else {
      // Create new customer
      fetch(`${API_BASE}/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        fetchCustomers();
        reset();
      });
    }
  };

  const editCustomer = (customer) => {
    setEditingId(customer._id);
    setValue("name", customer.name);
    setValue("dateOfBirth", customer.dateOfBirth.split('T')[0]);
    setValue("memberNumber", customer.memberNumber);
    setValue("interests", customer.interests);
  };

  const cancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const deleteById = (id) => async () => {
    if (!confirm("Are you sure?")) return;
    
    await fetch(`${API_BASE}/customer/${id}`, {
      method: "DELETE",
    });
    fetchCustomers();
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1 w-64 ">
        <form onSubmit={handleSubmit(createOrUpdateCustomer)}>
          <div className="grid grid-cols-2 gap-4 m-4 w-1/2">
            {editingId && (
              <div className="col-span-2 bg-yellow-100 p-2 rounded">
                <strong>Editing Customer</strong>
              </div>
            )}
            <div>Name:</div>
            <div>
              <input
                name="name"
                type="text"
                {...register("name", { required: true })}
                className="border border-black w-full"
              />
            </div>
            <div>Date of Birth:</div>
            <div>
              <input
                name="dateOfBirth"
                type="date"
                {...register("dateOfBirth", { required: true })}
                className="border border-black w-full"
              />
            </div>
            <div>Member Number:</div>
            <div>
              <input
                name="memberNumber"
                type="number"
                {...register("memberNumber", { required: true })}
                className="border border-black w-full"
              />
            </div>
            <div>Interests:</div>
            <div>
              <input
                name="interests"
                type="text"
                {...register("interests", { required: true })}
                className="border border-black w-full"
                placeholder="e.g., movies, football, gym, gaming"
              />
            </div>
            <div className="col-span-2 flex gap-2">
              <input
                type="submit"
                value={editingId ? "Update" : "Add"}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              />
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="border m-4 bg-slate-300 flex-1 w-64">
        <h1 className="text-2xl">Customers ({customers.length})</h1>
        <ul className="list-disc ml-8">
          {
            customers.map((c) => (
              <li key={c._id}>
                <button className="border border-black p-1/2" onClick={deleteById(c._id)}>❌</button>{' '}
                <button className="border border-black p-1/2" onClick={() => editCustomer(c)}>✏️</button>{' '}
                <Link href={`/customer/${c._id}`} className="font-bold">
                  {c.name}
                </Link>{" "}
                - Member #{c.memberNumber} - {c.interests}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}