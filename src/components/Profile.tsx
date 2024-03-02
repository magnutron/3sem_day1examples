type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
  if (singleLine) {
    return (
      <p>
        {name},{email},{isActive ? "Active" : "Inactive"}
      </p>
    );
  }
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </>
  );
}
