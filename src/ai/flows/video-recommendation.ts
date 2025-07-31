// Implemented video recommendation genkit flow.

'use server';

/**
 * @fileOverview Recommends relevant videos from other playlists based on videos already watched.
 *
 * - getVideoRecommendations - A function that recommends videos based on the content watched by a user.
 * - GetVideoRecommendationsInput - The input type for the getVideoRecommendations function.
 * - GetVideoRecommendationsOutput - The return type for the getVideoRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetVideoRecommendationsInputSchema = z.object({
  videoTitle: z.string().describe('The title of the video the user just watched.'),
  videoDescription: z.string().describe('The description of the video the user just watched.'),
  userInterests: z.string().describe('The known interests of the user.'),
});
export type GetVideoRecommendationsInput = z.infer<typeof GetVideoRecommendationsInputSchema>;

const GetVideoRecommendationsOutputSchema = z.object({
  recommendedVideos: z.array(
    z.object({
      title: z.string().describe('The title of the recommended video.'),
      description: z.string().describe('A brief description of the recommended video.'),
      videoId: z.string().describe('The id of the recommended video.'),
    })
  ).describe('A list of recommended videos based on the content watched.'),
});
export type GetVideoRecommendationsOutput = z.infer<typeof GetVideoRecommendationsOutputSchema>;

export async function getVideoRecommendations(input: GetVideoRecommendationsInput): Promise<GetVideoRecommendationsOutput> {
  return videoRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'videoRecommendationPrompt',
  input: {schema: GetVideoRecommendationsInputSchema},
  output: {schema: GetVideoRecommendationsOutputSchema},
  prompt: `You are an AI video recommendation system. You are given a video title, a video description and the interests of a student.

  Based on these, choose three videos from our catalog to suggest to the student. 

  Video Title: {{{videoTitle}}}
  Video Description: {{{videoDescription}}}
  Student Interests: {{{userInterests}}}
  
  Return the videos in JSON format.
  `,
});

const videoRecommendationFlow = ai.defineFlow(
  {
    name: 'videoRecommendationFlow',
    inputSchema: GetVideoRecommendationsInputSchema,
    outputSchema: GetVideoRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
