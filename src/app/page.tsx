import Header from "@/components/Header";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <h1 className="text-blue-700">Home</h1>
    </RootLayout>
  );
}
