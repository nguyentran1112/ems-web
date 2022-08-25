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
    Name: "nms-admin",
    fullName: "Quản trị hệ thống",
    idRole: "1",
    role: "Quản lý hệ thống",
  },
  {
    id: 2,
    Name: "nms-user-1	",
    fullName: "Giám sát 1",
    idRole: "2",
    role: "Giám sát hệ thống",
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
    label: "Reset lại mật khẩu",
    value: "All",
  },
  {
    label: "Không reset",
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
    label: "Giám sát hệ thống",
    value: "TZ32",
  },
  {
    label: "Quản lý hệ thống",
    value: "TZ128",
  },
];

export default function ListUser() {
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
          <div style={styleTextTitle}>Danh sách người dùng</div>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Chọn</th>
              <th>User ID</th>
              <th>Tên đăng nhập</th>
              <th>Tên đầy đủ</th>
              <th>ID Phân quyền</th>
              <th>Phân quyền</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ color: "green" }}>
                  <CheckIcon />
                </td>
                <td>{row.id}</td>
                <td>{row.Name}</td>
                <td>{row.fullName}</td>

                <td>{row.idRole}</td>
                <td>{row.role}</td>
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
            label="ID"
            variant="outlined"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Tên đăng nhập"
            variant="outlined"
          />
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Phân quyền</InputLabel>
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
            label="Tên đầy đủ"
            variant="outlined"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Mật khẩu"
            variant="outlined"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-basic"
            label="Nhập lại mật khẩu"
            variant="outlined"
          />
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">
              Reset Mật khẩu
            </InputLabel>
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
