import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      { name: form.name, surname: form.surname },
    ]);
    setForm({
      name: "",
      surname: "",
    });
  };
  
  return (
    <>
      <p style={{ fontWeight: "bold" }}>Contact List App</p>
    
      <p>Name</p>
      <input name="name" value={form.name} onChange={handleChange} />
      <p>Sur Name</p>
      <input name="surname" value={form.surname} onChange={handleChange} />
      <br></br>
      <button style={{ margin: "20px" }} onClick={handleSubmit}>
        Add
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table>
          {users.map((user, index) => (
            <tr key={index}>
              {user.name} {user.surname}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Contact;
