'use client';
import {FlipbookViewer} from 'react-pdf-flipbook-viewer'
import React from 'react'

const Page = () => {
  return (
    <div className="block max-w-6xl mx-auto pt-1">
      <FlipbookViewer pdfUrl='/newsletter.pdf' className="flipbook-scope" />
    </div>
  )
}

export default Page