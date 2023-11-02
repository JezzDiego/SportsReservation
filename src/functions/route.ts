import { APP_ROUTES } from "@/constants/app-routes";

/**
 * Checks if a given route is a public route.
 * @param route - The route to check.
 * @returns True if the route is public, false otherwise.
 */
export const isPublicRoute = (route: string) => {
  return Object.values(APP_ROUTES.public).includes(route);
};
