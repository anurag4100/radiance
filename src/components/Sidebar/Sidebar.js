import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  Person,
  School,
  SupervisorAccount,
  ExpandMore,
  MenuBook,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Teachers", link: "/app/teachers", icon: <Person /> },
  { id: 2, label: "Students", link: "/app/students", icon: <School /> },
  {
    id: 3,
    label: "Administration",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Fianance", link: "/app/ui/icons" },
      { label: "Inventory", link: "/app/ui/charts" },
      { label: "Transport", link: "/app/ui/maps" },
      { label: "Gate Management", link: "/app/ui/maps" },
      { label: "Online Payment", link: "/app/ui/maps" },
      { label: "User", link: "/app/ui/maps" },
      { label: "Hostel", link: "/app/ui/maps" },
      { label: "Reminders", link: "/app/ui/maps" },
      { label: "Human Resource", link: "/app/ui/maps" },
      { label: "Settings", link: "/app/ui/maps" },
    ],
  },
  {
    id: 4,
    label: "Academics",
    link: "/app/ui",
    icon: <MenuBook />,
    children: [
      { label: "Leaves", link: "/app/ui/maps" },
      { label: "Applicants", link: "/app/ui/icons" },
      { label: "Attendance", link: "/app/ui/maps" },
      { label: "Examination", link: "/app/ui/maps" },
      { label: "Calendar", link: "/app/ui/charts" },
      { label: "Assignment", link: "/app/ui/maps" },
      { label: "Certificates", link: "/app/ui/maps" },
      { label: "ID Cards", link: "/app/ui/maps" },
      { label: "Library", link: "/app/ui/maps" },
      { label: "Gradebook", link: "/app/ui/maps" },
    ],
  },
  {
    id: 5,
    label: "Collaboration",
    link: "/app/ui",
    icon: <SupervisorAccount />,
    children: [
      { label: "Email", link: "/app/ui/maps" },
      { label: "SMS", link: "/app/ui/maps" },
      { label: "Tasks", link: "/app/ui/charts" },
      { label: "Notice Board", link: "/app/ui/maps" },
      { label: "Documents", link: "/app/ui/icons" },
      { label: "Events", link: "/app/ui/maps" },
      { label: "News", link: "/app/ui/maps" },
      { label: "Forms", link: "/app/ui/maps" },
      { label: "Polls", link: "/app/ui/maps" },
      { label: "Allumni", link: "/app/ui/maps" },
    ],
  },

  { id: 6, type: "divider" },
  { id: 7, type: "title", label: "HELP" },
  {
    id: 8,
    label: "Library",
    link: "https://www.radiancetech.in",
    icon: <LibraryIcon />,
  },
  {
    id: 9,
    label: "Support",
    link: "https://www.radiancetech.in",
    icon: <SupportIcon />,
  },
  {
    id: 10,
    label: "FAQ",
    link: "https://www.radiancetech.in",
    icon: <FAQIcon />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
