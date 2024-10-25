interface UserInterface {
  id: number;
  f_name: string;
  l_name: string;
}

export default async function Index() {
  const res = await fetch("http://localhost:3000/api/hello");
  const users: UserInterface[] = await res.json();
  console.log("Fetched data:", users);
  return (
    <ul>
      Hello
      {users.map((item: UserInterface) => (
        <li key={item.id}>
          {item.f_name} {item.l_name}
        </li>
      ))}
    </ul>
  );
}
