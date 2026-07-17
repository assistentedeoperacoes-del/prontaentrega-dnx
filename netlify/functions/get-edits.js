import { getStore } from '@netlify/blobs';

function getBookStore() {
  const siteID = process.env.BOOK_BLOBS_SITE_ID;
  const token = process.env.BOOK_BLOBS_TOKEN;
  if (siteID && token) {
    return getStore({ name: 'book-pronta-entrega', siteID, token });
  }
  return getStore('book-pronta-entrega');
}

export const handler = async () => {
  try {
    const store = getBookStore();
    const raw = await store.get('state', { type: 'json' });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(raw || { edits: {}, manualProducts: [] })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: String(err) })
    };
  }
};
