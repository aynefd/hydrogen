import '../App.css';
import { PieChart, Pie, Legend, Label, Tooltip } from 'recharts';

function DailyReport(props) {
    const data = [
        { name: "daily cases", value: props.items.positiveIncrease, fill: "red" },
        { name: "total deaths", value: props.items.death, fill: "black" },
    ];

    return (
        <div className="container">
            <h2>{props.title}</h2>
            <div className="daily-stat">{props.items.positiveIncrease}</div>
            <div>{new Date(props.items.dateModified).toLocaleString()}</div>
            <PieChart width={600} height={600}>
                <Pie dataKey="value" startAngle={180} endAngle={0} data={data} outerRadius={180} label />
                <Label />
                <Tooltip />
            </PieChart>
        </div>
    );
};
export default DailyReport;