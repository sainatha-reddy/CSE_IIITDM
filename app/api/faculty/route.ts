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
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching faculty data:', error);
    return NextResponse.json({ error: 'Failed to fetch faculty data' }, { status: 500 });
  }
} 