import Hero from "@/components/hero/hero";

// interface UserInterface {
//   id: number;
//   f_name: string;
//   l_name: string;
// }

// export default async function Index() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const users: UserInterface[] = await res.json();
//   console.log("Fetched data:", users);
//   return (
//     <ul>
//       Hello
//       {users.map((item: UserInterface) => (
//         <li key={item.id}>
//           {item.f_name} {item.l_name}
//         </li>
//       ))}
//     </ul>
//   );
// }

// interface SpaceData {
//   people: Person[];
//   number: number;
//   message: string;
// }

// interface Person {
//   name: string;
//   craft: string;
// }

// export default async function SpacePeople() {
//   const res = await fetch("http://api.open-notify.org/astros.json");
//   const data: SpaceData = await res.json();

//   return (
//     <div>
//       {data.people.map((person: Person) => (
//         <div key={person.name}>{person.name}</div>
//       ))}
//     </div>
//   );
// }

export default function LandingPage() {
  return (
    <>
      <Hero />
    </>
  );
}
