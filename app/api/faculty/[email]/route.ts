import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    // Check if params is available
    if (!params || !params.email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const email = params.email;
    
    // Server-side request doesn't have CORS issues
    const response = await fetch(
      `https://old.iiitdm.ac.in/api/faculty.php?email=${encodeURIComponent(email)}`,
      {
        cache: 'no-store', // Don't cache to ensure fresh data
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        // Add a timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000)
      }
    );

    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Verify we have proper data structure
    if (!data.status || !data.facinfo || !Array.isArray(data.facinfo) || data.facinfo.length === 0) {
      throw new Error('Invalid or empty data returned from external API');
    }

    // Process the image URLs in the response
    if (data.facinfo[0] && data.facinfo[0].image) {
      // Keep the image filename only and let the frontend construct the full URL
      // This helps avoid CORS issues when loading images
      const imageName = data.facinfo[0].image;
      data.facinfo[0].image = imageName;
    }

    // Process localimg field as well
    if (data.facinfo[0] && data.facinfo[0].localimg) {
      const imageName = data.facinfo[0].localimg;
      // Ensure it's just the filename without any path
      data.facinfo[0].localimg = imageName;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching faculty details:`, error);
    
    // Provide a detailed error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch faculty details',
        message: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}