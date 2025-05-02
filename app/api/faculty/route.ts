import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://mis.iiitdm.ac.in/api/faculty.php');
    if (!response.ok) {
      throw new Error('Failed to fetch faculty data');
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
  } catch (error) {
    console.error('Error fetching faculty data:', error);
    return NextResponse.json({ error: 'Failed to fetch faculty data' }, { status: 500 });
  }
}