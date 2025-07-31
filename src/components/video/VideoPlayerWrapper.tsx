"use client";

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import RecommendedVideos from './RecommendedVideos';

// Mock data - in a real app, this would be fetched from Firestore
const mockVideos = {
  '1': { id: '1', title: 'Introduction to Algebra', description: 'This video covers the fundamentals of algebra, including variables, expressions, and equations. A great starting point for anyone new to the subject.', videoUrl: '/placeholder.mp4', userInterests: 'math algebra beginning' },
  '2': { id: '2', title: 'The Cell Cycle', description: 'Explore the fascinating process of cell division, including detailed explanations of mitosis and meiosis.', videoUrl: '/placeholder.mp4', userInterests: 'biology science cells' },
  '3': { id: '3', title: 'Writing Your First Essay', description: 'Learn the essential steps to crafting a compelling essay, from brainstorming ideas to polishing your final draft.', videoUrl: '/placeholder.mp4', userInterests: 'writing english literature' },
  '4': { id: '4', title: 'Basics of Python Programming', description: 'An introduction to the Python programming language, perfect for beginners with no prior coding experience.', videoUrl: '/placeholder.mp4', userInterests: 'programming code python' },
  '5': { id: '5', title: 'World War II: A Brief History', description: 'This lesson provides a concise overview of the major events, key figures, and lasting impact of World War II.', videoUrl: '/placeholder.mp4', userInterests: 'history war europe' },
  '6': { id: '6', title: 'Understanding Chemical Bonds', description: 'Delve into the world of chemistry by learning about ionic, covalent, and metallic bonds, the forces that hold atoms together.', videoUrl: '/placeholder.mp4', userInterests: 'chemistry science atoms' },
};

type VideoData = typeof mockVideos[keyof typeof mockVideos];

export default function VideoPlayerWrapper({ videoId }: { videoId: string }) {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching video data
    setLoading(true);
    setTimeout(() => {
      setVideo(mockVideos[videoId as keyof typeof mockVideos] || null);
      setLoading(false);
    }, 500);
  }, [videoId]);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="w-full h-[55vh]" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (!video) {
    return <div>Video not found.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="aspect-video overflow-hidden rounded-lg shadow-xl bg-black">
          <video
            className="w-full h-full"
            controls
            src={video.videoUrl} // In a real app, use a signed URL from Firebase Storage
            poster={`https://placehold.co/1280x720`}
            data-ai-hint="video lesson"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold font-headline">{video.title}</h1>
          <p className="mt-2 text-muted-foreground">{video.description}</p>
        </div>
      </div>
      <div>
        <RecommendedVideos currentVideo={video} />
      </div>
    </div>
  );
}
