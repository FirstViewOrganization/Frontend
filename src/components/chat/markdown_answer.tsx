"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRender({ content }: { content: string }) {
  
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) {
          const match = /language-(\w+)/.exec(className || "");
          const [copied, setCopied] = useState(false); // Estado local para cada bloque
          const language = match ? match[1] : "bash"; // Si no hay lenguaje, usa bash por defecto
          
          const handleCopyClick = (text: string) => {
            console.log("Copiando:", text);
            try {
              navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // Vuelve al estado original después de 2 segundos
            } catch (err) {
              console.error("Error al copiar:", err);
            }
          };

          return !inline ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => handleCopyClick(String(children).replace(/\n$/, ''))}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '8px',
                  background: copied ? '#4CAF50' : '#333', // Cambia el color a verde si se copió
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />} {/* Cambia el ícono */}
              </button>
              <SyntaxHighlighter style={vscDarkPlus as any} language={language}
                customStyle={{
                  borderRadius: "8px", // Agrega bordes redondeados
                  padding: "12px", // Espaciado interno
                  background: "#1e1e1e", // Asegura un fondo oscuro uniforme
                  overflowX: "auto", // Evita que el contenido se desborde
                }}
                {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};