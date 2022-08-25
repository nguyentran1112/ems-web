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
    label: "TZ32",
    value: "TZ32",
  },
  {
    label: "TZ128",
    value: "TZ128",
  },
  {
    label: "TRS",
    value: "TRS",
  },
];

export default function ListDevices() {
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
          <div style={styleTextTitle}>Danh sách thiết bị</div>
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
              <th>Auto ID</th>
              <th>Tên thiết bị</th>
              <th>Loại</th>
              <th>Địa chỉ IP</th>
              <th>Ngày lắp đặt</th>
              <th>Nhóm</th>
              <th>Số máy trực</th>
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
            label="Mã định danh"
            variant="outlined"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Tên thiết bị"
            variant="outlined"
          />
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Loại thiết bị</InputLabel>
            <Select value={option} onChange={handleSelect}>
              {options.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Địa chỉ IP"
            variant="outlined"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack style={{ margin: 10 }} spacing={3}>
              <DesktopDatePicker
                label="Ngày lắp đặt"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Số máy trực"
            variant="outlined"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Tổng đài ngoài"
            variant="outlined"
          />
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Nhóm</InputLabel>
            <Select value={option} onChange={handleSelect}>
              {optionsType.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Button color="error" style={{ marginRight: 32 }} variant="outlined">
            Xóa
          </Button>
        </div>
      </div>

      {/* <div style={{borderWidth: 1, width: '100%'}}></div> */}
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Nhóm thiết bị</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexGrow: 3 }}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Chọn</th>
                  <th>ID</th>
                  <th>Tên nhóm</th>
                  <th>Mô tả</th>
                  <th>Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {rowGroup.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: "green" }}>
                      <CheckIcon />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.group}</td>
                    <td>{row.descripsion}</td>

                    <td>{row.date}</td>
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack
                style={{ marginRight: 10, marginLeft: 10, marginBottom: 10 }}
                spacing={3}
              >
                <DesktopDatePicker
                  label="Ngày lắp đặt"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="ID"
              variant="outlined"
            />
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Tên nhóm"
              variant="outlined"
            />
            <TextField
              style={{ margin: 10 }}
              id="outlined-basic"
              label="Ngày tạo"
              variant="outlined"
            />
          </div>
          <div style={{marginLeft: 20}}>
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
              Cập nhật Topology
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
