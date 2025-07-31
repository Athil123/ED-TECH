# **App Name**: LearnMobile

## Core Features:

- OTP Authentication: User registration/login via OTP mobile number verification. Use Firebase Authentication to authenticate users using their mobile phone number and OTP verification.
- Personalized Dashboard: Dashboard view for each student with personalized content.
- Video Assignment: Video content management system linking users to educational videos stored in Firebase Storage via Firestore metadata.
- Video Listing: List available videos for the logged-in user, showing titles and thumbnails.
- Video Playback: Video playback functionality using HTML5 video player, allowing students to watch assigned content directly in the app. Can also suggest to students videos from other playlists using generative ai to choose videos most relevant to content already watched. LLM acts as a 'tool'.
- Route Protection: Route protection: Implement authentication checks to ensure that only logged-in users can access the video playback page.
- Improved UX: Loading states and error handling implemented across the app for a better UX.
- Admin Page: Admin page for managing content, users, and video assignments.

## Style Guidelines:

- Primary color: A gentle blue (#64B5F6) to instill trust and calmness.
- Background color: A very light blue (#E3F2FD) for a clean and distraction-free backdrop.
- Accent color: A vibrant orange (#FFB74D) to draw attention to calls-to-action, especially CTAs.
- Body and headline font: 'PT Sans', sans-serif, to create a modern, clear, and accessible style.
- Simple, geometric icons to represent course categories.
- Mobile-responsive design using CSS Flexbox and/or Grid.
- Smooth transitions on navigation and video loading.