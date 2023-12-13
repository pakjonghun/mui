'use client';

import React from 'react';
import {
  ListItem,
  List,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
} from '@mui/material';
import { menuList } from './constants';
import Link from 'next/link';

const MainLayout = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            제목
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open variant="temporary">
        <List>
          {menuList.map(({ name, path }) => (
            <ListItem key={name}>
              <Link href={path}>{name}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MainLayout;
