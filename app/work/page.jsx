import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Work() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center p-4 sm:p-8 gap-10">
        <h1>Soon I upload my projects and works</h1>
        <div>
          <h1>For now, see my work here</h1>
          <Link className="flex justify-center" href="https://github.com/rupesh-dev30" target="_blank">
            <Button className="mt-3">Github</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
