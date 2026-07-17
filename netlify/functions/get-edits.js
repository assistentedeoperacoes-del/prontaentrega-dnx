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
  const siteID = process.env.BOOK_BLOBS_SITE_ID;
  const token = process.env.BOOK_BLOBS_TOKEN;

  // Modo de diagnostico: mostra se as variaveis de ambiente estao chegando
  // na funcao, sem revelar o valor completo do token.
  const diag = {
    siteIDPresente: Boolean(siteID),
    siteIDValor: siteID || null,
    tokenPresente: Boolean(token),
    tokenComeco: token ? token.slice(0, 6) + '...' : null
  };

  try {
    const store = getBookStore();
    const raw = await store.get('state', { type: 'json' });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ ok: true, diag, data: raw || { edits: {}, manualProducts: [] } })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: String(err), diag })
    };
  }
};
