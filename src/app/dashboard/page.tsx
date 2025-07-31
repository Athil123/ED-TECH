import AppLayout from "@/components/shared/AppLayout";
import VideoCard from "@/components/dashboard/VideoCard";
import { BookOpenCheck } from "lucide-react";

// Mock data for demonstration
const mockVideos = [
  { id: '1', title: 'Introduction to Algebra', description: 'Learn the basics of algebraic expressions.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'math textbook' },
  { id: '2', title: 'The Cell Cycle', description: 'An overview of mitosis and meiosis.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'biology microscope' },
  { id: '3', title: 'Writing Your First Essay', description: 'From brainstorming to final draft.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'writing notebook' },
  { id: '4', title: 'Basics of Python Programming', description: 'Get started with the Python language.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'code editor' },
  { id: '5', title: 'World War II: A Brief History', description: 'Key events and figures of the war.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'history map' },
  { id: '6', title: 'Understanding Chemical Bonds', description: 'Ionic, covalent, and metallic bonds.', thumbnail: 'https://placehold.co/600x400', dataAiHint: 'chemistry beakers' },
];

function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-headline flex items-center gap-2">
          <BookOpenCheck className="h-8 w-8 text-accent" />
          Your Courses
        </h1>
        <p className="mt-2 text-muted-foreground">
          Continue your learning journey. Select a video to get started.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
    return (
        <AppLayout>
            <Dashboard />
        </AppLayout>
    );
}
