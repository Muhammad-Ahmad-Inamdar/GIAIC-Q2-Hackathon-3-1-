import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes using createRouteMatcher
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/CarDetails/(.*)",
  "/DetailCars/(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return;
  }

  // Await auth() to get authentication status
  const { userId, redirectToSignIn } = await auth();

  // If user is not signed in, redirect them to the sign-in page
  if (!userId) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
