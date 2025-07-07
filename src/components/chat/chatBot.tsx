"use client";
import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Fab,
  CardHeader,
  Avatar,
  CardActions,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import InputSend from "./inputSend";

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import MarkdownRender from "./markdown_answer";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const chatContentRef = useRef<HTMLDivElement>(null);
  const [conversation, setConversation] = useState<{ question: string; answer: string }[]>([]); // Para almacenar el hilo
  const [loading, setLoading] = useState(false); // Nuevo estado para el loader

  const handleToggle = () => setOpen(!open);

  const scrollToBottom = () => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (open) {
      scrollToBottom(); // Desplazar hacia abajo cada vez que se abre el chat
    }
  }, [conversation, open]);


  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      {/* Botón flotante */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Fab color="primary" onClick={handleToggle} sx={{ boxShadow: 3 }}>
          <ChatIcon />
        </Fab>
      </motion.div>

      {/* Card del chat */}
      <AnimatePresence>



        {open && (
          <motion.div
            initial={{ scale: 0.5 }}  // Comienza con escala reducida
            animate={{ scale: 1 }}    // Termina con escala normal
            exit={{ scale: 0 }}     // Se reduce al cerrarse
            transition={{ duration: 0.2 }}         // Duración de la animación
          >
            <Card
              sx={{
                position: "absolute",
                bottom: 70,
                right: 0,
                width: 500,
                boxShadow: 5,
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardHeader
                sx={{ bgcolor: "#eeeeee" }}
                avatar={
                  <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton onClick={handleToggle} size="large">
                    <CloseIcon />
                  </IconButton>
                }
                title="GenIAl Chat"
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1, height: 400, overflow: "auto" }} ref={chatContentRef}>

                {/* Área de respuesta con Markdown */}
                {conversation.map((item, index) => (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end", // Alinea a la derecha
                        marginBottom: 2,
                      }}
                      key={`box1_${index}`}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#007bff", // Color del globo
                          color: "white", // Texto blanco
                          padding: "10px 15px",
                          borderTopLeftRadius: "20px", // Redondear solo la esquina superior izquierda
                          borderBottomLeftRadius: "20px", // Redondear la esquina inferior izquierda
                          borderBottomRightRadius: "20px", // Redondear la esquina inferior derecha
                          maxWidth: "80%", // Para que el mensaje no se expanda demasiado
                          wordWrap: "break-word", // Romper palabras largas
                        }}
                        key={`box2_${index}`}
                      >
                        <Typography variant="body1">{item.question}</Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,
                        padding: 1,
                        borderRadius: 1,
                      }}
                    >
                      {item.answer && (
                        <Box sx={{ margin: 2 }}>
                          <MarkdownRender content={item.answer} />
                        </Box>
                      )}
                    </Box>
                  </>
                ))}



              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center", padding: 2}}>
                <InputSend conversation={conversation} setConversation={setConversation}  loading={loading} setLoading={setLoading} />
              </CardActions>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
