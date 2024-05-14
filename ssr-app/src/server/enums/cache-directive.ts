export enum CacheDirective {
  NoCache = "no-cache",

  PublicMustRevalidate = "public, must-revalidate, max-age=0",
  PublicOneYear = "public, max-age=31536000",
}