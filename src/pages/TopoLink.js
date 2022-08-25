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
    id: 1,
    deviceName: "172.16.1.32",
    type: "TRS",
    date: "2022-06-20 10:56:24",
    addIP: "172.16.1.32",
    group: "Thử nghiệm loại 0",
  },
  {
    id: 2,
    deviceName: "172.16.1.32",
    type: "TRS",
    date: "2022-06-20 10:56:24",
    addIP: "172.16.1.33",
    group: "Thử nghiệm loại 0",
  },
  {
    id: 3,
    deviceName: "TRS-32-001",
    type: "TRS",
    date: "2022-06-20 10:56:24",
    addIP: "172.16.1.132",
    group: "Thử nghiệm loại 0",
  },
];
const rowGroup = [
  {
    id: 1,
    descripsion: "Chưa phân loại",
    group: "Thử nghiệm loại 0",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 2,
    descripsion: "Chưa phân loại",
    group: "Thử nghiệm loại 0",
    date: "2022-06-20 10:56:24",
  },
  {
    id: 3,
    descripsion: "Triển khai loạt 0",
    group: "Thử nghiệm loại 0",
    date: "2022-06-20 10:56:24",
  },
];
const optionsType = [
  {
    label: "Tất cả các nhóm",
    value: "All",
  },
  {
    label: "Thử nghiệm loạt 0",
    value: "TNL0",
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
    label: "Luồng E1",
    value: "E1",
  },
];
const options2 = [
  {
    label: "172.16.1.32",
    value: "172.16.1.32",
  },
  {
    label: "172.16.1.33",
    value: "172.16.1.32",
  },
  {
    label: "172.16.1.34",
    value: "172.16.1.34",
  },
];

export default function TopoLink() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [option, setOption] = useState(options[0].value);
  
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="ListDevices">
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}> Danh sách kết nối E1</div>
        </div>
        <div style={styleBody}>
          <div style={{ marginRight: 32 }}>Tìm theo tên</div>
          <TextField
            style={{ marginRight: 24 }}
            id="outlined-basic"
            label="Tìm kiếm"
            variant="outlined"
          />
          <Button style={{ marginRight: 32 }} variant="outlined">
            Tìm kiếm
          </Button>
          <div>Tổng số thiết bị: 18</div>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Chọn</th>
              <th>ID</th>
              <th>Tên</th>
              <th>Loại kết nối</th>
              <th>Thiết bị đầu</th>
              <th>Luồng E1 đầu</th>
              <th>Thiết bị cuối</th>
              <th>Luồng E1 cuối</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ color: "green" }}>
                  <CheckIcon />
                </td>
                <td>{row.id}</td>
                <td>{row.deviceName}</td>
                <td>{row.type}</td>
                <td>{row.addIP}</td>
                <td>{row.date}</td>
                <td>{row.group}</td>
                <td>
                  <CheckBoxOutlineBlankIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* <div style={{borderWidth: 1, width: '100%'}}></div> */}
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Thông tin chi tiết</div>
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
              label="TopoID"
              variant="outlined"
            />
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Tên kết nối"
              variant="outlined"
            />
            <FormControl style={{ margin: 10 }}>
              <InputLabel id="demo-simple-select-label">
                Loại kết nối
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
            <FormControl style={{ margin: 10 }}>
              <InputLabel id="demo-simple-select-label">
                Thiết bị đầu
              </InputLabel>
              <Select value={option} onChange={handleSelect}>
                {options2.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl style={{ margin: 10 }}>
              <InputLabel id="demo-simple-select-label">
                Thiết bị cuối
              </InputLabel>
              <Select value={option} onChange={handleSelect}>
                {options2.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="STT E1"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              color="success"
              style={{ marginRight: 32 }}
              variant="outlined"
            >
              Thêm
            </Button>
            <Button style={{ marginRight: 32 }} variant="outlined">
              Cập nhật
            </Button>
            <Button style={{ marginRight: 32 }} variant="outlined">
              Refresh
            </Button>
            <Button
              color="error"
              style={{ marginRight: 32 }}
              variant="outlined"
            >
              Xóa
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
