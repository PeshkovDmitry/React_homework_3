import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function TodoListCard({ comment, onDelete }) {

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {comment.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {comment.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        variant="contained"
                        onClick={onDelete}
                        id={comment.id}
                    >
                        Удалить<DeleteIcon />
                    </IconButton>
                    
                </CardActions>
            </Card>
        </Box>
    );




}

export default TodoListCard;