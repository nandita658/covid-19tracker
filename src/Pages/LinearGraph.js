import React, { useEffect, useState } from 'react';

import numeral from 'numeral';

import classes from './LinearGraph.module.css';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, YAxis, XAxis } from "recharts";

const LinearGraph = (props) => {
    const [data, setData] = useState(null);

    const prettyPrint = (value) => value ? `+${numeral(value).format("0.0a")}` : "0";

    const formatYAxis = (value) => {
        return numeral(value).format("0.0a");
    }

    const buildGraphData = (data, cases) => {
        let graphData = [];
        let lastDataPoint;
        for (let date in data.cases) {
            if (lastDataPoint) {
                let newDataPoint = {
                    date: date,
                    cases: data[cases][date] - lastDataPoint,
                };
                graphData.push(newDataPoint);
            }
            lastDataPoint = data[cases][date];
        }
        return graphData
    };

    useEffect(() => {
        const fetchHistoryData = async () => {
            const response = await fetch('https://corona.lmao.ninja/v2/historical/all');
            const responseData = await response.json();
            let graphData = buildGraphData(responseData, 'cases');
            setData(graphData);
        };

        fetchHistoryData();
    }, []);

    return (
        <div className={classes.chart}>
            <h2 className={classes.chartTitle}>{props.title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={formatYAxis} />
                    <Line type="monotone" dataKey="cases" stroke="#1644ba" />
                    <Tooltip 
                        labelStyle={{ color: "black", fontFamily: "sans-serif" }}
                        itemStyle={{ color: "#1644ba" }}
                        formatter={function (value, name) {
                            return `${prettyPrint(value)}`;
                        }}
                        labelFormatter={function (value) {
                            return `date: ${value}`;
                        }}
                    />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LinearGraph;
