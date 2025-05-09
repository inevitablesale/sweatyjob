/**
 * Utility for enhanced Supabase query logging
 */

type QueryType = "SELECT" | "INSERT" | "UPDATE" | "DELETE" | "FUNCTION" | "OTHER"

interface LogOptions {
  queryType: QueryType
  table?: string
  filters?: Record<string, any>
  additionalInfo?: string
}

export const logSupabaseQuery = (options: LogOptions) => {
  const { queryType, table, filters, additionalInfo } = options

  const timestamp = new Date().toISOString()
  const tableInfo = table ? `Table: ${table}` : ""
  const filterInfo = filters ? `Filters: ${JSON.stringify(filters)}` : ""
  const additionalText = additionalInfo || ""

  console.log(`
🔵 SUPABASE ${queryType} - ${timestamp}
${tableInfo}
${filterInfo}
${additionalText}
  `)

  // Return a unique ID to use for ending the log
  const logId = Math.random().toString(36).substring(2, 9)
  return logId
}

export const logSupabaseResponse = (logId: string, success: boolean, data: any) => {
  if (success) {
    console.log(`
🟢 SUPABASE SUCCESS - Log ID: ${logId}
Results: ${typeof data === "object" ? JSON.stringify(data, null, 2) : data}
    `)
  } else {
    console.error(`
🔴 SUPABASE ERROR - Log ID: ${logId}
Error: ${typeof data === "object" ? JSON.stringify(data, null, 2) : data}
    `)
  }
}

export const createSupabaseLogger = () => {
  return {
    logQuery: logSupabaseQuery,
    logResponse: logSupabaseResponse,
  }
}
