import React, { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const rows = [
  {
    id: 1108,
    level: "1	Nghiêm trọng",
    type: "TZ",
    TP: "CPUCard",
    addIP: "IC3 error	",
    group: "Lỗi hoạt động của khối IC DTMF",
  },
  {
    id: 1109,
    level: "2	Mức cao",
    type: "TZ",
    TP: "CPUCard",
    addIP: "Bus Error	",
    group: "Lỗi giao tiếp Bus CPU tổng đài",
  },
  {
    id: 1110,
    level: "2	Mức cao",
    type: "TZ",
    TP: "CPUCard",
    addIP: "RNS error	",
    group: "Lỗi của khối RNS trên card CPU",
  },
];
const rowGroup = [
  {
    id: 0,
    descripsion: "Bình thường	",
    group: "#80FF00",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 1,
    descripsion: "Nghiêm trọng	",
    group: "#D52A80",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 2,
    descripsion: "Mức cao	",
    group: "#FF8000",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 3,
    descripsion: "Mức trung bình		",
    group: "#FFFFAA",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 4,
    descripsion: "Mức thấp	",
    group: "#AAFFFF",
    date: "2022-06-20 10:56:24",
  },
];
const optionsType = [
  {
    label: "Hiển thị",
    value: "Show",
  },
  {
    label: "Ẩn",
    value: "Hide",
  },
];
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
const options = [
  {
    label: "Nghiêm trọng",
    value: "NT",
  },
  {
    label: "Cao",
    value: "H",
  },
  {
    label: "Trung bình",
    value: "TB",
  },
  {
    label: "Thấp",
    value: "Low",
  },
];

export default function Setting() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [option, setOption] = useState(options[0].value);
  console.log(option);
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="ListDevices">
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Phân loại cảnh báo</div>
        </div>
        <div style={styleBody}>
          <div style={{ marginRight: 32 }}>Tìm theo nội dung</div>
          <TextField
            style={{ marginRight: 24 }}
            id="outlined-basic"
            label="Tìm kiếm"
            variant="outlined"
          />
          <Button style={{ marginRight: 32 }} variant="outlined">
            Tìm kiếm
          </Button>
          <div>Tổng số thiết bị: 3</div>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Mã cảnh báo</th>
              <th>Cấp độ</th>
              <th>Phân loại</th>
              <th>Thành phần</th>
              <th>Nội dung cảnh báo </th>
              <th>Diễn giải</th>
              <th>Hiển thị</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ color: "green" }}>
                  <CheckIcon />
                </td>
                <td>{row.id}</td>
                <td>{row.level}</td>
                <td>{row.type}</td>
                <td>{row.TP}</td>
                <td>{row.addIP}</td>
                <td>{row.group}</td>
                <td>
                  <CheckBoxOutlineBlankIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Mã cảnh báo"
            variant="outlined"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Nội dung cảnh báo"
            variant="outlined"
          />
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">
              Cấp độ cảnh báo
            </InputLabel>
            <Select value={option} onChange={handleSelect}>
              {options.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Diễn giải"
            variant="outlined"
          />

          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Hiển thị</InputLabel>
            <Select value={option} onChange={handleSelect}>
              {optionsType.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button color="success" style={{ margin: 10 }} variant="outlined">
            Cập nhật
          </Button>
        </div>
      </div>

      {/* <div style={{borderWidth: 1, width: '100%'}}></div> */}
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Màu sắc báo cảnh</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexGrow: 3 }}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Cấp độ cảnh báo</th>
                  <th>Mức độ</th>
                  <th>Màu sắc</th>
                </tr>
              </thead>
              <tbody>
                {rowGroup.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: "green" }}>
                      <CheckIcon />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.descripsion}</td>

                    <td>
                      <Item style={{ backgroundColor: row.group }}></Item>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div
            style={{
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
              flexGrow: 2,
            }}
          >
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Cấp cảnh báo"
              variant="outlined"
            />
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Mức độ cảnh báo"
              variant="outlined"
            />
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Màu hiển thị"
              variant="outlined"
            />
            <Button style={{ margin: 10 }} variant="outlined">
              Thêm
            </Button>
          </div>
        </div>
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
};

const styleFormControl = {};
