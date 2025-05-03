import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  try {
    if (email) {
      // Fetch individual faculty data
      const response = await fetch(`https://old.iiitdm.ac.in/api/faculty.php?email=${encodeURIComponent(email)}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      // Fetch all faculty data and filter for COE stream
      const response = await fetch('https://old.iiitdm.ac.in/api/faculty.php', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Filter faculty data for COE stream only
      if (data.faculty && Array.isArray(data.faculty)) {
        data.faculty = data.faculty.filter((faculty: any) => 
          faculty.stream && faculty.stream.toUpperCase() === 'COE'
        );
      }
      
      // Process image URLs before returning the response
      const processedFaculty = data.faculty.map((faculty: any) => {
        // Return faculty data with processed image URLs
        return {
          ...faculty,
          // Don't modify original data, just add an additional field for frontend use
          imageUrl: faculty.localimg 
            ? `https://old.iiitdm.ac.in/img/faculty/${faculty.localimg}`
            : faculty.pic && faculty.pic !== 'null' 
              ? faculty.pic 
              : null
        };
      });
      
      return NextResponse.json({
        status: true,
        faculty: processedFaculty
      });
    }
  } catch (error) {
    console.error('Error fetching faculty data:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch faculty data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}