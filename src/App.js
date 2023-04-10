import './css/App.css'
import {useState} from "react";
import {Divider, List, ListItem, ListItemText} from "@mui/material";


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    marginLeft: "20px",
    paddingTop: "20px"
};

function App() {

    const [name, setName] = useState("Marie");


    return (

        <div>
            <div style={{
                backgroundColor: "lightblue",
                fontWeight: "bold"
            }}>
                <h1>
                    Maries Vlog
                </h1>
                <h2>
                    Täglich neue Vlogs und Beiträge
                </h2>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Start"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button divider>
                        <ListItemText primary="Über mich"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="bisherige Ziele"/>
                    </ListItem>
                    <Divider light/>
                    <ListItem button>
                        <ListItemText primary="Q&A"/>
                    </ListItem>
                </List>


                <img src={require("./img/pexels-jaime-reimer-2662116.jpg")} style={{
                    width: "250px",
                    marginLeft: "800px",
                    marginTop: "40px"
                }}/>
                <h3 style={{
                    paddingLeft: "800px",
                    fontsize: "3em",
                    marginTop: "3px"
                }}>
                    Norwegen 2022

                </h3>

            </div>
        </div>

    );
}

export default App;
