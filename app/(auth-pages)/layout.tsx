export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto bg-darkmode h-screen flex flex-col items-center">
      {children}
    </div>
  );
}
