import "./Tampilan5.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Table from "../../components/table/Table";

function Tampilan5() {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // console.log(response.data);
    const users = response.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
      };
    });
    setData(users);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const createUser = async (name, email, website) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name,
        email,
        website,
      }
    );

    // console.log(response.data);

    const updatedData = [...data, response.data];
    setData(updatedData);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const updatedData = data.filter((user) => {
      return user.id !== id;
    });

    setData(updatedData);
  };

  const updateUser = async ({ id, name, email, website }) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        id,
        name,
        email,
        website,
      }
    );

    const updatedData = data.filter((user) => {
      if (user.id === id) {
        return { ...user, ...response.data };
      }

      return user;
    });

    setData(updatedData);
  };

  return (
    <div>
      <Table
        data={data}
        onCreate={createUser}
        onDelete={deleteUser}
        onUpdate={updateUser}
      />
    </div>
  );
}

export default Tampilan5;
