import { NextRequest, NextResponse } from 'next/server';

/**
 * A proxy endpoint for fetching images from external sources
 * This helps avoid CORS issues and hydration errors
 */
export async function GET(request: NextRequest) {
  // Get the URL from the query parameter
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    console.log(`Proxy fetching image from: ${url}`);
    
    // Fetch the image with a longer timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'image/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      signal: controller.signal,
      cache: 'force-cache', // Use cache if possible
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Failed to fetch image from ${url}: ${response.status} ${response.statusText}`);
      // Return a fallback image instead of error
      return NextResponse.redirect(new URL('/placeholder.svg', request.nextUrl.origin));
    }

    // Get the image buffer
    const imageBuffer = await response.arrayBuffer();
    
    // Get the content type from the response
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    console.log(`Successfully proxied image from ${url}, content-type: ${contentType}, size: ${imageBuffer.byteLength} bytes`);
    
    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      }
    });
  } catch (error) {
    console.error('Error proxying image:', error, 'URL:', url);
    // Redirect to a placeholder instead of returning an error
    return NextResponse.redirect(new URL('/placeholder.svg', request.nextUrl.origin));
  }
} 