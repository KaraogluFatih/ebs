export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center">{children}</div>;
}
