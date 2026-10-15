interface RateLimitEntry {
  requestCount: number;
  expiresAt: number;
}

const WINDOW_IN_MILLISECONDS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

const entriesByClient = new Map<string, RateLimitEntry>();

function removeExpiredEntries(now: number): void {
  for (const [client, entry] of entriesByClient) {
    if (entry.expiresAt <= now) {
      entriesByClient.delete(client);
    }
  }
}

export function isRateLimited(clientKey: string): boolean {
  const now = Date.now();

  removeExpiredEntries(now);

  const entry = entriesByClient.get(clientKey);

  if (!entry) {
    entriesByClient.set(clientKey, {
      requestCount: 1,
      expiresAt: now + WINDOW_IN_MILLISECONDS,
    });

    return false;
  }

  if (entry.requestCount >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.requestCount = entry.requestCount + 1;

  return false;
}
