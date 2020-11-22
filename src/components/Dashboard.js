import '../css/Dashboard.css';
import DailyChart from './DailyChart.js';
import DailyReport from './DailyReport.js';
import { useEffect, useState } from 'react';

function Dashboard(props) {
    const [dailyData, setDailyData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        fetch("https://api.covidtracking.com/v1/states/ut/current.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setCurrentData(result);

                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);
    useEffect(() => {
        fetch("https://api.covidtracking.com/v1/states/ut/daily.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setDailyData(result);

                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);
    const positiveIncreases = dailyData.map(item => item.positiveIncrease);
    const max = Math.max(...positiveIncreases);
    return (
        <div className='dashboard'>
            <DailyChart title="Cases Per Day" items={dailyData} />
            <DailyReport title="Cases Today" items={currentData} max={max} />
        </div>

    );
}
export default Dashboard;