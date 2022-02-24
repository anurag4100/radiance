import React, {useState,useEffect} from "react";
import {useTheme} from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

import { API, graphqlOperation } from 'aws-amplify';
import { createSchools } from '../.././graphql/mutations';
import { listSchools } from '../.././graphql/queries'

const mainChartData = getMainChartData();
const PieChartData = [
    {
        name: "Group A",
        value: 400,
        color: "primary"
    }, {
        name: "Group B",
        value: 300,
        color: "secondary"
    }, {
        name: "Group C",
        value: 300,
        color: "warning"
    }, {
        name: "Group D",
        value: 200,
        color: "success"
    },
];

export default function Dashboard(props) {
    var classes = useStyles();
    var theme = useTheme();

    // local
    var [mainChartState, setMainChartState] = useState("monthly");
    var [schools, setSchools] = useState([]);
    async function addSchools() {
      
      try {
        console.log("Starting addSchools...")
        await API.graphql(graphqlOperation(createSchools, {input: {
          "addrs_id": "Chinga school",
          "school_name": "Chinga school",
          "school_principal": "Anurag",
          "other": "Lorem ipsum dolor sit amet"
        }})) 
        console.log("addSchools complete.")
      } catch (err) {
        console.log('error creating todo:', err)
      }
    }
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching schools...")
            const data = await API.graphql(graphqlOperation(listSchools)) ;
            console.log(data);
            return data;
          };
          fetchData().then(res => setSchools(res?.data?.listSchools)).catch(console.error);
          console.log("Final schools");
          console.log(schools.items);
      }, []);
    return (
        <div>
            <button onClick={async () => {await addSchools();}}>Create</button>
            <Widget
                title="Schools"
                upperTitle
                noBodyPadding
                bodyClass={classes.tableWidget}
            >
          </Widget>
          {schools.items && <Table data={schools.items} />}
        </div>
    );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;

    return array.map((item, index) => {
        let randomValue = Math.floor(Math.random() * multiplier + 1);

        while (randomValue <= min || randomValue >= max || (lastValue && randomValue - lastValue > maxDiff)) {
            randomValue = Math.floor(Math.random() * multiplier + 1);
        }

        lastValue = randomValue;

        return {value: randomValue};
    });
}

function getMainChartData() {
    var resultArray = [];
    var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
    var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
    var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

    for (let i = 0; i < tablet.length; i++) {
        resultArray.push({tablet: tablet[i].value, desktop: desktop[i].value, mobile: mobile[i].value});
    }

    return resultArray;
}
