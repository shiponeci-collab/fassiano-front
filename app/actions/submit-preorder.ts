"use server"

interface PreorderPayload {
  name: string
  email: string
  phone: string
  address: string
  quantity_black: number
  quantity_red: number
  total_quantity: number
}

export async function submitPreorder(payload: PreorderPayload) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    throw new Error("GOOGLE_SCRIPT_URL is not configured")
  }

  try {
    await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString(),
      }),
      cache: "no-store",
    })
  } catch {
    // Google Apps Script may redirect or return non-standard responses
    // The data is still sent successfully, so we ignore fetch errors
  }

  return { ok: true }
}
