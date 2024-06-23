import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    ADMIN
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`data:image/png;base64,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`}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Admin
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    {/* VP Fancy Admin */}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                       
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                       
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
