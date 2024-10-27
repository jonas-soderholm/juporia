import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col ">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <div className="py-16">Welcome {user.email}</div>
      </div>
      <div className="flex flex-col  items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// interface SupabaseData {
//   id: number;
//   f_name: string;
//   l_name: string;
// }

// export default async function ProtectedPage() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const content: SupabaseData[] = await res.json();

//   return (
//     <ul>
//       Hello
//       {content.map((item: SupabaseData) => (
//         <li key={item.id}>
//           {item.f_name} {item.l_name}
//         </li>
//       ))}
//     </ul>
//   );
// }
