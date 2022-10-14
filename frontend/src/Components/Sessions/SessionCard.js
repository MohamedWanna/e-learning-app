import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function SessionCard({el}) {
    return (
        <div style={{margin:"10px"}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={el.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {el.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {el.createDate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button size="small">Add Session</Button>
                </CardActions>
            </Card>
        </div>
  );
}