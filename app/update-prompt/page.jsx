"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  useEffect(() => {
    const getPromptDetails = async () => {
        const res = await fetch(`api/prompt/${promptId}`)
        const data = await res.json()
        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
    }
    
    
  
    if(promptId) getPromptDetails()
    
  }, [promptId])
  
//   const createPrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       const res = await fetch("/api/prompt/new", {
//         method: "POST",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           userId: session?.user.id,
//           tag: post.tag,
//         })
//     })
//     if (res.ok){
//         router.push('/')
//       };
//     } catch (err) {
//         console.log(err)
//     } finally {
//         setSubmitting(false);
//     }
//   };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default UpdatePrompt;