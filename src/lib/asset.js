// Prefix a /public path with the deploy base path so it resolves from any route.
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
