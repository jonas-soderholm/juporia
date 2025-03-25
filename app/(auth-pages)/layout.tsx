export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto h-screen flex flex-col items-center pt-10 px-2">
      {/* Add BreadCrumbs */}
      {children}
    </div>
  );
}
