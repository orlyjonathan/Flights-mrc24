import { createBrowserRouter } from 'react-router';
import LoginRegister from './view/pages/loginRegister/LoginRegister';
import AdminPanel from './view/pages/adminPanel/AdminPanel';
import Company from './view/pages/company/Company';
import CompanyHome from './view/pages/company/companyHome/CompanyHome';
import SetFlights from './view/pages/setFlights/SetFlights';
import FlightActions from './view/pages/company/flightActions/FlightActions';
import AddFlightForm from './view/pages/setFlights/AddFlightForm';
import Home from './view/pages/Home/Home';
import FlightSearchResults from './view/pages/FlightSearchResults/FlightSearchResults';
import UpdateFlightForm from './view/pages/setFlights/UpdateFlightForm';



function ErrorBoundary() {
	return (
		<div className="error-container">
			<h2>Oops! Something went wrong</h2>
			<p>We couldn't find the page you're looking for.</p>
		</div>
	);
}

export const router = createBrowserRouter([
	{

		path: '/', 
		element: <LoginRegister />, 
		errorElement: <ErrorBoundary />
	},
	{
		path: 'home',
		element: <Home />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: 'flight-search-results',
		element: <FlightSearchResults />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: 'company',
		element: <Company />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <CompanyHome />,
			},
			{
				path: 'admin-panel',
				element: <AdminPanel />,
			},
			{
				path: 'set-flights',
				element: <SetFlights />,
			},
            {
                path: 'flight-actions',
                element: <FlightActions />,
            },
			
            {
                path: 'add-flight',
                element: <AddFlightForm
				onSubmit={(flightData) => console.log(flightData)} 
				onCancel={() => console.log('Cancel button clicked')} />,
            },

			{
				path: 'update-flight/:flightId',
				element: <UpdateFlightForm
				flight={{
					flight_id: 1,
					airplane_id: 1,
					departure_date: '2023-03-01',
					departure_time: '08:00',
					arrival_time: '10:00',
					price: 100,
					origin: 'New York',
					destination: 'Los Angeles',
				  }}
				onSubmit={(flightData) => console.log(flightData)} 
				onCancel={() => console.log('Cancel button clicked')} />,
			},

		],
	},
]);