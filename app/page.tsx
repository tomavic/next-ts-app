import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <h1>Hola </h1>
      <p>I am Hatem</p>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </>
  );
}
