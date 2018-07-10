import React from "react";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

import ConnectedTable from "./ConnectedTable";
import ConnectedForm from "./ConnectedForm";

const App = () => (
	<div>
		{/*<React.Fragment>
			<Form endpoint="api/lead/" />
		</React.Fragment>

		<React.Fragment>
			<DataProvider endpoint="api/lead/" 
			              render={data => <Table data={data} />} />
		</React.Fragment>*/}

		<React.Fragment>
			<ConnectedForm endpoint="api/lead/" />
		</React.Fragment>

		<React.Fragment>
			<ConnectedTable endpoint="api/lead/" />
		</React.Fragment>
	</div>
);

export default App;