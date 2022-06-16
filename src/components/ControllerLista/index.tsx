import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useEffect } from 'react';
import styles from './ControllerLista.module.scss';
import { IOferta } from 'interfaces/IOferta';
import MinimumDistanceSlider from 'components/MinimumDistanceSlider';

export default function ControllerLista({ setOrdenacao, setFiltro }: 
	{ 
		setOrdenacao: React.Dispatch<React.SetStateAction<'name' | 'preco'>>,
		setFiltro: React.Dispatch<React.SetStateAction<number[]>> 
}) {
	const [alignment, setAlignment] = React.useState<'name' | 'preco'>('name');

	useEffect(() => {
		setOrdenacao(alignment);
	}, [alignment]);
	

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: 'name' | 'preco',
	) => {
		setAlignment(newAlignment);
	};

	return (
		<div className={styles.container}>
			<ToggleButtonGroup
				color="warning"
				value={alignment}
				exclusive
				onChange={handleChange}
			>
				<ToggleButton value="name">Nome</ToggleButton>
				<ToggleButton value="preco">Preço</ToggleButton>
			</ToggleButtonGroup>
			<div className={styles.slider}>
				<span>Filtro de preço: </span>
				<MinimumDistanceSlider setFiltro={setFiltro} />
			</div>
		</div>
	);
}
