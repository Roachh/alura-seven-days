import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
	return `${value}°C`;
}

const minDistance = 5;

export default function MinimumDistanceSlider({setFiltro}: {setFiltro: React.Dispatch<React.SetStateAction<number[]>> }) {
	const [value2, setValue2] = React.useState<number[]>([20, 37]);


	React.useEffect(() => {
		setFiltro(value2);	  
	}, [value2]);
	

	const handleChange2 = (
		event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - minDistance);
				setValue2([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setValue2([clamped - minDistance, clamped]);
			}
		} else {
			setValue2(newValue as number[]);
		}
	};

	return (
		<Box sx={{ width: 200 }}>
			<Slider
				getAriaLabel={() => 'Minimum distance'}
				value={value2}
				onChange={handleChange2}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				disableSwap
				min={0}
				max={40}
			/>
		</Box>
	);
}
