import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import { Button } from '@mui/material';
import authAxios from '../../../../lib/refreshToken';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MyPage() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setphonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <List
        sx={{ margin: '20px auto', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader style={{ fontWeight: 'bold', fontSize: 14 }} component="div" id="nested-list-subheader">
            회원 정보
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={id} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccessibilityNewTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PhoneAndroidSharpIcon />
          </ListItemIcon>
          <ListItemText primary={phoneNumber} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <HomeTwoToneIcon />
          </ListItemIcon>
          <Button variant="outlined" size="small" color="success">
            수정
          </Button>
          <ListItemText primary={address} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ReceiptLongOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="소개" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={info} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Footer />
    </>
  );
}

export default MyPage;
