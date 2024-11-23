export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="w-full flex h-full justify-center "
        >
        <div className="   w-full">
        {children}
        </div>
        
        </div>
      );
    }
    