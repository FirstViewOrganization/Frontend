"use client";

import { CircularProgress, IconButton, TextField } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from 'react'

const API_AUTH = process.env.NEXT_PUBLIC_API_AUTH;

interface InputSendProps {
    conversation: any[];
    setConversation: React.Dispatch<React.SetStateAction<any[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

export default function inputSend({ conversation, setConversation, loading, setLoading }: InputSendProps) {

    const [question, setQuestion] = useState<string>('');

    

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log('conversation', conversation);
        setQuestion(""); // Limpiar el campo de entrada
        setLoading(true); // Activar el loader

        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };
        if (API_AUTH) {
            headers["X-API-Key"] = API_AUTH;
            console.log('headers', API_AUTH);
        }

        const response = await fetch("http://127.0.0.1:8000/ask", {
            method: "POST",
            headers,
            body: JSON.stringify({ question }),
        });

        const response1 = await fetch("https://n8n.srv870791.hstgr.cloud/webhook-test/f922639e-5039-41aa-bd4d-1f82898115b7", {
            method: "POST",
            headers,
            body: JSON.stringify({ question }),
        });
        console.log('response1', response1);

        const data = await response.json();
        setConversation([
            ...conversation,
            { question, answer: data.answer.result },
        ]); // Agregar pregunta y respuesta al hilo
        setLoading(false); // Desactivar el loader
    };

    return (
        
    < form onSubmit = { handleSubmit } style = {{ display: "flex", gap: 4, width: "100%"}} >
     <TextField
       fullWidth
       placeholder="Escribe tu pregunta..."
       variant="outlined"
       size="small"
       value={question}
       onChange={(e) => setQuestion(e.target.value)}
       required
       disabled={loading} // Deshabilitar el campo de entrada mientras se espera la respuesta
     />
     <IconButton type="submit" color="primary" disabled={loading}>
       {loading ? <CircularProgress size={24} /> : <SendIcon />}
     </IconButton>
   </form >
  )
}
