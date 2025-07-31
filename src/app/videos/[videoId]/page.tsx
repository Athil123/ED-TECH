import AppLayout from "@/components/shared/AppLayout";
import VideoPlayerWrapper from "@/components/video/VideoPlayerWrapper";

export default function VideoPage({ params }: { params: { videoId: string } }) {
  return (
    <AppLayout>
      <VideoPlayerWrapper videoId={params.videoId} />
    </AppLayout>
  );
}
