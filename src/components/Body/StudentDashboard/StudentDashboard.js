import React, { useState } from 'react';
import oval from '../../../assets/Oval.png';
import Calendar from 'react-calendar';
import { PieChart } from 'react-minimal-pie-chart';
import 'react-calendar/dist/Calendar.css';
import Chart from "react-google-charts";
import RoundChart from "react-google-charts";
import CurveChart from "react-google-charts";

const data = [
    ["Element", "Density", { role: "style" }],
    ["Jun", 8.94, "#b87333"], // RGB value
    ["July", 10.49, "silver"], // English color name
    ["August", 19.3, "gold"],
    ["September", 21.45, "color: #e5e4e2"] // CSS-style declaration
];

const data2 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7] // CSS-style declaration
];
const data3 = [
    [
        { type: 'number', label: 'x' },
        { type: 'number', label: 'values' },
        { id: 'i0', type: 'number', role: 'interval' },
        { id: 'i1', type: 'number', role: 'interval' },
        { id: 'i2', type: 'number', role: 'interval' },
        { id: 'i2', type: 'number', role: 'interval' },
        { id: 'i2', type: 'number', role: 'interval' },
        { id: 'i2', type: 'number', role: 'interval' },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
]

const options2 = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false
};

const options3 = {
    title: 'Sticks, default',
    curveType: 'function',
    series: [{ color: '#E7711B' }],
    intervals: { style: 'sticks' },
    legend: 'none',
}
function StudentDashboard() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="student-dashboard">
            <p>Student Dashboard</p>
            <div className="first-row">
                <div>
                    <div className="attendance-curve" >
                        <i class='bx bx-time'></i>
                        <p>60%</p>
                        <p>Attendance</p>
                    </div>
                    <div className="curve-chart">
                        <CurveChart
                            width={'100%'}
                            height={'300px'}
                            chartType="LineChart"
                            loader=""
                            data={data3}
                            options={options3}
                        />
                    </div>
                </div>

                <div>
                    <div className="attendance-curve" >
                        <i class='bx bx-book-heart'></i>
                        <p>60%</p>
                        <p>No of cources</p>
                    </div>
                    <div className="curve-chart">
                        <CurveChart
                            width={'100%'}
                            height={'300px'}
                            chartType="LineChart"
                            loader=""
                            data={data3}
                            options={options3}
                        />
                    </div>
                </div>


                <div>
                    <div className="attendance-curve" >
                        <i class='bx bx-customize'></i>
                        <p>80%</p>
                        <p>Total Marks</p>
                    </div>
                    <div className="curve-chart">
                        <CurveChart
                            width={'100%'}
                            height={'300px'}
                            chartType="LineChart"
                            loader=""
                            data={data3}
                            options={options3}
                        />
                    </div>
                </div>
                   
            </div>

            <div className="second-row">
                <div className="second-row-class">
                    <div className="next-class" >
                        <i class='bx bx-time'></i>
                        <p>Next Class...</p>
                        <p>Lorem Ipsum Dolor Sit Amet</p>
                        <button>1 : 45 : 00</button>
                    </div>
                    <div className="coming-event">
                        <i class='bx bx-calendar-event'></i>
                        <p>Up coming event</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text ever since the 1500.</p>
                    </div>
                </div>
                <div className="second-row-graph">
                    <div>
                        <div>
                            <p>Lorem ipsum</p>
                        </div>
                        <div>
                            <i class='bx bx-minus'></i>
                            <i class='bx bx-revision'></i>
                            <i class='bx bx-x'></i>
                        </div>
                    </div>
                    <div className="graph-chart">
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="400px"
                            data={data}
                        />

                    </div>
                </div>
            </div>

            <div className="third-row">
                <div className="attendance">
                    <div>
                        <div>
                            <p>Attendance</p>
                        </div>
                        <div>
                            <i class='bx bx-minus'></i>
                            <i class='bx bx-revision'></i>
                            <i class='bx bx-x'></i>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <RoundChart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={data2}
                            options={options2}
                        />
                    </div>

                </div>
                <div className="calendar">
                    <div>
                        <div>
                            <p>Event Calendar</p>
                        </div>
                        <div>
                            <i class='bx bx-minus'></i>
                            <i class='bx bx-revision'></i>
                            <i class='bx bx-x'></i>
                        </div>
                    </div>
                    <hr />
                    <div className="calendar-component">
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>
            </div>

            <div className="fourth-row">
                <div>
                    <div>
                        <div className="name-info">
                            <img src={oval} />
                            <div>
                                <p>Elizea Dias</p>
                                <p>admin</p>
                            </div>
                        </div>
                        <div className="date-info">
                            <p>19 March 2020</p>
                        </div>
                    </div>

                    <div className="imp-msg">
                        <p>Important Notice: Scheduled Maintenance of SMS</p>
                    </div>
                    <div className="notice-msg">
                        <div className="paragraph">
                            <p>Dear SMS users,<br />
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet arcu elementum, laoreet purus a, convallis dui. Donec gravida diam sed orci fringilla, a porta lectus tempor. Morbi in urna ligula. Quisque vulputate neque velit, ac congue quam consequat id. Donec ultrices elit vitae mi fringilla, nec placerat diam fringilla. Fusce dignissim, tortor vitae fringilla tincidunt.
                          </p>
                        </div>
                        <div className="hover-icons">
                            <i class='bx bx-camera icon-green'></i>
                            <i class='bx bx-trash-alt icon-red'></i>
                            <i class='bx bx-share icon-blue'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourth-row">
                <div>
                    <div>
                        <div className="name-info">
                            <img src={oval} />
                            <div>
                                <p>Elizea Dias</p>
                                <p>admin</p>
                            </div>
                        </div>
                        <div className="date-info">
                            <p>19 March 2020</p>
                        </div>
                    </div>

                    <div className="imp-msg">
                        <p>Important Notice: Scheduled Maintenance of SMS</p>
                    </div>
                    <div className="notice-msg">
                        <div className="paragraph">
                            <p>Dear SMS users,<br />
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet arcu elementum, laoreet purus a, convallis dui. Donec gravida diam sed orci fringilla, a porta lectus tempor. Morbi in urna ligula. Quisque vulputate neque velit, ac congue quam consequat id. Donec ultrices elit vitae mi fringilla, nec placerat diam fringilla. Fusce dignissim, tortor vitae fringilla tincidunt.
                          </p>
                        </div>
                        <div className="hover-icons">
                            <i class='bx bx-camera icon-green'></i>
                            <i class='bx bx-trash-alt icon-red'></i>
                            <i class='bx bx-share icon-blue'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth-row">
                <div>
                    <div>
                        <div className="name-info">
                            <img src={oval} />
                            <div>
                                <p>Elizea Dias</p>
                                <p>admin</p>
                            </div>
                        </div>
                        <div className="date-info">
                            <p>19 March 2020</p>
                        </div>
                    </div>

                    <div className="imp-msg">
                        <p>Important Notice: Scheduled Maintenance of SMS</p>
                    </div>
                    <div className="notice-msg">
                        <div className="paragraph">
                            <p>Dear SMS users,<br />
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet arcu elementum, laoreet purus a, convallis dui. Donec gravida diam sed orci fringilla, a porta lectus tempor. Morbi in urna ligula. Quisque vulputate neque velit, ac congue quam consequat id. Donec ultrices elit vitae mi fringilla, nec placerat diam fringilla. Fusce dignissim, tortor vitae fringilla tincidunt.
                          </p>
                        </div>
                        <div className="hover-icons">
                            <i class='bx bx-camera icon-green'></i>
                            <i class='bx bx-trash-alt icon-red'></i>
                            <i class='bx bx-share icon-blue'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seventh-row">
                <button className="grey-color">Teacher Panel</button>
                <button className="dark-grey-color">School Panel</button>
            </div>
        </div>

    )
}
export default StudentDashboard;