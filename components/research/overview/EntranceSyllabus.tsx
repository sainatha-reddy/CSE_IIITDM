"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, BookOpen, Code, BrainCircuit, Cpu, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EntranceSyllabus() {
  const [activeTab, setActiveTab] = useState("core")

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f5f8ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-[#003366] inline-block relative"
          >
            PhD Entrance Syllabus
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#6495ED]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#003366]/80 max-w-3xl mx-auto"
          >
            The PhD entrance examination tests candidates on fundamental computer science concepts and specialized
            areas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-lg border-[#6495ED]/20">
            <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] text-white">
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-2 h-6 w-6" />
                Examination Syllabus and Sample Question Paper
              </CardTitle>
              <CardDescription className="text-white/80">
                The examination consists of core computer science topics and specialized areas based on your research
                interests.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="core" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="core" className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Core Topics
                  </TabsTrigger>
                  <TabsTrigger value="algorithms" className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Algorithms
                  </TabsTrigger>
                  <TabsTrigger value="ai" className="flex items-center">
                    <BrainCircuit className="w-4 h-4 mr-2" />
                    AI & ML
                  </TabsTrigger>
                  <TabsTrigger value="systems" className="flex items-center">
                    <Cpu className="w-4 h-4 mr-2" />
                    Systems
                  </TabsTrigger>
                  <TabsTrigger value="sample" className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Sample Questions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="core" className="mt-0">
                  <SyllabusAccordion
                    items={[
                      {
                        title: "Discrete Mathematics",
                        content:
                          "Sets, relations, functions, partial orders, lattices, monoids, groups, graphs, trees, propositional and predicate logic, proof techniques, combinatorics, discrete probability.",
                      },
                      {
                        title: "Data Structures",
                        content:
                          "Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs, hashing, analysis of algorithms, asymptotic notation, searching and sorting algorithms.",
                      },
                      {
                        title: "Computer Organization",
                        content:
                          "Machine instructions and addressing modes, ALU, data‐path and control unit, instruction pipelining, memory hierarchy, I/O interface, parallel processing, multiprocessors.",
                      },
                      {
                        title: "Programming Languages",
                        content:
                          "Programming in C/C++/Java, recursion, parameter passing, scope, binding, abstract data types, object-oriented programming concepts, exception handling, concurrency.",
                      },
                      {
                        title: "Operating Systems",
                        content:
                          "Processes, threads, inter‐process communication, concurrency, synchronization, deadlock, CPU scheduling, memory management, file systems, I/O systems, protection and security.",
                      },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="algorithms" className="mt-0">
                  <SyllabusAccordion
                    items={[
                      {
                        title: "Algorithm Design Techniques",
                        content:
                          "Divide and conquer, greedy algorithms, dynamic programming, backtracking, branch and bound, randomized algorithms, approximation algorithms.",
                      },
                      {
                        title: "Graph Algorithms",
                        content:
                          "Breadth-first search, depth-first search, shortest paths, minimum spanning trees, maximum flow, matching algorithms, connectivity, traversals, graph coloring.",
                      },
                      {
                        title: "Computational Complexity",
                        content:
                          "Asymptotic analysis, time and space complexity, best, worst and average case analysis, lower bounds, P, NP, NP-completeness, reduction techniques.",
                      },
                      {
                        title: "Advanced Data Structures",
                        content:
                          "Red-black trees, AVL trees, B-trees, splay trees, skip lists, tries, disjoint sets, segment trees, Fenwick trees, suffix arrays and trees.",
                      },
                      {
                        title: "Algorithmic Problem Solving",
                        content:
                          "Problem formulation, algorithm design paradigms, correctness proofs, efficiency analysis, implementation techniques.",
                      },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="ai" className="mt-0">
                  <SyllabusAccordion
                    items={[
                      {
                        title: "Machine Learning Fundamentals",
                        content:
                          "Supervised learning, unsupervised learning, reinforcement learning, feature selection, model evaluation, cross-validation, bias-variance tradeoff.",
                      },
                      {
                        title: "Neural Networks & Deep Learning",
                        content:
                          "Perceptrons, multilayer networks, backpropagation, convolutional neural networks, recurrent neural networks, transformers, generative models.",
                      },
                      {
                        title: "Natural Language Processing",
                        content:
                          "Text preprocessing, language models, word embeddings, sequence tagging, parsing, sentiment analysis, machine translation, question answering.",
                      },
                      {
                        title: "Computer Vision",
                        content:
                          "Image processing, feature extraction, object detection, image segmentation, face recognition, image generation, 3D vision.",
                      },
                      {
                        title: "AI Ethics & Explainability",
                        content:
                          "Fairness in AI, bias detection and mitigation, interpretable models, explainable AI techniques, privacy-preserving machine learning.",
                      },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="systems" className="mt-0">
                  <SyllabusAccordion
                    items={[
                      {
                        title: "Computer Architecture",
                        content:
                          "Instruction set architecture, pipelining, memory hierarchy, cache organization, multiprocessors, RISC vs CISC, performance evaluation.",
                      },
                      {
                        title: "Operating Systems",
                        content:
                          "Process management, memory management, file systems, I/O systems, virtualization, distributed systems, security and protection.",
                      },
                      {
                        title: "Computer Networks",
                        content:
                          "Network architecture, protocols, routing, congestion control, network security, wireless networks, mobile computing.",
                      },
                      {
                        title: "Database Systems",
                        content:
                          "Relational model, SQL, database design, normalization, query processing, transaction processing, concurrency control, recovery.",
                      },
                      {
                        title: "Distributed Systems",
                        content:
                          "Distributed algorithms, consistency models, fault tolerance, replication, distributed file systems, distributed databases.",
                      },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="sample" className="mt-0">
                  <div className="space-y-6 p-4">
                    <h3 className="text-xl font-semibold text-[#003366]">Sample Question Papers</h3>
                    <p className="text-[#003366]/80">
                      Download sample question papers to familiarize yourself with the format and types of questions asked in the PhD entrance examination.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <Card className="border border-[#6495ED]/20">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <FileText className="h-12 w-12 text-[#6495ED] mb-4" />
                          <p className="text-sm text-[#003366]/70 mb-4">
                            Sample question paper I
                          </p>
                          <Button variant="outline" className="border-[#6495ED] text-[#003366]" asChild>
                            <Link href="/doc/sample_paper_1.pdf" download>
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-[#6495ED]/20">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <FileText className="h-12 w-12 text-[#6495ED] mb-4" />
                          <p className="text-sm text-[#003366]/70 mb-4">
                            Sample question paper II
                          </p>
                          <Button variant="outline" className="border-[#6495ED] text-[#003366]" asChild>
                            <Link href="/doc/sample_paper_2.pdf" download>
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Link 
                        href="/resources/past-papers" 
                        className="inline-flex items-center text-[#6495ED] hover:text-[#003366] font-medium"
                      >
                        View all past question papers
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

interface SyllabusItem {
  title: string;
  content: string;
}

function SyllabusAccordion({ items }: { items: SyllabusItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-[#003366] hover:text-[#6495ED]">{item.title}</AccordionTrigger>
          <AccordionContent className="text-[#003366]/80">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

