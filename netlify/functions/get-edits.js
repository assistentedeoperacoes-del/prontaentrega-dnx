const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const store = getStore('book-pronta-entrega');
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
