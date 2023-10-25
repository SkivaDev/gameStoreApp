'use client'
import { styled, Badge } from '@mui/material';

export const StatusBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: true ? theme.palette.success.light : '',
    color: theme.palette.success.light,
    boxShadow: `0 0 0 2px ${theme.palette.common.black.light}`,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      border: '1px solid currentColor',
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      animation: 'ripple 1.2s infinite ease-in-out',
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  },
}));