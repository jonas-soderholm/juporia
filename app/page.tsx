// interface Post {
//   id: string;
//   title: string;
//   content: string;
// }

// export default async function Index() {
//   let data = await fetch("http://localhost:3000/api/hello");
//   let content: Post[] = await data.json();

//   return (
//     <ul>
//       {content.map((post: Post) => (
//         <li key={post.id}>{post.content}</li>
//       ))}
//     </ul>
//   );
// }
