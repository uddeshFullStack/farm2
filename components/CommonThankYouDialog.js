import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Image from 'next/image';

const CommonThankYouDialog = ({ open, onClose, topMessage, message, contact, onDone }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <div className="flex flex-col rounded-lg font-inter" style={{ marginLeft: '0px' }}>
          <div className="bg-white rounded-lg text-center">
            <div className="flex justify-center relative" style={{ width: '100%', height: '350px' }}>
              <Image
                src="/Vector.jpg"
                alt="icon"
                width={800}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <p className='text-primary-colour font-bold text-5xl'>{topMessage}</p>
            <p className="text-gray-500 mb-2">{message}</p>
            {contact && <p className="text-gray-500 mb-4">{contact}</p>} 
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className='flex justify-center w-full'>
          <Button 
            onClick={onDone}  
            style={{ 
              backgroundColor: '#fbc800', 
              color: '#004d35',
              fontWeight: 600,
              width:"200px"
            }}
          >
            Done
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CommonThankYouDialog;
