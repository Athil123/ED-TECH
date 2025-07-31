"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { GetVideoRecommendationsOutput, getVideoRecommendations } from '@/ai/flows/video-recommendation';
import Link from 'next/link';
import Image from 'next/image';
import { Wand2 } from 'lucide-react';

interface RecommendedVideosProps {
  currentVideo: {
    title: string;
    description: string;
    userInterests: string;
  };
}

export default function RecommendedVideos({ currentVideo }: RecommendedVideosProps) {
  const [recommendations, setRecommendations] = useState<GetVideoRecommendationsOutput | null>(null);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const result = await getVideoRecommendations({
          videoTitle: currentVideo.title,
          videoDescription: currentVideo.description,
          userInterests: currentVideo.userInterests,
        });
        setRecommendations(result);
      } catch (error) {
        console.error("Failed to get recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentVideo]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-accent" />
          Recommended For You
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations?.recommendedVideos.map((video) => (
              <Link href={`/videos/${video.videoId}`} key={video.videoId} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Image 
                    src={`https://placehold.co/128x128`}
                    alt={video.title}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                    data-ai-hint="learning education"
                   />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-tight">{video.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
