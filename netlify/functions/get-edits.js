export const handler = async () => {
  const keys = Object.keys(process.env).sort();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body: JSON.stringify({
      testVar: process.env.TESTVAR || null,
      bookBlobsSiteId: process.env.BOOK_BLOBS_SITE_ID || null,
      bookBlobsTokenPresente: Boolean(process.env.BOOK_BLOBS_TOKEN),
      totalVariaveisDeAmbiente: keys.length,
      algumasChaves: keys.slice(0, 20)
    })
  };
};
