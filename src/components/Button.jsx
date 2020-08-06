import React from 'react';

function Preview(data) {
	return (
		<div
			className="button-wrapper"
		>
			<button 
				className="slds-button slds-button_brand"
				onClick={data.onClick}
			>{data.label}</button>
		</div>
	);
}

export default Preview