'use client'
import { Button } from './ui/button';
import { useState } from 'react'
import { addComment } from '@/app/actions/blog'

export default function CourseComment({postId}) {
  const [comment, setComment] = useState("Some Comment");

  return (
    <Button onClick={async () => {
        const added = await addComment(comment, postId)
      }}>
      Add Comment
    </Button>
  )
}
