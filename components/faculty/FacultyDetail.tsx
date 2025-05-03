import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Briefcase, GraduationCap, BookOpen, Award, Mail, 
  Phone, MapPin, Globe, Linkedin, Github, FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import FacultyImage from "./FacultyImage"

interface FacultyDetailProps {
  faculty: any
}

// Define interfaces for data structures
interface Award {
  id: number;
  title: string;
  name?: string;
  year: string;
  organization: string;
  description?: string;
}

interface Education {
  degree: string;
  institution: string;
  location?: string;
  year?: string;
}

interface Experience {
  role: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string;
}

interface Publication {
  id: number;
  title: string;
  authors?: string;
  journal?: string;
  year?: string;
  doi?: string;
}

interface ProcessedFacultyData {
  awards: Award[];
  education: {
    phd: Education | null;
    masters: Education | null;
    bachelors: Education | null;
  };
  experience: Experience[];
  publications: Publication[];
  teaching: string[];
  [key: string]: any; // Allow for other properties
}

// Helper function to split any kind of line breaks
const splitLines = (text: string): string[] => {
  if (!text) return [];
  // Handle all types of line breaks: \r\n (Windows), \n (Unix), \r (Old Mac)
  return text.split(/\r\n|\r|\n/).filter(line => line.trim().length > 0);
};

const FacultyDetail: React.FC<FacultyDetailProps> = ({ faculty }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Mark component as running on client
    setIsClient(true);
  }, []);
  
  // Get the image URL from faculty data
  let imageUrl: string | null = null;
  
  if (faculty) {
    if (faculty.localimg && faculty.localimg !== "null") {
      imageUrl = `/faculty-images/${faculty.localimg}`;
    }
    else if (faculty.image && faculty.image !== "null") {
      if (faculty.image.startsWith('/')) {
        imageUrl = faculty.image;
      } else {
        // Use local image path
        imageUrl = `/faculty-images/${faculty.image}`;
      }
    }
  }

  if (!faculty) {
    return <div className="py-2">No faculty details available</div>;
  }

  // Extract basic faculty information
  const { 
    name, 
    nickname, 
    desig, 
    position, 
    email, 
    phone,
    office,
    schoolFrom,
    schoolTo,
    research_interest,
    interests,
    education = {},
    experience = [],
    publications = [],
    teaching = [],
    awards = []
  } = faculty;

  // Research interests from various sources
  const researchInterests = research_interest 
    ? splitLines(research_interest) 
    : (Array.isArray(interests) ? interests : []);

  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Faculty Image and Basic Info */}
        <div className="md:w-1/3">
          <div className="relative w-full md:h-64 rounded-lg overflow-hidden mb-2 bg-gray-100 p-2 flex items-center justify-center">
            {isClient ? (
              <FacultyImage 
                src={imageUrl}
                alt={name || nickname}
                className="w-full h-full max-h-48"
                width={300}
                height={300}
              />
            ) : (
              // Placeholder for server-side rendering
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Loading image...</span>
              </div>
            )}
          </div>

          <div className="faculty-content">
            <h2 className="text-xl font-bold text-blue-900 mb-1">{name || nickname}</h2>
            <p className="text-blue-600 font-medium mb-2">{desig || position}</p>
            
            <div className="space-y-2 mb-3">
              {email && (
                <div className="flex items-center">
                  <Mail className="text-blue-500 w-4 h-4 mr-2" />
                  <a href={`mailto:${email}`} className="text-gray-700 hover:text-blue-600 break-all text-sm">
                    {email}
                  </a>
                </div>
              )}
              {(phone || schoolFrom) && (
                <div className="flex items-center">
                  <Phone className="text-blue-500 w-4 h-4 mr-2" />
                  <span className="text-gray-700 text-sm">{phone || schoolFrom}</span>
                </div>
              )}
              {(office || schoolTo) && (
                <div className="flex items-center">
                  <MapPin className="text-blue-500 w-4 h-4 mr-2" />
                  <span className="text-gray-700 text-sm">{office || schoolTo}</span>
                </div>
              )}
            </div>
            
            {/* Research Interests */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1 flex items-center">
                <BookOpen className="w-4 h-4 mr-1 text-blue-600" />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-1">
                {researchInterests.length > 0 ? (
                  researchInterests.map((interest: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                      {interest}
                    </Badge>
                  ))
                ) : (
                  <p className="text-gray-500 text-xs">No research interests listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Faculty Detailed Info Tabs */}
        <div className="md:w-2/3">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="mb-2 grid w-full grid-cols-5">
              <TabsTrigger value="education" className="text-xs py-1">Education</TabsTrigger>
              <TabsTrigger value="experience" className="text-xs py-1">Experience</TabsTrigger>
              <TabsTrigger value="publications" className="text-xs py-1">Publications</TabsTrigger>
              <TabsTrigger value="teaching" className="text-xs py-1">Teaching</TabsTrigger>
              <TabsTrigger value="awards" className="text-xs py-1">Awards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="p-2 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[300px] pr-2">
                {education && education.phd && (
                  <div className="space-y-2">
                    <Card className="shadow-sm">
                      <CardContent className="p-2">
                        <div className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                            <GraduationCap className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{education.phd.degree || 'Ph.D'}</h4>
                            <p className="text-gray-600 text-xs">{education.phd.institution}</p>
                            {education.phd.location && (
                              <p className="text-gray-500 text-xs">{education.phd.location}</p>
                            )}
                            {education.phd.year && (
                              <p className="text-gray-500 text-xs">{education.phd.year}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) || (
                  <div className="text-center py-6">
                    <GraduationCap className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500 text-xs">No education information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="experience" className="p-2 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[300px] pr-2">
                {(experience && experience.length > 0) ? (
                  <div className="space-y-2">
                    {experience.map((exp: Experience, idx: number) => (
                      <Card key={idx} className="shadow-sm">
                        <CardContent className="p-2">
                          <div className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                              <Briefcase className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{exp.role}</h4>
                              {exp.company && <p className="text-gray-600 text-xs">{exp.company}</p>}
                              {exp.location && <p className="text-gray-500 text-xs">{exp.location}</p>}
                              {exp.period && <p className="text-gray-500 text-xs">{exp.period}</p>}
                              {exp.description && <p className="text-gray-700 text-xs mt-1">{exp.description}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Briefcase className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500 text-xs">No work experience information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="publications" className="p-2 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[300px] pr-2">
                {(publications && publications.length > 0) ? (
                  <div className="space-y-2">
                    {publications.map((pub: Publication, idx: number) => (
                      <div key={idx} className="p-2 border-l-4 border-blue-500 bg-white rounded shadow-sm">
                        <h4 className="font-medium text-gray-900 text-sm">{pub.title}</h4>
                        {pub.authors && <p className="text-gray-600 text-xs mt-0.5">{pub.authors}</p>}
                        {pub.journal && <p className="text-gray-500 italic text-xs mt-0.5">{pub.journal}</p>}
                        {pub.year && <p className="text-gray-500 text-xs mt-0.5">{pub.year}</p>}
                        {pub.doi && (
                          <a 
                            href={`#${pub.doi}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-xs mt-0.5 inline-block"
                          >
                            DOI: {pub.doi}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FileText className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500 text-xs">No publications available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="teaching" className="p-2 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[300px] pr-2">
                {(teaching && teaching.length > 0) ? (
                  <div className="space-y-2">
                    {teaching.map((course: string, idx: number) => (
                      <Card key={idx} className="shadow-sm">
                        <CardContent className="p-2">
                          <div className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                              <BookOpen className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{course}</h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <BookOpen className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500 text-xs">No teaching information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="awards" className="p-2 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[300px] pr-2">
                {(awards && awards.length > 0) ? (
                  <div className="space-y-2">
                    {awards.map((award: Award, idx: number) => (
                      <div key={idx} className="p-2 border-l-4 border-blue-500 bg-white rounded shadow-sm">
                        <div className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{award.title || award.name}</h4>
                            {award.organization && <p className="text-gray-600 text-xs mt-0.5">{award.organization}</p>}
                            {award.year && <p className="text-gray-500 text-xs mt-0.5">{award.year}</p>}
                            {award.description && <p className="text-gray-700 text-xs mt-1">{award.description}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Award className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500 text-xs">No awards information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default FacultyDetail
