import {
    Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart,
} from 'recharts';
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
function DailyChart(props) {

    const data = reverseArray(props.items).reduce((acc, item, index, src) => {
        let i = index;
        let weekly = 0;
        while (i >= 0 && i > index - 7) {
            weekly += src[i].positiveIncrease;
            --i;
        }
        acc.push(
            {
                cases: item.positiveIncrease,
                date: item.lastUpdateEt,
                weeklyAvg: weekly / 7
            });
        return acc;

    }, []);


    return (
        <div className="container">
            <h2>{props.title}</h2>
            <ComposedChart
                width={1000}
                height={600}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: "Date", position: 'insideBottom', offset: 0 }} />
                <YAxis label={{ value: 'Cases', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="cases" fill="#8884d8" />
                <Line dataKey="weeklyAvg" type='monotone' stroke='blue' dot={false} activeDot={false} />
            </ComposedChart>
        </div>
    );

}

export default DailyChart;