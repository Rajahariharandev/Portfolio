import { Terminal, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[80vh] py-24 bg-radial-gradient">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-950/70 border border-violet-800/60 text-violet-400">
            <Terminal className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-sm text-violet-400 font-semibold tracking-wider">
              ERROR 404 // RESOURCE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F4F7]">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#9E9EB4] max-w-md mx-auto">
              The requested endpoint or document does not exist in this backend service. It may have been relocated or decommissioned.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Return to Home
            </Button>
            <Button
              href="/#contact"
              variant="secondary"
              size="md"
            >
              Report Broken Link
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
