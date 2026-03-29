export async function onRequest(context) {
  const vaultUrl = context.env.VAULT_URL;

  if (!vaultUrl) {
    return new Response(
      JSON.stringify({ error: 'Vault URL not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ url: vaultUrl }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
