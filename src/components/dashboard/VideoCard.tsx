import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  dataAiHint?: string;
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/videos/${video.id}`} className="block">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={video.dataAiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-bold font-headline leading-tight">
          <Link href={`/videos/${video.id}`} className="hover:text-accent">
            {video.title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          {video.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/videos/${video.id}`}>
            Watch Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
