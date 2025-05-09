export async function GET() {
  // This endpoint should only be used for server-side operations
  // We're not actually returning the token to the client
  return new Response(
    JSON.stringify({
      message: "This endpoint is for server-side operations only",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
