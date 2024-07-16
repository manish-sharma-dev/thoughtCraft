"use client"
import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header';
import Title from "title-editorjs";
import List from "@editorjs/list";
import CodeTool from '@editorjs/code';
// import ImageTool from '@editorjs/image';

export default function CreateBlog() {

  // const ImageTool = window.ImageTool;

  useEffect(()=>{
    const editor = new EditorJS({
      holder: 'editorjs',
      tools : {
        header: Header,
        title : Title,
        code: CodeTool,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        // image: {
        //   class: ImageTool,
        //   config: {
        //     endpoints: {
        //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        //     }
        //   }
        // },
      },
    });
  },[])


  return (
    <>
      <div id='editorjs'></div>
    </>
  )
}
