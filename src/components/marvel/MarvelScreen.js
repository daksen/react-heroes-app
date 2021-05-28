import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
	return (
		<div className="container mt-5">
			<h1>Marvel Comics</h1>
			<hr/>
			<HeroesList publisher="Marvel Comics" />
		</div>
	)
}
