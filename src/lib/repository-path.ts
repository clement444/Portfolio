export function readRepositoryPath(repositoryUrl: string): string {
  const parsedUrl = new URL(repositoryUrl);
  const pathWithoutSlash = parsedUrl.pathname.replace(/^\//, '');

  return `${parsedUrl.hostname}/${pathWithoutSlash}`;
}
