import React from 'react';

function Preview(data) {
	return (
		<button 
			className="slds-button slds-button_brand"
			onClick={data.onClick}
		>{data.label}</button>
	);
}

export default Preview