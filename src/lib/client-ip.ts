export function readClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for');

  if (forwardedFor) {
    const firstAddress = forwardedFor.split(',')[0];

    if (firstAddress) {
      return firstAddress.trim();
    }
  }

  const realIp = headers.get('x-real-ip');

  if (realIp) {
    return realIp.trim();
  }

  return 'inconnu';
}
