# Wikipedia City Info Supabase Edge Function

This Edge Function fetches city information from Wikipedia for use in the SweatyJob website.

## Deployment Instructions

1. Make sure you have the Supabase CLI installed:
   \`\`\`bash
   npm install -g supabase
   \`\`\`

2. Login to your Supabase account:
   \`\`\`bash
   supabase login
   \`\`\`

3. Link your project (if not already linked):
   \`\`\`bash
   supabase link --project-ref your-project-ref
   \`\`\`

4. Deploy the function:
   \`\`\`bash
   supabase functions deploy get-city-info --no-verify-jwt
   \`\`\`

## Usage

The function accepts a POST request with a JSON body containing:

\`\`\`json
{
  "city": "Richmond",
  "state": "Virginia"
}
\`\`\`

It returns Wikipedia information about the city, including:
- Title
- Extract (summary)
- Thumbnail image (if available)
- Description
- Coordinates (if available)

## Error Handling

The function will return appropriate error responses if:
- Required parameters are missing
- No Wikipedia information is found for the city
- There's an error fetching the data

## Security

This function is deployed with `--no-verify-jwt` to allow public access. If you need to restrict access, remove this flag and implement proper authentication.
