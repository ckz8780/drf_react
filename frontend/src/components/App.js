import React from "react";
import ConnectedTable from "./ConnectedTable";
import ConnectedForm from "./ConnectedForm";

const App = () => (
	<div>
		<React.Fragment>
			<ConnectedForm endpoint="api/lead/" />
		</React.Fragment>

		<React.Fragment>
			<ConnectedTable endpoint="api/lead/" />
		</React.Fragment>
	</div>
);

export default App;