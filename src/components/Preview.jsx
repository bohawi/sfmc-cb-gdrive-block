import React from 'react';

function Preview(data) {
	return (
		<div style={{
			width: '20rem'
		}}>
			<div className="slds-file slds-file_card slds-has-title">
				<figure>
					<a href="javascript:void(0);" className="slds-file__crop">
						<span className="slds-assistive-text">Preview:</span>
						<img 
							src={ data.url}
						/>
					</a>
					<figcaption className="slds-file__title slds-file__title_card">
						<div className="slds-media slds-media_small slds-media_center">
							<div className="slds-media__figure slds-line-height_reset">
								<span className="slds-icon_container" title="pdf">
									<svg className="slds-icon slds-icon_x-small" aria-hidden="true">
										<use xlinkHref="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
									</svg>
									<span className="slds-assistive-text">pdf</span>
								</span>
							</div>
							<div className="slds-media__body">
								<span 
									className="slds-file__text slds-truncate"
									title={ data.name }
								>{ data.name }</span>
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default Preview;