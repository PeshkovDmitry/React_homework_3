import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


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
        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
            <div>
                <TextField
                    id="tc"
                    label="Температура по Цельсию"
                    variant="outlined"
                    value={currentTemperatureInCelsium}
                    onChange={onCelsiumChanged} />
            </div>
            <div>
                <TextField
                    id="tf"
                    label="Температура по Фаренгейту"
                    variant="outlined"
                    value={currentTemperatureInFahrenheit}
                    onChange={onFahrenheitChange} />
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={resetButtonClicked} 
                >
                    Сбросить
                </Button>
            </div>
        </Box>
    );
}

export default TemperatureConverter;