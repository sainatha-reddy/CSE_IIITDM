import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// This is a backup API that returns local mock data when the main API fails
export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  
  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Try to find a local mock file for this email
    // The file will be named after the email (e.g., "amalan@iiitdm.ac.in.json")
    const mockFilePath = path.join(process.cwd(), 'data', 'faculty', `${email.replace('@', '_at_')}.json`);
    
    // Check if mock file exists
    if (fs.existsSync(mockFilePath)) {
      const fileContent = fs.readFileSync(mockFilePath, 'utf8');
      const mockData = JSON.parse(fileContent);
      return NextResponse.json(mockData);
    }
    
    // If no mock file exists, return a generic faculty structure
    return NextResponse.json({
      status: true,
      facinfo: [{
        email: email,
        name: email.split('@')[0].replace('.', ' ').replace('_', ' '),
        nickname: '',
        image: '/placeholder.svg',
        desig: 'Faculty',
        research_interest: '',
        personal_interest: '',
        dschoolName: '',
        dschoolPlace: '',
        dschoolBoard: '',
        mschoolName: '',
        mschoolPlace: '',
        mschoolBoard: '',
        bschoolName: '',
        bschoolPlace: '',
        bschoolBoard: '',
        workName1: '',
        workName2: '',
        workName3: '',
        schoolName: '',
        schoolBoard: '',
        schoolName1: '',
        pubCite3: '',
        pubCite4: '',
        InvitedTalks: '',
      }]
    });
  } catch (error) {
    console.error(`Error fetching backup faculty details for ${email}:`, error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch backup faculty details',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}