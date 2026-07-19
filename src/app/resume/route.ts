const RESUME_PDF_URL =
  "https://docs.google.com/document/d/1bTBTykjBiSuxXEdWUXOVnuECzvLBVuNUId8naW3qLuA/export?format=pdf";

export async function GET() {
  try {
    const response = await fetch(RESUME_PDF_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Google Docs returned ${response.status}`);
    }

    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Javier-Cisneros-Resume.pdf"',
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("The resume is temporarily unavailable.", { status: 502 });
  }
}
