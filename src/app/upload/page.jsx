"use client"

import { useState, useRef, useCallback } from "react"
import { readPdfText } from "../../../utils/readPdfText";
import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.entry';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  X,
  ArrowLeft,
  Brain,
  Zap,
  Shield,
  Sparkles,
  Clock,
  FileCheck,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { askLLM } from "../../../utils/askLLM";

const UploadPage = () => {

  const handleChat = async (userText) => {
    try {
      const newMessages = [
        ...messages,
        { role: "user", content: userText }
      ];

      setMessages(newMessages);

      const response = await askLLM(newMessages);


      const reply = response?.choices?.[0]?.message?.content;

      if (typeof reply === "string" && reply.trim().length > 0) {
        setLlmResponse(reply.trim());
      } else {
        console.warn("AI reply was invalid:", response);
        setLlmResponse("AI returned an empty or invalid response.");
      }
    } catch (err) {
      console.error("LLM Error:", err);
      setLlmResponse("Failed to get a response from AI.");
    }
  };



  const handleLLMQuery = async (extractedText) => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: `${question}\n\nHere is some reference from the document:\n${extractedText}`,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const response = await askLLM(newMessages);
      const reply = response?.choices?.[0]?.message?.content;

      if (reply) {
        const assistantMessage = {
          role: "assistant",
          content: reply,
        };
        setMessages([...newMessages, assistantMessage]);
        setLlmAnswer(reply);
      } else if (response?.error) {
        setLlmAnswer("AI Error: " + JSON.stringify(response.error, null, 2));
      } else {
        setLlmAnswer("AI didn't return a valid response.");
      }
    } catch (err) {
      console.error("LLM Error:", err);
      setLlmAnswer("Something went wrong while querying the AI.");
    }
  };



  const [llmResponse, setLlmResponse] = useState("")
  const [files, setFiles] = useState([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [question, setQuestion] = useState("");
  const [llmAnswer, setLlmAnswer] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant. Answer based on the following document." },
  ]);

  const handleAsk = async () => {
    const { answer, updatedMessages } = await askLLM(messages, extractedText, question);
    setMessages(updatedMessages);
    setLlmAnswer(answer);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }, [])

  const handleFileSelect = useCallback((e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }, [])

  const handleFiles = async (fileList) => {
    const pdfFiles = fileList.filter((file) => file.type === "application/pdf")

    if (pdfFiles.length !== fileList.length) {
      alert("Please upload only PDF files")
    }

    const newFiles = pdfFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      status: "uploading",
      progress: 0,
      extractedText: "",
    }))

    setFiles((prev) => [...prev, ...newFiles])

    for (const uploadedFile of newFiles) {
      simulateUpload(uploadedFile.id)


      try {
        const text = await readPdfText(uploadedFile.file)
        console.log(`Extracted text for ${uploadedFile.file.name}:`, text)
        setFiles((prev) =>
          prev.map((file) =>
            file.id === uploadedFile.id
              ? { ...file, extractedText: text }
              : file
          ))
      } catch (error) {
        console.error(`Failed to extract text for ${uploadedFile.file.name}:`, error)
      }
    }


    {/*extract text*/ }


    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;



    const readPdfContent = (file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const arrayBuffer = e.target.result;

        console.log("📦 PDF ArrayBuffer ready for processing:", arrayBuffer);
      };

      reader.onerror = function (err) {
        console.error("Error reading PDF file:", err);
      };

      reader.readAsArrayBuffer(file);
      console.log(readPdfContent)
    };


  }

  const simulateUpload = (fileId) => {
    setIsUploading(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setFiles((prev) =>
          prev.map((file) => (file.id === fileId ? { ...file, status: "success", progress: 100 } : file)),
        )
        setIsUploading(false)
      } else {
        setFiles((prev) => prev.map((file) => (file.id === fileId ? { ...file, progress } : file)))
      }
    }, 200)
  }

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId))
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Querra</h1>
                  <p className="text-sm text-gray-500">Upload & Analyze</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">AI Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-blue-600 animate-spin" />
            <span className="text-blue-700 text-sm font-semibold">AI-Powered Document Analysis</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Upload Your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              PDF Documents
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Drag and drop your PDF files or click to browse. Our advanced AI will analyze your documents and provide
            instant insights, summaries, and answer any questions you have.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-purple-500" />
              <span>99.9% Accurate</span>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Upload Zone */}
          <div className="lg:col-span-2">
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-3 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${isDragOver
                ? "border-blue-500 bg-blue-50 scale-105"
                : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-12 right-12 w-6 h-6 bg-indigo-200 rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute bottom-8 left-1/4 w-4 h-4 bg-purple-200 rounded-full opacity-50"></div>

              <div className="relative">
                <div className="mb-8">
                  <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 shadow-2xl">
                    <Upload className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {isDragOver ? "Drop your files here!" : "Upload PDF Documents"}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Drag and drop your PDF files here, or click the button below to browse
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    <FileText className="h-6 w-6" />
                    Choose Files
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </button>

                  <p className="text-gray-500 text-sm">
                    Supported format: PDF • Max file size: 50MB • Multiple files allowed
                  </p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Uploaded Files ({files.length})
                </h3>
                <div className="space-y-4"
                >
                  {files.map((uploadedFile) => (
                    <div
                      onClick={() => setSelectedFileId(uploadedFile.id)}
                      key={uploadedFile.id}
                      className={`bg-white border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${uploadedFile.id === selectedFileId ? "border-blue-500 shadow-xl" : "border-gray-200"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-red-100">
                            <FileText className="h-6 w-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 truncate max-w-xs">{uploadedFile.file.name}</h4>
                            <p className="text-gray-500 text-sm">{formatFileSize(uploadedFile.file.size)}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3"
                        >
                          {uploadedFile.status === "uploading" && (
                            <div className="flex items-center gap-2 text-blue-600">
                              <Clock className="h-4 w-4 animate-spin" />
                              <span className="text-sm font-medium">Uploading...</span>
                            </div>

                          )}
                          {uploadedFile.status === "success" && (
                            <div className="flex items-center gap-2 text-green-600">
                              <CheckCircle className="h-5 w-5" />
                              <span className="text-sm font-medium">Complete</span>
                            </div>
                          )}
                          <button
                            onClick={() => handleChat(uploadedFile.id)}
                            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                          >
                            Chat
                          </button>




                          {uploadedFile.status === "error" && (
                            <div className="flex items-center gap-2 text-red-600">
                              <AlertCircle className="h-5 w-5" />
                              <span className="text-sm font-medium">Failed</span>
                            </div>
                          )}

                          <button
                            onClick={() => removeFile(uploadedFile.id)}
                            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {uploadedFile.status === "uploading" && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadedFile.progress}%` }}
                          ></div>
                        </div>
                      )}
                      {selectedFileId === uploadedFile.id && (
                        <div className="mt-6 w-full">
                          <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ask a question about this PDF"
                            className="w-full p-3 border-black text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                          />
                          <button
                            onClick={() => handleLLMQuery(uploadedFile.extractedText)}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-md transition duration-300"
                          >
                            Ask AI
                          </button>


                        </div>
                      )}

                    </div>

                  ))}

                  {llmAnswer && (
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl shadow-inner">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">AI Answer:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{llmAnswer}</p>
                    </div>
                  )}
                  {selectedFileId && (
                    <div className="mt-12 bg-white border border-gray-200 rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Extracted Text</h3>
                      <div className="max-h-96 overflow-y-auto text-sm text-gray-700">
                        {files
                          .filter((file) => file.id === selectedFileId && file.extractedText)
                          .map((file) => (
                            <div key={file.id}>
                              <h4 className="font-semibold mb-2">{file.name}</h4>
                              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border">{file.extractedText}</pre>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}


                  {files.some((f) => f.status === "success") && (
                    <div className="mt-16 text-center">
                      <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Analyze!</h3>
                        <p className="text-gray-600 mb-8">
                          Your documents have been uploaded successfully. Start chatting with your PDFs now!
                        </p>

                        <div className="flex justify-center gap-4">
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                            <Brain className="h-6 w-6" />
                            Start Analyzing
                          </button>
                          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all duration-300"
                            onClick={() => fileInputRef.current?.click()}>

                            Upload More Files
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upload Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                Upload Tips
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <FileCheck className="h-5 w-5 text-green-600" />,
                    title: "PDF Format Only",
                    desc: "Upload PDF documents for best results",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-blue-600" />,
                    title: "Multiple Files",
                    desc: "Upload multiple PDFs at once",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-purple-600" />,
                    title: "Secure Processing",
                    desc: "Your files are encrypted and secure",
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white shadow-sm">{tip.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "AI Analysis",
                    desc: "Our AI reads and understands your document",
                    color: "bg-blue-500",
                  },
                  {
                    step: "2",
                    title: "Content Extraction",
                    desc: "Key information and insights are extracted",
                    color: "bg-green-500",
                  },
                  {
                    step: "3",
                    title: "Ready to Chat",
                    desc: "Ask questions and get instant answers",
                    color: "bg-purple-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* File Requirements */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                File Requirements
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  PDF format only
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Maximum 50MB per file
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Text-based PDFs work best
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Multiple files supported
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}

      </main>
    </div>
  )
}

export default UploadPage
