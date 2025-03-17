"use client";
import { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SortableItem from "./SortableItem";
import style from './style.module.css'
import Paper from '@mui/material/Paper';
import ComponentItem from "./componentItem/page";
import GridBuilder from "./gridBuilder/page";


export default function PageBuilder() {
    const [components, setComponents] = useState<string[]>([]); 

    return (
        <Grid container spacing={2}>
            {/* Área de Construcción */}
            <Grid size={{ xs: 10 }}>
                <Paper elevation={1} variant="outlined" >

                    <GridBuilder></GridBuilder>

                </Paper>

            </Grid>
        </Grid >
    );
}