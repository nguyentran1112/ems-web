import React, { useState, useEffect } from "react";
import WindowIcon from "@mui/icons-material/Window";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { styled } from "@mui/material/styles";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import InputLabel from "@mui/material/InputLabel";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useLocation } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    fontSize: 18,
    width: 80,
}));

export default function Detail(props) {
    const Group = [
        {
            id: 0,
            descripsion: "Tất cả cảnh báo",
        },
        {
            id: 1,
            descripsion: "Nghiêm trọng	",
        },
        {
            id: 2,
            descripsion: "Mức cao",
        },
        {
            id: 3,
            descripsion: "Mức trung bình",
        },
        {
            id: 4,
            descripsion: "Mức thấp	",
        },
    ];
    const GroupIP = [
        {
            id: 0,
            ip: '172.16.1.32',
            name: "172.16.1.32"
        },
        {
            id: 1,
            ip: '172.16.1.32',
            name: "TRS-32-001"
        },
        {
            id: 2,
            ip: "172.16.1.133",
            name: 'TRS-32-002'
        },
        {
            id: 3,
            ip: "172.16.1.134",
            name: "TRS-32-003"
        },
        {
            id: 4,
            ip: "172.16.1.162",
            name: "TRS-64-001"
        },
        {
            id: 5,
            ip: "172.16.1.163",
            name: "TRS-64-002"
        },
        {
            id: 6,
            ip: "172.16.1.164",
            name: "TRS-64-003"
        },
    ];
    const location = useLocation();

    var headers = {}
    const [option, setOption] = useState([]);
    const [ListNodes, SetListNodes] = useState([]);
    const [id, setId] = useState((location.state).toString());
    const [severity, setSeverity] = useState(1);
    useEffect(() => {
        setId((location.state).toString());
    }, [])
    useEffect(() => {
        fetch("https://172.16.1.120:40081/WebService.asmx/ListNodesGroup", {
            method: "GET",
            mode: "cors",
            headers: headers,
        })
            .then((res) => res.json())
            .then((json) => setOption(json));
    }, []);
    useEffect(() => {
        fetch(`https://172.16.1.120:40081/WebService.asmx/ShowNodeAlarmsJson?NodeIP=${id}&Severity=${severity}`, {
            method: "GET",
            mode: "cors",
            headers: headers,
        })
            .then((res) => res.json())
            .then((json) => SetListNodes(json));
    }, [severity, id]);
    const nodes = (ListNodes.filter(node => node.Color == '#D52A80')).reduce((total, node) => total + Number(node.AlarmLevel), 0)
    //const totalC = nodes
    console.log("node", nodes);
    const handleSelectSeverity = (e) => {
        setSeverity(e.target.value);

    };
    const handleSelectIp = (e) => {
        setId(e.target.value)
    }
    return (
        <div className="Home">
            <div style={{ margin: 16 }}>
                <div style={styleTitle}>
                    <WindowIcon></WindowIcon>
                    <div style={styleTextTitle}>Giám sát chi tiết</div>
                </div>
                <div style={styleBody}>
                    <FormControl style={styleFormControl}>
                        <InputLabel id="demo-simple-select-label">
                            Thiết bị
                        </InputLabel>
                        <Select value={option.ID} onChange={handleSelectIp}>
                            {GroupIP.map((option) => (
                                <MenuItem key={option.id} value={option.ip}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl style={styleFormControl}>
                        <InputLabel id="demo-simple-select-label">
                            Mức độ cảnh báo
                        </InputLabel>
                        <Select value={option.id} onChange={handleSelectSeverity}>
                            {Group.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.descripsion}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="outlined">Chi tiết</Button>
                    <Box sx>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Item style={{ backgroundColor: "#FF69B4" }}>
                                    {(ListNodes.filter(node => node.Color == '#D52A80')).reduce((total, node) => total + Number(node.AlarmLevel), 0)}
                                    <WarningIcon />
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item style={{ backgroundColor: "#ff8000" }}>
                                    {(ListNodes.filter(node => node.Color == '#FF8000')).reduce((total, node) => total + Number(node.AlarmLevel),0)}
                                    <WarningIcon />
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item style={{ backgroundColor: "#FFD700" }}>
                                    {(ListNodes.filter(node => node.Color == '#FFFFAA')).reduce((total, node) => total + Number(node.AlarmLevel),0)}
                                    <WarningIcon />
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item style={{ backgroundColor: "#00FFFF" }}>
                                    {(ListNodes.filter(node => node.Color == '#AAFFFF')).reduce((total, node) => total + Number(node.AlarmLevel),0)}
                                    <WarningIcon />
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item style={{ backgroundColor: "#008000" }}>
                                    {ListNodes.reduce((total, node) => total + Number(node['AlarmLevel']), 0
                                    )}
                                    <CheckIcon />
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item>
                                    TRS
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>

                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thời gian</th>
                            <th>Bảng mạch</th>
                            <th>Loại cảnh báo</th>
                            <th>Thành phần</th>
                            <th>Trạng thái</th>
                            <th>Mã</th>
                            <th>Cấp độ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListNodes.map((Node, index) => (
                            <tr key={Node.ID}>
                                <td>{index + 1}</td>
                                <td>
                                    {Node["DateTime"]}
                                </td>
                                <td>{Node["Category"]}</td>
                                <td style={{ backgroundColor: Node.Color }}>
                                    {(Node["AlarmData"].split(':')[1])}
                                </td>
                                <td>{(Node["AlarmData"].split(':')[0])}</td>
                                <td>Cảnh báo</td>
                                <td>{Node['EventID']}</td>
                                <td>{Node['AlarmLevel']}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

const styleTitle = {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    margin: 16,
    paddingBottom: 16,
    textAlign: "left",
    borderBottom: "1px solstt",
    alignItems: "center",
};

const styleTextTitle = {
    marginLeft: 8,
};

const styleBody = {
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    margin: 14,
    alignItems: "center",
    justifyContent: "space-between",
};

const styleFormControl = {
    width: 200
};
