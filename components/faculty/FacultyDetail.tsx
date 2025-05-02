import React, { useState } from "react"
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

interface FacultyDetailProps {
  faculty: any
  detailedInfo?: any
}

const FacultyDetail: React.FC<FacultyDetailProps> = ({ faculty, detailedInfo }) => {
  const [imageError, setImageError] = useState(false);
  
  // Handle image URL construction properly
  let imageUrl = "/placeholder.svg";
  
  // First priority: Use faculty.image if it starts with http(s)
  if (faculty?.image && (faculty.image.startsWith('http://') || faculty.image.startsWith('https://'))) {
    imageUrl = faculty.image;
  } 
  // Second priority: Use detailedInfo.image with proper domain prefix if it exists
  else if (detailedInfo?.image && !imageError) {
    imageUrl = `https://old.iiitdm.ac.in/img/faculty/${detailedInfo.image}`;
  }
  // Third priority: Use faculty.image as-is (might be a local path)
  else if (faculty?.image && !imageError) {
    imageUrl = faculty.image;
  }
  
  // Combine both data sources, prioritizing API data when available
  const combinedData = {
    name: detailedInfo?.name || faculty?.name || "Unknown",
    position: detailedInfo?.desig || faculty?.position || "Faculty",
    email: faculty?.email || detailedInfo?.email || "",
    phone: faculty?.phone || "",
    office: faculty?.office || "",
    // We'll use the imageUrl variable constructed above
    image: imageUrl,
    interests: faculty?.interests || [],
    bio: faculty?.bio || "",
    socialLinks: faculty?.socialLinks || {},
    
    // Education (from API)
    education: [
      detailedInfo?.dschoolBoard && {
        degree: detailedInfo.dschoolBoard,
        institution: detailedInfo.dschoolName,
        location: detailedInfo.dschoolPlace,
        year: ""
      },
      detailedInfo?.mschoolBoard && {
        degree: detailedInfo.mschoolBoard,
        institution: detailedInfo.mschoolName,
        location: detailedInfo.mschoolPlace,
        year: ""
      },
      detailedInfo?.bschoolBoard && {
        degree: detailedInfo.bschoolBoard,
        institution: detailedInfo.bschoolName,
        location: detailedInfo.bschoolPlace,
        year: ""
      }
    ].filter(Boolean),
    
    // Work experience (from API)
    experience: [
      detailedInfo?.workName1 && { role: detailedInfo.workName1 },
      detailedInfo?.workName2 && { role: detailedInfo.workName2 },
      detailedInfo?.workName3 && { role: detailedInfo.workName3 }
    ].filter(Boolean),
    
    // Publications (from API)
    publications: [
      detailedInfo?.pubCite3 && { title: detailedInfo.pubCite3 },
      detailedInfo?.pubCite4 && { title: detailedInfo.pubCite4 }
    ].filter(Boolean),
    
    // Teaching (from API)
    teaching: [
      detailedInfo?.schoolName1 && { course: detailedInfo.schoolName1 },
      detailedInfo?.coursework && { course: detailedInfo.coursework }
    ].filter(Boolean),
    
    // Talks (from API)
    talks: detailedInfo?.InvitedTalks ? detailedInfo.InvitedTalks.split('\r\n').filter((talk: string) => talk.trim()) : [],
    
    // Awards (from API)
    awards: detailedInfo?.schoolBoard ? detailedInfo.schoolBoard.split('\r\n').filter((award: string) => award.trim()) : [],
    
    // Research areas (from API)
    researchAreas: detailedInfo?.research_interest 
      ? detailedInfo.research_interest.split(',').map((i: string) => i.trim()).filter((i: string) => i)
      : [],
  }

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
    // Fallback to placeholder if image loading fails
  };

  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Faculty Image and Basic Info */}
        <div className="md:w-1/3">
          <div className="relative w-full aspect-square md:h-64 rounded-lg overflow-hidden mb-4 bg-gray-100">
            <Image
              src={imageError ? "/placeholder.svg" : combinedData.image}
              alt={combinedData.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
              onError={handleImageError}
            />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-1">{combinedData.name}</h2>
          <p className="text-blue-600 font-medium mb-4">{combinedData.position}</p>
          
          <div className="space-y-3 mb-6">
            {combinedData.email && (
              <div className="flex items-center">
                <Mail className="text-blue-500 w-5 h-5 mr-3" />
                <a href={`mailto:${combinedData.email}`} className="text-gray-700 hover:text-blue-600 break-all">
                  {combinedData.email}
                </a>
              </div>
            )}
            {combinedData.phone && (
              <div className="flex items-center">
                <Phone className="text-blue-500 w-5 h-5 mr-3" />
                <span className="text-gray-700">{combinedData.phone}</span>
              </div>
            )}
            {combinedData.office && (
              <div className="flex items-center">
                <MapPin className="text-blue-500 w-5 h-5 mr-3" />
                <span className="text-gray-700">{combinedData.office}</span>
              </div>
            )}
          </div>
          
          {/* Social Links */}
          <div className="flex gap-2 mb-6">
            {combinedData.socialLinks?.website && (
              <a href={combinedData.socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label="Personal website">
                <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                  <Globe className="h-5 w-5" />
                </Button>
              </a>
            )}
            {combinedData.socialLinks?.linkedin && (
              <a href={combinedData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            )}
            {combinedData.socialLinks?.github && (
              <a href={combinedData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            )}
          </div>
          
          {/* Research Interests */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[...combinedData.interests, ...combinedData.researchAreas].filter((v, i, a) => a.indexOf(v) === i).map((interest, idx) => (
                <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                  {interest}
                </Badge>
              ))}
              {combinedData.interests.length === 0 && combinedData.researchAreas.length === 0 && (
                <p className="text-gray-500 text-sm">No research interests listed</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Faculty Detailed Info Tabs */}
        <div className="md:w-2/3">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-5">
              <TabsTrigger value="bio">Bio</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="teaching">Teaching</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bio" className="p-4 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[400px] pr-4">
                {combinedData.bio ? (
                  <div className="prose prose-blue max-w-none">
                    <p>{combinedData.bio}</p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No biography information available</p>
                  </div>
                )}
                
                {/* Awards Section */}
                {combinedData.awards.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Awards & Recognitions
                    </h3>
                    <ul className="space-y-2">
                      {combinedData.awards.map((award, idx) => (
                        <li key={idx} className="flex">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Invited Talks Section */}
                {combinedData.talks.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-blue-600" />
                      Invited Talks & Presentations
                    </h3>
                    <ul className="space-y-2">
                      {combinedData.talks.map((talk, idx) => (
                        <li key={idx} className="flex">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{talk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="education" className="p-4 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[400px] pr-4">
                {combinedData.education.length > 0 ? (
                  <div className="space-y-6">
                    {combinedData.education.map((edu, idx) => (
                      <Card key={idx} className="border-l-4 border-l-blue-600">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <GraduationCap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                              <p className="text-blue-700">{edu.institution}</p>
                              {edu.location && <p className="text-gray-500">{edu.location}</p>}
                              {edu.year && <p className="text-gray-500 text-sm">{edu.year}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <GraduationCap className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No education information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="experience" className="p-4 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[400px] pr-4">
                {combinedData.experience.length > 0 ? (
                  <div className="space-y-6">
                    {combinedData.experience.map((exp, idx) => (
                      <Card key={idx} className="border-l-4 border-l-green-600">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <Briefcase className="w-6 h-6 text-green-600 mr-3 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                              {exp.company && <p className="text-green-700">{exp.company}</p>}
                              {exp.duration && <p className="text-gray-500 text-sm">{exp.duration}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No experience information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="publications" className="p-4 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[400px] pr-4">
                {combinedData.publications.length > 0 ? (
                  <div className="space-y-6">
                    {combinedData.publications.map((pub, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-gray-800">{pub.title}</p>
                              {pub.authors && <p className="text-gray-600 text-sm mt-1">{pub.authors}</p>}
                              {pub.venue && <p className="text-blue-600 italic text-sm mt-1">{pub.venue}</p>}
                              {pub.year && <p className="text-gray-500 text-sm">{pub.year}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No publications information available</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="teaching" className="p-4 bg-gray-50 rounded-lg">
              <ScrollArea className="h-[400px] pr-4">
                {combinedData.teaching.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Courses Taught</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {combinedData.teaching.map((item, idx) => (
                        <Card key={idx} className="border-l-4 border-l-purple-600">
                          <CardContent className="p-4">
                            <div className="flex items-center">
                              <BookOpen className="w-5 h-5 text-purple-600 mr-3" />
                              <p className="text-gray-800">{item.course}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No teaching information available</p>
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

