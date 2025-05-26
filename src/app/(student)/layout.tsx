import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col px-[16px]">
      <Theme>{children}</Theme>
    </div>
  );
}
