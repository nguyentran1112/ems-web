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
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



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

export default function Home() {
  var headers = {}
  let navigate = useNavigate();

  const [option, setOption] = useState([]);
  const [ListNodes, SetListNodes] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    fetch("https://172.16.1.120:40081/WebService.asmx/ListNodes", {
      method: "GET",
      mode: "cors",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => SetListNodes(json));
  }, []);
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
    fetch(`https://172.16.1.120:40081/WebService.asmx/ShowAllNodeAlarms?GroupID=${id}`, {
      method: "GET",
      mode: "cors",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => SetListNodes(json));
  }, [id]);
  console.log(option);
  const handleSelect = (e) => {
    setId(e.target.value);
  };
  return (
    <div className="Home">
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Gi??m s??t t???ng quan</div>
        </div>
        <div style={styleBody}>
          <div>Hi???n th??? theo nh??m</div>
          <FormControl style={styleFormControl}>
            <InputLabel id="demo-simple-select-label">
              Hi???n th??? theo nh??m
            </InputLabel>
            <Select value={option.ID} onChange={handleSelect}>
              {option.map((option) => (
                <MenuItem key={option.ID} value={option.ID}>
                  {option.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="outlined" >Chi ti???t</Button>

          <Box sx>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item style={{ backgroundColor: "#FF69B4" }}>
                  42
                  <WarningIcon />
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "#ff8000" }}>
                  54
                  <WarningIcon />
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "#FFD700" }}>
                  57
                  <WarningIcon />
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "#00FFFF" }}>
                  34
                  <WarningIcon />
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "#008000" }}>
                  0
                  <CheckIcon />
                </Item>
              </Grid>
              <Grid item xs>
                <Item>
                  08
                  <FileDownloadIcon />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Thao t??c</th>
              <th>T??n thi???t b???</th>
              <th>C???nh b??o l???i</th>
              <th>Th???i ??i???m c???p nh???t</th>
              <th>?????a ch??? IP</th>
              <th>Lo???i</th>
              <th>Nh??m</th>
            </tr>
          </thead>
          <tbody>
            {ListNodes.map((Node, index) => (
              <tr key={Node.ID}>
                <td>{index + 1}</td>
                <td
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="contained">
                    <CallMadeIcon />
                  </Button>
                  <Button onClick={() => {
                    navigate('/detail', {state: Node['NodeIP']});
                  }} variant="contained">Chi ti???t</Button>
                </td>
                <td>{Node["TenNode"]}</td>
                <td>
                  {" "}
                  <Box sx>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Item style={{ backgroundColor: "#FF69B4" }}>5</Item>
                      </Grid>
                      <Grid item xs>
                        <Item style={{ backgroundColor: "#ff8000" }}>2</Item>
                      </Grid>
                      <Grid item xs>
                        <Item style={{ backgroundColor: "#FFD700" }}>8</Item>
                      </Grid>
                      <Grid item xs>
                        <Item style={{ backgroundColor: "#00FFFF" }}>3</Item>
                      </Grid>
                      <Grid item xs>
                        <Item style={{ backgroundColor: "#008000" }}>6</Item>
                      </Grid>
                    </Grid>
                  </Box>
                </td>
                <td>{Node['LastUpdate']}</td>
                <td>{Node['NodeIP']}</td>
                <td>{Node['Loai']}</td>
                <td>{Node['Group']}</td>
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
