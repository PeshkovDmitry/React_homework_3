import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Paper from '@mui/material/Paper';


function TemperatureConverter() {

    const [currentTemperatureInCelsium, setCurrentTemperatureInCelsium] = useState();
    const [currentTemperatureInFahrenheit, setCurrentTemperatureInFahrenheit] = useState();

    const onCelsiumChanged = (e) => {
        setCurrentTemperatureInCelsium(e.target.value);
        setCurrentTemperatureInFahrenheit(9 / 5 * e.target.value + 32);
    };

    const onFahrenheitChange = (e) => {
        setCurrentTemperatureInFahrenheit(e.target.value);
        setCurrentTemperatureInCelsium(5 / 9 * (e.target.value - 32));
    }

    const resetButtonClicked = (e) => {
        e.preventDefault();
        setCurrentTemperatureInCelsium(0);
        setCurrentTemperatureInFahrenheit(0);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 150,
                },
            }}
        >
            <Paper elevation={3}>
                <TextField
                    label="Температура по Цельсию"
                    variant="standard"
                    value={currentTemperatureInCelsium}
                    onChange={onCelsiumChanged} />
                <TextField
                    label="Температура по Фаренгейту"
                    variant="standard"
                    value={currentTemperatureInFahrenheit}
                    onChange={onFahrenheitChange} />
                <Button
                    variant="contained"
                    onClick={resetButtonClicked}>
                    Сбросить
                </Button>
            </Paper>

        </Box>
    );
}

export default TemperatureConverter;