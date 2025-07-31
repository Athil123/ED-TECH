"use client";

import { Clapperboard } from "lucide-react";
import OtpForm from "@/components/auth/OtpForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/shared/Loading";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || (!loading && user)) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Clapperboard className="h-16 w-16 text-accent" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground font-headline">
            Welcome to LearnMobile
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Sign in with your mobile number to continue.
          </p>
        </div>
        <OtpForm />
      </div>
    </div>
  );
}
