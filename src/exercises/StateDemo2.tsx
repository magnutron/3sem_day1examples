import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const defaultUser = {
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  };

  const [user, setUser] = useState<User>(defaultUser);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    // Laver en klon af af user objektet og overskriver name med den nye værdi
    setUser((prev) => ({ ...prev, name: e.target.value }));
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name: <input name="name" value={user.name} onChange={handleNameChange} />
      Email: <input name="email" value={user.email} onChange={handleNameChange} />
      Active: <input type="checkbox" checked={user.isActive} name="isActive" />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}
