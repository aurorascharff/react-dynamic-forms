import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../Routes';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {Object.entries(pathNames)?.map(([key, value], index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                navigate(value);
              }}
            >
              {key}
            </Button>
          );
        })}
      </div>
    </>
  );
}
