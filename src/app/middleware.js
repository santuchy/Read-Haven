import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Redirect users to this page if they are not signed in
  pages: {
    signIn: "/login",
  },
});

// Only apply middleware to protected routes
export const config = {
  matcher: ["/dashboard/:path*"], // any route under /dashboard
};
