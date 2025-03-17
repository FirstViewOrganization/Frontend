"use client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Key, useState } from 'react';
import style from './style.module.css'

interface ComponentItemProps {
    addComponent: (component: string) => void;
    comp: string;
}

export default function ComponentItem ({ addComponent, comp }: ComponentItemProps) {

    return (
        <Card sx={{ maxWidth: 345 }} className={style['component-item']}>
            <CardActionArea key={comp} onClick={() => addComponent(comp)}>
                <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1734784548166-a1ffe07dd7cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {comp}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}