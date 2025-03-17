import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ComponentItem from "../componentItem/page";
import style from './styles.module.css'

const componentsList = ["Header", "Card", "Carrousel", "Footer"];

export default function ComponentList() {
    const addComponent = (component: string) => {
        setComponents((prev: string[]) => [...prev, component]);
    };
    return (
        < Grid size={{ xs: 2 }}>
            <Paper elevation={1} variant="outlined" className={style['component-list']} >

                {componentsList.map((comp) => (
                    <>
                        <ComponentItem addComponent={addComponent} comp={comp} />
                    </>
                ))}
            </Paper>
        </Grid >
    )
}
