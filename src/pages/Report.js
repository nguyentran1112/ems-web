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
    label: "Tất cả cảnh báo lội hiện tại",
    value: "Tất cả cảnh báo lội hiện tại",
  },
  {
    label: "Thống kê cảnh báo theo ngày",
    value: "Thống kê cảnh báo theo ngày",
  },
  {
    label: "Thống kê cảnh báo theo thiết bị",
    value: "Thống kê cảnh báo theo thiết bị",
  },
  {
    label: "Lịch sử truy cập TTQL",
    value: "Lịch sử truy cập TTQL",
  },
];

export default function Report() {
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
          <div style={styleTextTitle}>Báo cáo thống kê</div>
        </div>
        <div style={styleBody}>
          <div style={{ marginRight: 32 }}>Chọn loại báo cáo</div>
          <FormControl style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">
              --Loại báo cáo--
            </InputLabel>
            <Select value={option} onChange={handleSelect}>
              {options.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>Ngày xem báo cáo</div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack
                style={{ marginRight: 10, marginLeft: 10, marginBottom: 10 }}
                spacing={3}
              >
                <DesktopDatePicker
                  label="Từ ngày"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack
                style={{ marginRight: 10, marginLeft: 10, marginBottom: 10 }}
                spacing={3}
              >
                <DesktopDatePicker
                  label="Đến ngày"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      {/* <div style={{borderWidth: 1, width: '100%'}}></div> */}
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <Button
            color="success"
            style={{ marginRight: 32 }}
            variant="outlined"
          >
            Xem báo cáo
          </Button>
          <Button
            color="success"
            style={{ marginRight: 32 }}
            variant="outlined"
          >
            Tải file excel
          </Button>
          <div>Tổng số dòng</div>
        </div>
        <div style={styleTitle}>
          <WindowIcon></WindowIcon>
          <div style={styleTextTitle}>Chi tiết báo cáo</div>
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
